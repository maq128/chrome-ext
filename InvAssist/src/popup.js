// http://developer.chrome.com/extensions/browserAction#popups

function click(evt) {
	window.close();
	var urls = (evt.target.getAttribute('open-pages') || '').split(',');
	for (var i = 0; i < urls.length; i++) {
		chrome.tabs.create({ url: urls[i] }, function( tab ) { });
	}
}

document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('a.btn');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', click);
	}
});
