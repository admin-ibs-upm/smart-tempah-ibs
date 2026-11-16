// SW killer: buang SW lama, jangan cache apa-apa lagi
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
    .then(() => self.clients.claim())
    .then(() => self.registration.unregister())
  );
});
