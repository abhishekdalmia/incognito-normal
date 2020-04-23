document.addEventListener('DOMContentLoaded', function() {

    let onlyTab, incognito;

    // document.getElementById('normalTab').addEventListener('click', function() {
    //     onlyTab = true;
    //     incognito = false;
    //     onclick();
    // }, false);
    // document.getElementById('normalWindow').addEventListener('click', function() {
    //     onlyTab = false;
    //     incognito = false;
    //     onclick();
    // }, false);
    // document.getElementById('incognitoTab').addEventListener('click', function() {
    //     onlyTab = true;
    //     incognito = true;
    //     onclick();
    // }, false);
    // document.getElementById('incognitoWindow').addEventListener('click', function() {
    //     onlyTab = false;
    //     incognito = true;
    //     onclick();
    // }, false);
    document.querySelector('button').addEventListener('click', onclick, false);

    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true},
            function(tabs) {
                // check onlyTab. If it is false, query again to get urls of all tabs in current window
                if (onlyTab === true) {
                    chrome.tabs.sendMessage(tabs[0].id, {urls: tabs[0].url, incognito: incognito}, getResponse);
                }
                else {
                    chrome.tabs.query({currentWindow: true},
                        function(allTabs) {
                            let allUrls = []
                            allTabs.forEach(element => {
                                allUrls.push(element.url);
                            });
                            chrome.tabs.sendMessage(tabs[0].id, {urls: allUrls, incognito: incognito}, getResponse);
                        });
                }
            });
    }

    function getResponse(res) {
        const div = document.createElement('div');
        // div.textContent = 'Message sent and recieved succesfully.';
        alert(res.incognito);
        document.body.append(div);
    }
});