window.onload = function() {
    var url = 'https://workflowy.com';
    var listId = localStorage['listId'];
    if (listId) {
        url += '/#/' + listId;
    }
    document.getElementById('wrapper').src = url;
};
