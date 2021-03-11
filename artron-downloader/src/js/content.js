(function() {
	var sc = document.createElement('script');
	sc.setAttribute('charset','UTF-8');
	sc.setAttribute('src', chrome.extension.getURL('js/page.js'));
	document.body.appendChild(sc);

	document.body.setAttribute('ExtId', chrome.runtime.id);
})();
