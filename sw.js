importScripts("./banks/manifest.js");

const CACHE_NAME = "h2-daily-math-v14";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./favicon.svg",
  "./manifest.json",
  "./questions.js",
  "./banks/manifest.js",
  "./gc.js",
  "./app.js"
];
const BANK_ASSETS = (globalThis.H2_BANK_FILES || []).map((f) => "./" + f);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([...CORE_ASSETS, ...BANK_ASSETS])).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Network-first so deployed updates show up immediately, with offline cache fallback.
  const reqPromise = url.pathname.includes("/banks/20")
    ? fetch(event.request)
    : fetch(event.request.url, { cache: "no-cache" });

  event.respondWith(
    reqPromise
      .then((resp) => {
        if (resp && resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return resp;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === "navigate") {
          const shell = await caches.match("./index.html");
          if (shell) return shell;
        }
        return Response.error();
      })
  );
});
