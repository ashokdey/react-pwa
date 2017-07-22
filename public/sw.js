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
    })
  );
});