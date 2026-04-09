document.addEventListener('DOMContentLoaded', () => {
    // GTM page_loaded event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
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
    });
    // End GTM page_loaded event
});
