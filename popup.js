document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', onclick, false);
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function(tabs) {
                chrome.tabs.query({ currentWindow: true },
                    function(allTabs) {
                        let allUrls = []
                        allTabs.forEach(element => {
                            allUrls.push(element.url);
                        });
                        chrome.tabs.sendMessage(tabs[0].id, allUrls, getResponse);
                    });
            });
    }

    function getResponse(res) {
        const div = document.createElement('div');
        div.textContent = 'Message sent and recieved succesfully.';
        // div.textContent = res.msg + ' is response.';
        document.body.append(div);
    }
});