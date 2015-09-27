// http://developer.chrome.com/extensions/devguide.html

chrome.browserAction.onClicked.addListener( function( tab ) {
	// open WebMM
	chrome.tabs.create({ url: 'https://wx.qq.com/?mmdebug' }, function( tab ) {
	});
});
