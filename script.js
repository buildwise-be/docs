const firePageLoad = () => {
    // GTM page_loaded event
    const gtml_page_loaded = {
        event: 'page_loaded',
        meta: {
            event_id: crypto.randomUUID(),
            user_id: ''    // internal user identifier
        },
        page: {
            location: document.location.href.toLowerCase(),
            title: document.title.toLowerCase(),
            referrer: document.referrer.toLowerCase()
        }
    }

    // console.log("page loaded", gtml_page_loaded);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(gtml_page_loaded);
}


firePageLoad();

navigation.addEventListener('navigate', async (event) => {
    await event.finished;

    firePageLoad();
});