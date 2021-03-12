function click(evt) {
	window.close();
	var url = evt.target.getAttribute('data-url');
	chrome.tabs.create({url: url}, function(tab) { });
}

document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('a.btn');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', click);
	}
});
