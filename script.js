const originalFetch = window.fetch;

window.fetch = async function (...args) {
    const [url, config] = args;

    const isMintlifyAnalytics =
        typeof url === "string" && url.includes("/_mintlify/api/v1/e");

    let bodyText = null;

    if (isMintlifyAnalytics && config?.body) {
        try {
            bodyText = config.body;
        } catch { }
    }

    const response = await originalFetch.apply(this, args);

    if (isMintlifyAnalytics && bodyText) {
        try {
            const events = JSON.parse(bodyText);

            events.events.forEach(event => {
                if (event.event === "docs.search.result_click") {
                    console.log("Search result clicked:", event);

                    const gtmObject = {
                        event: 'search_completed',
                        meta: {
                            event_id: crypto.randomUUID(),
                            user_id: '' // internal user identifier
                        },
                        page: {
                            location: document.location.href.toLowerCase(),
                            title: document.title.toLowerCase(),
                            referrer: document.referrer.toLowerCase()
                        },
                        search: {
                            keyword: event.properties.query,
                            result: event.properties.path,
                            count: '',    // the number of returned results is not contained in the Mintlify payload, so we set it to '' for now (can maybe do it using fetch interception of serach call)
                            index: '',    // the index of the selected result, which is also not contained in the Mintlify payload.
                        }
                    };

                    console.log("gtm object", gtmObject);
                }
                else if (event.event === "docs.content.view") {
                    console.log(event);
                    let currentUrl = event.properties["$current_url"];
                    let title = event.properties.title;
                    let referrer = event.referrer;
                    console.log("Content viewed:", currentUrl);
                    //VALUE:
// {
//     "event_id": "0218fee5-edaa-4631-b53d-2d363e11a173",
//     "subdomain": "buildwise-962a266c",
//     "anon_id": "anon_1775752020590_eyjb4i5",
//     "session_id": "session_1777388701878_y61cyfq",
//     "event": "docs.content.view",
//     "created_at": "2026-04-28T15:06:16.817Z",
//     "path": "/nl/welcome/what-is-tooli",
//     "referrer": "https://help.tooli.be/nl/welcome/what-is-tooli?search=Wie+is+tool",
//     "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
//     "properties": {
//         "subdomain": "buildwise-962a266c",
//         "title": "Wat is Tooli? - Tooli",
//         "$current_url": "https://help.tooli.be/nl/welcome/what-is-tooli",
//         "$viewport_height": "1241",
//         "$viewport_width": "1587",
//         "$browser_language": "en-US",
//         "$network_connection_type": "4g",
//         "$screen_height": "1080",
//         "$screen_width": "1920",
//         "$timezone": "Europe/Brussels"
//     }
// }

const gtml_page_loaded = {
        event: 'page_loaded',
        meta: {
            event_id: crypto.randomUUID(),
            user_id: ''    // internal user identifier
        },
        page: {
            location: currentUrl.toLowerCase(),
            title: title.toLowerCase(),
            referrer: referrer.toLowerCase()
        }
    }
    console.log("gtm object", gtml_page_loaded);

                }
            });
        } catch (e) {
        }
    }

    return response;
};