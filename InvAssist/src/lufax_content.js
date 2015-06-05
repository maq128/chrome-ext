// http://developer.chrome.com/extensions/devguide.html

// 匹配网页: 项目列表页
// 匹配网址: http://list.lufax.com/list/listing
(function() {
	var sc = document.createElement('script');
	sc.setAttribute('charset','UTF-8');
	sc.setAttribute('src', chrome.extension.getURL('lufax_page.js'));
	document.body.appendChild(sc);

	document.body.setAttribute('InvAssistExtId', chrome.runtime.id);
})();
