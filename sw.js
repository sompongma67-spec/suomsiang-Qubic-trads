/* SUOMSIANG CRYPTO service worker: lets the browser offer "Install app" and keeps the app shell available offline.
   Live data (Qubic RPC, CoinGecko, exchanges) is never cached here. Change CACHE when you upload a new version. */
const CACHE='suomsiang-v1';
const SHELL=['./','index.html','manifest.webmanifest','favicon.ico','brand/suomsiang-icon-180.png','brand/suomsiang-icon-192.png','brand/suomsiang-icon-512.png','brand/suomsiang-maskable-512.png','qubic-logo.png','qubic-badge.png','qubicswap-cover.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(SHELL.map(u=>c.add(u)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.headers.has('range')||r.destination==='video'||r.destination==='audio')return;
  if(r.mode==='navigate'){
    e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put('index.html',cp))}return res}).catch(()=>caches.match('index.html').then(m=>m||caches.match('./'))));return}
  e.respondWith(caches.match(r).then(m=>{const net=fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}).catch(()=>m);return m||net}))});
