document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('incognitoWindow').addEventListener('click', function() {
        onclick(true);
    }, false);
    document.getElementById('normalWindow').addEventListener('click', function() {
        onclick(false);
    }, false);

    // 'onclick' is called by buttons corresponding to both modes (normal and incognito)
    function onclick(mode = false) {

        chrome.tabs.query({ currentWindow: true },
            function(allTabs) {
                let allUrls = []
                allTabs.forEach(element => {
                    allUrls.push(element.url);
                });
                let flag = true;

                for (let ind = 0; ind < allTabs.length; ind++) {
                    if (!(((allTabs[ind]).url).startsWith('chrome://'))) {
                        chrome.tabs.sendMessage(allTabs[ind].id, {urls: allUrls, mode: mode});
                        flag = false;
                        break;
                    }
                }
                if (flag === true) {
                    alert('Norinc works only for windows having at least one "valid" web-page.\n' +
                            '(All tabs in this window are chrome:// link tabs.)');
                }
            });

    }
});