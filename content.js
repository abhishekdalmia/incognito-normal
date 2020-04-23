chrome.runtime.onMessage.addListener(function(request, sender, response) {

    // request is an array containing all the urls of the current window
    let sending = request;
    chrome.runtime.sendMessage({
        urls: sending
    });

    response({ msg: request });

});