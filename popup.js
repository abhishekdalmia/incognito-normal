document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('incognitoWindow').addEventListener('click', function() {
        onclick(true);
    }, false);
    document.getElementById('normalWindow').addEventListener('click', function() {
        onclick(false);
    }, false);

    // 'onclick' is called by buttons corresponding to both modes
    function onclick(mode = false) {
        chrome.tabs.query({ currentWindow: true, active: true },
            function(tabs) {
                chrome.tabs.query({ currentWindow: true },
                    function(allTabs) {
                        let allUrls = []
                        allTabs.forEach(element => {
                            allUrls.push(element.url);
                        });
                        chrome.tabs.sendMessage(tabs[0].id, {urls: allUrls, mode: mode});
                    });
            });
    }
});