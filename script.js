window.dataLayer = window.dataLayer || [];
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

                    let searchId = event.properties.searchId;

                    let searchQueryEvent = eventsLib.find(event => event.event === "docs.search.query" && event.properties.searchId === searchId);
                    let resultCount = searchQueryEvent.properties.numHits;

                    const gtm_search_completed_event = {
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

                    console.log("gtm object", gtm_search_completed_event);
                    window.dataLayer.push(gtm_search_completed_event);
                }
                // Catching content viewed events, to trigger a page_loaded event in GTM
                else if (event.event === "docs.content.view") {
                    let currentUrl = event.properties["$current_url"];
                    let title = event.properties.title;
                    let referrer = event.referrer;

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
                    window.dataLayer.push(gtml_page_loaded);
                }
            });
        } catch (e) {
        }
    }

    return response;
};