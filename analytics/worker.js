// Cloudflare Worker: privacy-minimal SelectVerdict distribution analytics.
// Configure D1 binding DB, ALLOWED_ORIGIN, and ANALYTICS_READ_TOKEN.
// Do not log IP addresses, user agents, full URLs, referrers or cookies.
const sources = new Set(['reddit','linkedin','substack','flipboard','pinterest','direct','other']);
const types = new Set(['page_view','merchant_click']);
const clean = (x,n=90) => typeof x === 'string' ? x.slice(0,n).replace(/[^a-zA-Z0-9_./-]/g,'') : '';
const json = (data,status=200,headers={}) => new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}});
export default {
 async fetch(request,env) {
  const url = new URL(request.url);
  const origin = env.ALLOWED_ORIGIN || 'https://selectverdict.com';
  const cors = {'access-control-allow-origin':origin,'vary':'Origin'};
  if (request.method==='OPTIONS') return new Response(null,{status:204,headers:{...cors,'access-control-allow-methods':'POST, OPTIONS','access-control-allow-headers':'Content-Type'}});
  if (url.pathname==='/health') return json({ok:true});
  if (url.pathname==='/report' && request.method==='GET') {
    if (!env.ANALYTICS_READ_TOKEN || request.headers.get('authorization')!==`Bearer ${env.ANALYTICS_READ_TOKEN}`) return json({error:'unauthorized'},401);
    const days=Math.min(30,Math.max(1,Number(url.searchParams.get('days'))||14));
    const result=await env.DB.prepare("SELECT date,source,event_type,source_page,merchant,COUNT(*) AS events FROM analytics_events WHERE date >= date('now', '-' || ? || ' days') GROUP BY date,source,event_type,source_page,merchant ORDER BY date DESC,events DESC LIMIT 2000").bind(days).all();
    return json(result.results);
  }
  if(url.pathname!=='/collect' || request.method!=='POST') return json({error:'not found'},404,cors);
  if(request.headers.get('origin')!==origin) return json({error:'origin'},403,cors);
  const size=Number(request.headers.get('content-length')||0);
  if(size>2048) return json({error:'too large'},413,cors);
  let data;
  try { data=await request.json(); } catch {return json({error:'json'},400,cors);}
  if(!data || !types.has(data.event_type)) return json({error:'type'},400,cors);
  const source=sources.has(data.source)?data.source:'other';
  const page=clean(data.source_page,140);
  if(!page.startsWith('/') || page.includes('//')) return json({error:'page'},400,cors);
  const merchant=data.event_type==='merchant_click'?clean(data.merchant,50):'';
  await env.DB.prepare('INSERT INTO analytics_events (date,source,medium,campaign,content,event_type,source_page,merchant) VALUES (date(\'now\'),?,?,?,?,?,?,?)').bind(source,clean(data.medium,40),clean(data.campaign,90),clean(data.content,90),data.event_type,page,merchant).run();
  return json({ok:true},200,cors);
 }
};
