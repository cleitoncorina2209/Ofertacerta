// Service worker minimo - so o necessario pra habilitar "Adicionar a tela
// inicial" em mais navegadores. Nao guarda nada offline de propósito,
// porque os produtos mudam o tempo todo e nao queremos mostrar
// informacao desatualizada pro visitante.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

// Deixa passar todas as requisicoes direto pra rede, sem cache.
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
