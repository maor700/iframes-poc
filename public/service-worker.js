var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/logo192.png',
    '/script/main.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache', cache);
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(new Promise((resolve) => {
        if (event.request.url.match(/logo192.png/g)) {
            console.log('hi!!!');
            resolve(fetch('https://blog.hubspot.com/hubfs/image8-2.jpg'));
        } else resolve(fetch(event.request));
    }));

    // event.respondWith(
    //     caches.match(event.request)
    //     .then(function(response) {
    //         debugger;
    //         // Cache hit - return response
    //         if (response) {
    //             return response;
    //         }
    //         return fetch(event.request);
    //     })
    // );
});