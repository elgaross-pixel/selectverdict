import assert from 'node:assert/strict';
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { getDueBundles, publishScheduled } from '../scripts/publish-scheduled.mjs';

const repositoryRoot = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(await readFile(path.join(repositoryRoot, 'scheduled-content/manifest.json'), 'utf8'));
const workflow = await readFile(path.join(repositoryRoot, '.github/workflows/publish-scheduled.yml'), 'utf8');

test('schedule windows preserve bundle boundaries', () => {
  assert.deepEqual(getDueBundles(structuredClone(manifest), new Date('2026-09-07T03:59:59Z')).map(({ bundleId }) => bundleId), []);
  assert.deepEqual(getDueBundles(structuredClone(manifest), new Date('2026-09-07T04:00:00Z')).map(({ bundleId }) => bundleId), ['systeme-io-2026-09-07']);
  assert.deepEqual(getDueBundles(structuredClone(manifest), new Date('2026-09-08T04:00:00Z')).map(({ bundleId }) => bundleId), ['systeme-io-2026-09-07', 'systeme-io-2026-09-08']);
});

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'selectverdict-scheduler-'));
  await cp(path.join(repositoryRoot, 'scheduled-content'), path.join(root, 'scheduled-content'), { recursive: true });
  return { root, manifestPath: path.join(root, 'scheduled-content/manifest.json') };
}

test('each scheduled release creates only its bundle and uses safe dynamic staging', async (context) => {
  const { root, manifestPath } = await fixture();
  context.after(() => rm(root, { recursive: true, force: true }));
  assert.match(workflow, /git add scheduled-content\/manifest\.json/);
  assert.match(workflow, /git add --all -- src\/pages\//);
  for (const entry of manifest.entries) assert.doesNotMatch(workflow, new RegExp(`git add .*${entry.destination.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));

  const bundleA = await publishScheduled({ root, manifestPath, now: new Date('2026-09-07T04:00:00Z') });
  assert.deepEqual(bundleA.bundles.map(({ bundleId }) => bundleId), ['systeme-io-2026-09-07']);
  assert.equal(await readFile(path.join(root, manifest.entries[0].destination), 'utf8').then(() => true), true);
  assert.equal(await readFile(path.join(root, manifest.entries[1].destination), 'utf8').then(() => true), true);
  await assert.rejects(() => readFile(path.join(root, manifest.entries[2].destination), 'utf8'), { code: 'ENOENT' });
  await assert.rejects(() => readFile(path.join(root, manifest.entries[3].destination), 'utf8'), { code: 'ENOENT' });

  const bundleB = await publishScheduled({ root, manifestPath, now: new Date('2026-09-08T04:00:00Z') });
  assert.deepEqual(bundleB.bundles.map(({ bundleId }) => bundleId), ['systeme-io-2026-09-08']);
  assert.equal(await readFile(path.join(root, manifest.entries[2].destination), 'utf8').then(() => true), true);
  assert.equal(await readFile(path.join(root, manifest.entries[3].destination), 'utf8').then(() => true), true);
  const repeat = await publishScheduled({ root, manifestPath, now: new Date('2026-09-08T04:00:00Z') });
  assert.equal(repeat.bundles.length, 0);
});

test('publishing is idempotent after all bundles are released', async (context) => {
  const { root, manifestPath } = await fixture();
  context.after(() => rm(root, { recursive: true, force: true }));
  const first = await publishScheduled({ root, manifestPath, now: new Date('2026-09-08T04:00:00Z') });
  const second = await publishScheduled({ root, manifestPath, now: new Date('2026-09-08T04:00:00Z') });
  assert.equal(first.bundles.length, 2);
  assert.equal(second.bundles.length, 0);
  const updated = JSON.parse(await readFile(manifestPath, 'utf8'));
  assert.ok(updated.entries.every(({ status }) => status === 'published'));
});

test('an unexpected destination fails before any bundle file is copied', async (context) => {
  const { root, manifestPath } = await fixture();
  context.after(() => rm(root, { recursive: true, force: true }));
  const collision = path.join(root, manifest.entries[0].destination);
  await mkdir(path.dirname(collision), { recursive: true });
  await writeFile(collision, 'existing');
  await assert.rejects(() => publishScheduled({ root, manifestPath, now: new Date('2026-09-07T04:00:00Z') }), /Refusing to overwrite existing destination/);
  assert.equal(await readFile(collision, 'utf8'), 'existing');
  await assert.rejects(() => readFile(path.join(root, manifest.entries[1].destination), 'utf8'), { code: 'ENOENT' });
});
