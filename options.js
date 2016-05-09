function loadOptions() {
	var listId = localStorage['listId'] || '';
	document.getElementById('list-id').value = listId;
}

function saveOptions() {
	var listId = document.getElementById('list-id').value;
	if (listId === '') {
		listId = null;
	}
	if (!listId) {
		delete localStorage['listId'];
	} else {
		localStorage['listId'] = listId;
	}
	
	var statusTextElem = document.getElementById('status-text');
	statusTextElem.innerHTML = 'Saved!';
	setTimeout(function() {
		statusTextElem.innerHTML = '';
	}, 2000);
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save-button').addEventListener('click', saveOptions);
