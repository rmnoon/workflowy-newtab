window.onload = function() {
    var url = 'https://workflowy.com';
    var listId = localStorage['listId'];
    if (listId) {
        url += '/#/' + listId;
    }
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.update(tab.id, {
            url: url,
            highlighted: true
        });
    });
};
