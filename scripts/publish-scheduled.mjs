#!/usr/bin/env node
import { copyFile, mkdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const defaultManifestPath = path.join(repositoryRoot, 'scheduled-content/manifest.json');

export function parseArguments(argv) {
  const options = { dryRun: false, now: new Date(), manifestPath: defaultManifestPath };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--dry-run') options.dryRun = true;
    else if (argument === '--now') options.now = new Date(argv[++index]);
    else if (argument === '--manifest') options.manifestPath = path.resolve(argv[++index]);
    else throw new Error(`Unknown argument: ${argument}`);
  }
  if (Number.isNaN(options.now.getTime())) throw new Error('The --now value must be a valid ISO-8601 timestamp.');
  return options;
}

function assertRelativeRepositoryPath(value, field, root) {
  if (typeof value !== 'string' || value.length === 0 || path.isAbsolute(value)) throw new Error(`${field} must be a non-empty relative path.`);
  const resolved = path.resolve(root, value);
  if (resolved !== root && !resolved.startsWith(`${root}${path.sep}`)) throw new Error(`${field} escapes the repository root: ${value}`);
  return resolved;
}

export function validateManifest(manifest, root = repositoryRoot) {
  if (manifest?.version !== 1 || !Array.isArray(manifest.entries)) throw new Error('Manifest must use version 1 and contain an entries array.');
  const ids = new Set();
  const destinations = new Set();
  for (const entry of manifest.entries) {
    for (const field of ['id', 'title', 'source', 'destination', 'publishAt', 'bundleId', 'status']) {
      if (typeof entry[field] !== 'string' || entry[field].length === 0) throw new Error(`Manifest entry is missing ${field}.`);
    }
    if (ids.has(entry.id)) throw new Error(`Duplicate entry id: ${entry.id}`);
    if (destinations.has(entry.destination)) throw new Error(`Duplicate destination: ${entry.destination}`);
    ids.add(entry.id);
    destinations.add(entry.destination);
    if (!['queued', 'published'].includes(entry.status)) throw new Error(`Invalid status for ${entry.id}: ${entry.status}`);
    if (Number.isNaN(Date.parse(entry.publishAt))) throw new Error(`Invalid publishAt for ${entry.id}: ${entry.publishAt}`);
    if (!Array.isArray(entry.dependencies)) throw new Error(`Dependencies must be an array for ${entry.id}.`);
    assertRelativeRepositoryPath(entry.source, 'source', root);
    assertRelativeRepositoryPath(entry.destination, 'destination', root);
  }
  for (const entry of manifest.entries) {
    for (const dependency of entry.dependencies) if (!ids.has(dependency)) throw new Error(`Unknown dependency ${dependency} for ${entry.id}.`);
  }
  const bundles = new Map();
  for (const entry of manifest.entries) {
    const existing = bundles.get(entry.bundleId);
    if (existing && existing !== entry.publishAt) throw new Error(`Bundle ${entry.bundleId} has inconsistent publishAt values.`);
    bundles.set(entry.bundleId, entry.publishAt);
  }
}

export function getDueBundles(manifest, now) {
  const publishedIds = new Set(manifest.entries.filter((entry) => entry.status === 'published').map((entry) => entry.id));
  const bundles = new Map();
  for (const entry of manifest.entries) {
    if (entry.status !== 'queued' || Date.parse(entry.publishAt) > now.getTime()) continue;
    if (!bundles.has(entry.bundleId)) bundles.set(entry.bundleId, []);
    bundles.get(entry.bundleId).push(entry);
  }
  const dueIds = new Set([...bundles.values()].flat().map((entry) => entry.id));
  return [...bundles.entries()].sort(([, left], [, right]) => Date.parse(left[0].publishAt) - Date.parse(right[0].publishAt)).map(([bundleId, entries]) => {
    const missing = entries.flatMap((entry) => entry.dependencies.filter((dependency) => !publishedIds.has(dependency) && !dueIds.has(dependency)));
    if (missing.length > 0) throw new Error(`Bundle ${bundleId} has unpublished dependencies: ${[...new Set(missing)].join(', ')}`);
    return { bundleId, entries };
  });
}

async function exists(filePath) {
  try { await stat(filePath); return true; } catch (error) { if (error?.code === 'ENOENT') return false; throw error; }
}

export async function publishScheduled({ dryRun = false, now = new Date(), manifestPath = defaultManifestPath, root = repositoryRoot } = {}) {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  validateManifest(manifest, root);
  const dueBundles = getDueBundles(manifest, now);
  const summary = { now: now.toISOString(), dryRun, bundles: dueBundles.map(({ bundleId, entries }) => ({ bundleId, entries: entries.map(({ id, destination }) => ({ id, destination })) })) };
  if (dryRun || dueBundles.length === 0) return summary;

  for (const { bundleId, entries } of dueBundles) {
    const resolved = entries.map((entry) => ({ entry, source: assertRelativeRepositoryPath(entry.source, 'source', root), destination: assertRelativeRepositoryPath(entry.destination, 'destination', root) }));
    for (const item of resolved) {
      if (!(await exists(item.source))) throw new Error(`Queued source is missing for ${item.entry.id}: ${item.entry.source}`);
      if (await exists(item.destination)) throw new Error(`Refusing to overwrite existing destination for ${item.entry.id}: ${item.entry.destination}`);
    }
    const created = [];
    try {
      for (const item of resolved) {
        await mkdir(path.dirname(item.destination), { recursive: true });
        await copyFile(item.source, item.destination);
        created.push(item.destination);
      }
      for (const item of resolved) {
        item.entry.status = 'published';
        item.entry.publishedAt = now.toISOString();
      }
      const temporaryManifest = `${manifestPath}.tmp`;
      await writeFile(temporaryManifest, `${JSON.stringify(manifest, null, 2)}\n`, { flag: 'wx' });
      await rename(temporaryManifest, manifestPath);
    } catch (error) {
      for (const destination of created.reverse()) await rm(destination, { force: true });
      await rm(`${manifestPath}.tmp`, { force: true });
      throw new Error(`Failed to publish bundle ${bundleId}; copied files were rolled back. ${error.message}`);
    }
  }
  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await publishScheduled(parseArguments(process.argv.slice(2)));
    if (result.bundles.length === 0) console.log(`No scheduled content is due at ${result.now}.`);
    else console.log(`${result.dryRun ? 'Due' : 'Published'} bundles: ${result.bundles.map(({ bundleId }) => bundleId).join(', ')}`);
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
