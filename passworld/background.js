// http://developer.chrome.com/extensions/devguide.html

chrome.browserAction.onClicked.addListener( function( tab ) {
	// 查找是否已经打开了列表窗口
	chrome.tabs.query({title:'密码保管箱'}, function(tabs) {
		if (tabs.length > 0) {
			// 激活该窗口
			chrome.windows.update(tabs[0].windowId, {
				focused: true
			}, function(window) {
			});
		} else {
			// 创建新窗口
			chrome.windows.getCurrent({}, function(window) {
				var width = 300;
				var height = 500;
				var left = window.left + window.width - width;
				var top = window.top + Math.floor((window.height - height) / 2);
				chrome.windows.create({
					url:'list.html',
					type:'panel',
					left: left,
					top: top,
					width: width,
					height: height
				}, function(window) {
				});
			});
		}
	});
});
