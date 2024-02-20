browser.webNavigation.onHistoryStateUpdated.addListener(details => {
    console.log("background script call");
    if (details.url.includes("google.com/search?")) {
        browser.tabs.executeScript(details.tabId, {
            file: 'content.js',
            runAt: 'document_idle'
        }); 
    }
}, {url: [{hostSuffix: 'google.com'}]});
