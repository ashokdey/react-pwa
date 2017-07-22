const cacheName = 'product-hunt';

self.addEventListener('install',  event => {
  event.waitUntil(
    caches.open(cacheName).then(cache  => cache.addAll(
      [
        '/static/js/bundle.js',
        '/index.html', 
        '/',
        '/fonts/icons.css',
        '/fonts/material.ttf',
        '/fonts/material.woff',
        '/fonts/material.woff2'
      ]
    ))
  );
});

self.addEventListener('fetch', event  => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if(response) {
        return response;
      }

      // Dynamically caching images lin 28-39

      let fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(fetchRes => {
        if(!fetchRes || fetchRes.status !== 0) {
          return fetchRes
        }

        let responseToCache = fetchRes.clone();
        caches.open(cacheName).then(cache => {
          cache.put(event.req, responseToCache);
        });
        return fetchRes;
      });
    })
  );
});