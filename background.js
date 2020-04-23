chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.windows.create({ url: request.urls});
});