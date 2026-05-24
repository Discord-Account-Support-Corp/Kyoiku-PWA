self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// No caching (prevents iOS black screen + stale states)
self.addEventListener("fetch", () => {});
