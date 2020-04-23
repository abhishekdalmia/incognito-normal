chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 'request': object with properties: [urls, mode]
    chrome.runtime.sendMessage({
        urls: request.urls,
        mode: request.mode
    });
});