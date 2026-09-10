#!/usr/bin/env node
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesRoot = path.join(root, 'src/pages');
const output = path.join(root, 'src/data/editorial-library.json');
const TYPES = { pricing:'Pricing', guides:'Guides', alternatives:'Alternatives', compare:'Comparisons', best:'Best' };

async function walk(dir) {
  const out=[];
  for (const item of await readdir(dir,{withFileTypes:true})) {
    const full=path.join(dir,item.name);
    if (item.isDirectory()) out.push(...await walk(full));
    else if (item.isFile() && item.name.endsWith('.astro')) out.push(full);
  }
  return out;
}

function literal(source,name) {
  const match=source.match(new RegExp(`const\\s+${name}\\s*=\\s*(['\"])(.*?)\\1\\s*;`,'s'));
  return match?.[2]?.trim() || null;
}

export async function generateEditorialRegistry() {
  const entries=[];
  for (const [folder,type] of Object.entries(TYPES)) {
    const dir=path.join(pagesRoot,folder);
    let files=[]; try { files=await walk(dir); } catch (e) { if (e?.code!=='ENOENT') throw e; }
    for (const file of files) {
      if (path.basename(file)!=='index.astro') continue;
      const source=await readFile(file,'utf8');
      const canonical=literal(source,'canonical');
      const title=literal(source,'title');
      const description=literal(source,'description');
      if (!canonical || !title) throw new Error(`Editorial page must declare literal const canonical and const title: ${path.relative(root,file)}`);
      if (!canonical.startsWith(`/${folder}/`) || !canonical.endsWith('/')) throw new Error(`Canonical does not match route family for ${path.relative(root,file)}: ${canonical}`);
      entries.push({ type, href:canonical, title, description:description || '' });
    }
  }
  entries.sort((a,b)=>a.type.localeCompare(b.type)||a.title.localeCompare(b.title));
  const seen=new Set();
  for (const entry of entries) { if (seen.has(entry.href)) throw new Error(`Duplicate editorial canonical: ${entry.href}`); seen.add(entry.href); }
  await mkdir(path.dirname(output),{recursive:true});
  await writeFile(output,`${JSON.stringify(entries,null,2)}\n`);
  return entries;
}

if (process.argv[1]===fileURLToPath(import.meta.url)) {
  generateEditorialRegistry().then((entries)=>console.log(`Editorial registry: ${entries.length} pages`)).catch((error)=>{console.error(error.message);process.exitCode=1;});
}
