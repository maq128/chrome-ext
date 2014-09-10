// http://developer.chrome.com/extensions/devguide.html

chrome.browserAction.onClicked.addListener( function( tab ) {
	chrome.tabs.query({title:'密码保管箱'}, function(tabs) {
		if (tabs.length > 0) {
			chrome.windows.update(tabs[0].windowId, {
				focused: true
			}, function(window) {
			});
		} else {
			chrome.windows.getCurrent({}, function(window) {
				console.log(window);
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
