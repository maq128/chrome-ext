// http://developer.chrome.com/extensions/devguide.html

(function() {
	var sc = document.createElement('script');
	sc.setAttribute('charset','UTF-8');
	sc.setAttribute('src', chrome.extension.getURL('page.js'));
	document.body.appendChild(sc);

	document.body.setAttribute('DownloadAlbumExtId', chrome.runtime.id);
})();
