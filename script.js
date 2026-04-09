const firePageLoad = (url = null) => {
    // GTM page_loaded event
    const gtml_page_loaded = {
        event: 'page_loaded',
        meta: {
            event_id: crypto.randomUUID(),
            user_id: ''    // internal user identifier
        },
        page: {
            location: url ?? document.location.href.toLowerCase(),
            title: document.title.toLowerCase(),
            referrer: document.referrer.toLowerCase()
        }
    }

    // console.log("page loaded", gtml_page_loaded);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(gtml_page_loaded);
}


firePageLoad();

navigation.addEventListener('navigate', (event) => {
    firePageLoad(event.destination.url);
});