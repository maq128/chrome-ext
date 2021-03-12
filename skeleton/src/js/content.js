// content.js 与 web page javascript 共用同一套 DOM，但各自的 context 是独立的。
(function() {
	// 在 DOM 里埋下一个 extid，供 page.js 取用
	document.body.setAttribute('data-extid', chrome.runtime.id);

	// 在 web page 里引入 page.js
	// 需要配置 web_accessible_resources 才会允许引入
	var sc = document.createElement('script');
	sc.setAttribute('charset','UTF-8');
	sc.setAttribute('src', chrome.extension.getURL('js/page.js'));
	document.body.appendChild(sc);

	// 接收来自 background.js 的消息
	chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
		console.log('chrome.runtime.onMessageExternal:', msg, sender);
		sendResponse({success:true});
	});
})();
