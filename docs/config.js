zuix.store("config", {
    "title": "eBook WebApp",
    "googleSiteId": "UA-123-456",
    "resourcePath": "./app/",
    "libraryPath": "https://genielabs.github.io/zkit/lib"
});

    // Check that service workers are registered
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js');
        });
    }
    