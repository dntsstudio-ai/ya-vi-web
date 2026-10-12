// Service worker для web-push (FCM). Подключим на этапе пушей в вебе.
// Пока — пустая заглушка, чтобы браузер не ругался на отсутствие файла.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
