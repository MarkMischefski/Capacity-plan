// Minimal service worker — its presence is required by Chrome/Android to treat
// this page as an installable PWA (manifest icon + standalone display) rather
// than falling back to a plain bookmark shortcut with a generic screenshot icon.
// No caching logic needed for this app's use case (always wants fresh data).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through — always hit network, no offline caching for this app
  event.respondWith(fetch(event.request));
});
