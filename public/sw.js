const cacheName = 'product-hunt';

self.addEventListener('install',  event => {
  event.waitUntil(
    caches.open(cacheName).then(cache  => cache.addAll(
      [
        '/static/js/bundle.js',
        '/index.html', 
        '/'
      ]
    ))
  );
});