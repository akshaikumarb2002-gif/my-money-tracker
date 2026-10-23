const CACHE='my-money-household-v12-finance-tools';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  const isPage=event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/');
  if(isPage){
    event.respondWith((async()=>{try{const fresh=await fetch(event.request,{cache:'no-store'});if(fresh&&fresh.ok){const cache=await caches.open(CACHE);cache.put('./index.html',fresh.clone());return fresh}}catch(e){}return (await caches.match('./index.html'))||Response.error()})());
    return;
  }
  event.respondWith((async()=>{const cached=await caches.match(event.request);if(cached)return cached;try{const fresh=await fetch(event.request);if(fresh&&fresh.ok){const cache=await caches.open(CACHE);cache.put(event.request,fresh.clone())}return fresh}catch(e){return cached||Response.error()}})());
});
