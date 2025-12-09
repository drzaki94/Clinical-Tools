const CACHE_NAME = 'clinical-tools-v1';
const ASSETS = [
  './',
  './index.html',
  './dengue.html',
  './emergency.html',
  './paeds.html',
  './antibiotics.html',
  './kbm.html',
  './manifest.json'
];

// Install the Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Assets (Serve from cache if available)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});