// http://developer.chrome.com/extensions/devguide.html

(function() {
	// 自动卷滚到指定的位置
	var m = window.location.hash.match(/#@(\d+)/);
	if (m) {
		history.scrollRestoration = 'manual';
		var pos = parseInt(m[1]);
		window.scrollTo(0, pos);
	}

	// 自动查找并选中指定的文字
	m = window.location.hash.match(/#!(.+)/);
	if (m) {
		var sel = decodeURIComponent(m[1]);
		window.find(sel);
	}

	// 应答 extension 查询卷滚位置
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (sender.tab) return;
		if (request != 'scroll-pos') return;
		sendResponse({
			scrollX: window.scrollX,
			scrollY: window.scrollY
		});
	});
})();
