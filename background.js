chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // open the passed urls in normal window if arg: incognito not passed
    chrome.windows.create({url: request.urls, incognito: request.incognito||false});
});