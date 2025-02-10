const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'about.html',
    'css/style.css',
    'main.js'
]

//Call install Event
self.addEventListener('install', (event) => {
    console.log(`Service worker installed`)

    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('service Worker: Caching files');
                cache.addAll(cacheAssets)
            })
            .then(() => self.skipWaiting())
    )
})


//Call activate event
self.addEventListener('activate', (event) => {
    console.log(`Service worker activated`)
    // Remove unwanted caches
    event.waitUntil(
        caches.keys().then(cacheName => {
            return Promise.all(
                cacheName.map(cache => {
                    if(cache !== cacheName){
                        console.log('Service Worker: Clearing Old Cache')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

//Call Fetch Event
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching')
    // Load cache if not network
    event.respondWith(
        fetch(event.request)
            .then(res => {
                // make cpoy/clone of response
                const resClone = res.clone();
                // open cache
                caches  
                    .open(cacheName)
                    .then(cache => {
                        cache.put(event.request, resClone)
                    })
                    return res
            }).catch(err => caches(event.request)).then(res => res)
    )
})

