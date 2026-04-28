const originalFetch = window.fetch;

//General library to store all events that we can use to find data later, since not all data is contained in the payload of the clicked event, but can be found in the payload of other events (e.g. search query and result count can be found in the docs.search.query event, which has the same searchId as the docs.search.result_click event)
let eventsLib = [];


// We intercept the fetch calls to the Mintlify analytics endpoint, so that we can extract the search query and the clicked result from the payload. We then push a new event to the data layer, which can be used to trigger a GTM tag.
window.fetch = async function (...args) {
    const [url, config] = args;

    // Path of the Mintlify analytics endpoint: /_mintlify/api/v1/e
    const isMintlifyAnalytics =
        typeof url === "string" && url.includes("/_mintlify/api/v1/e");

    let bodyText = null;

    if (isMintlifyAnalytics && config?.body) {
        try {
            bodyText = config.body;
        } catch { }
    }

    // Do the original fetch call and wait for the response, so that we don't break the original functionality of the website. We do this after extracting the body text, because the body can only be read once.
    const response = await originalFetch.apply(this, args);

    if (isMintlifyAnalytics && bodyText) {
        try {
            const events = JSON.parse(bodyText);

            //Save all events in eventsLib, so that we can use them to find data later
            eventsLib.push(...events.events);

            events.events.forEach(event => {
                //Catching search result clicked events
                if (event.event === "docs.search.result_click") {
//of //if (event.event === "search_result_click") { ? => TE BEKIJKEN WAT VERSCHIL IS TUSSEN DEZE 2 EVENTS IN MINTLIFY
                    console.log("Search result clicked:", event);

                    let searchId = event.properties.searchId;

                    let searchQueryEvent = eventsLib.find(event => event.event === "docs.search.query" && event.properties.searchId === searchId);
                    let resultCount = searchQueryEvent.properties.numHits;

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
                            count: resultCount,    // the number of returned results is not contained in the Mintlify payload, so we set it to '' for now (can maybe do it using fetch interception of serach call)
                            index: '',    // the index of the selected result, which is also not contained in the Mintlify payload.
                        }
                    };

                    console.log("gtm object", gtmObject);
                }
                // Catching content viewed events, to trigger a page_loaded event in GTM
                else if (event.event === "docs.content.view") {
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