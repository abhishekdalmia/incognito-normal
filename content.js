chrome.runtime.onMessage.addListener(function(request, sender, response) {

    // request is an object with propert: [urls, incognito]
    chrome.runtime.sendMessage({
        msg: request
    });

    response({msg: request});

});