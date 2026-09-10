#!/usr/bin/env node
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist'); const origin='https://selectverdict.com';
async function walk(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())out.push(...await walk(f));else out.push(f)}return out}
function routeFor(file){let rel=path.relative(dist,file).replaceAll(path.sep,'/');if(rel==='index.html')return '/';if(rel.endsWith('/index.html'))return `/${rel.slice(0,-10)}/`;return `/${rel.replace(/\.html$/,'')}`}
function normalize(href,base){try{const u=new URL(href,new URL(base,origin));if(u.origin!==origin)return null;let p=u.pathname;p=p==='/'?'/':`${p.replace(/\/$/,'')}/`;return p}catch{return null}}
function attr(html,name){const m=html.match(new RegExp(`<link[^>]+rel=["']${name}["'][^>]+href=["']([^"']+)`, 'i'))||html.match(new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${name}["']`, 'i'));return m?.[1]||null}
const files=(await walk(dist)).filter(f=>f.endsWith('.html')); const pages=new Map();
for(const file of files){const route=routeFor(file),html=await readFile(file,'utf8');pages.set(route,{file,html});}
const sitemapFiles=(await walk(dist)).filter(f=>/sitemap.*\.xml$/.test(path.basename(f))); const sitemapText=(await Promise.all(sitemapFiles.map(f=>readFile(f,'utf8')))).join('\n');
const sitemap=new Set([...sitemapText.matchAll(/<loc>(https:\/\/selectverdict\.com[^<]+)<\/loc>/g)].map(m=>normalize(m[1],'/')).filter(Boolean));
const incoming=new Map([...pages.keys()].map(r=>[r,0])); const broken=[];
for(const [route,{html}] of pages){for(const m of html.matchAll(/<a\b[^>]*href=["']([^"'#]+)["']/gi)){const target=normalize(m[1],route);if(!target)continue;if(pages.has(target))incoming.set(target,(incoming.get(target)||0)+1);else if(!/\.(svg|png|jpg|jpeg|webp|ico|xml|txt|css|js|pdf)\/$/i.test(target))broken.push(`${route} -> ${target}`)}}
const editorial=/^\/(reviews|pricing|guides|alternatives|compare|best)\//; const errors=[];
for(const [route,{html}] of pages){if(!editorial.test(route))continue;const canonical=attr(html,'canonical');if(!canonical||normalize(canonical,route)!==route)errors.push(`${route}: wrong/missing canonical (${canonical||'none'})`);if(/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html))errors.push(`${route}: accidental noindex`);if(!sitemap.has(route))errors.push(`${route}: missing from sitemap`);if((incoming.get(route)||0)===0)errors.push(`${route}: orphan page`);}
for(const route of sitemap){if(!pages.has(route))errors.push(`${route}: sitemap URL has no built HTML`)}
errors.push(...broken.map(x=>`broken internal link: ${x}`));
const robots=await readFile(path.join(dist,'robots.txt'),'utf8').catch(()=>null);if(robots&&/Disallow:\s*\//i.test(robots))errors.push('robots.txt blocks the site root');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`Build QA PASS: ${pages.size} HTML routes; ${sitemap.size} sitemap routes; no editorial orphans/broken links/noindex/canonical errors.`);
