// Check brower support
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service_worker.js')
            .then(reg => console.log('Service worker registered'))
            .catch(err => console.log(`Service worker: Error: ${err}`))
    })
}