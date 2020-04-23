chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // open all passed urls in passed mode
    chrome.windows.create({url: request.urls, incognito: request.mode});
});