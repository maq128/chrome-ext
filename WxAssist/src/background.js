// http://developer.chrome.com/extensions/devguide.html

chrome.browserAction.onClicked.addListener( function( tab ) {
	// open WebMM
	chrome.tabs.create({ url: 'https://wx.qq.com/' }, function( tab ) {
	});
});

var nicks = {};

function parseNicks()
{
	var lines = localStorage[ 'nicks' ];
	if (lines == undefined) {
		lines = [
			'微信名1,本地名1',
			'微信名2,本地名2'
		].join('\n');
		localStorage[ 'nicks' ] = lines;
	}
	lines = lines.split(/\n/);
	nicks = {};
	for (var i=0; i < lines.length; i++) {
		var line = lines[i].trim();
		if (line.length == 0) continue;
		var tokens = line.split(/[\s,，]+/);
		if (tokens.length == 2) {
			nicks[tokens[0]] = tokens[1];
		}
	}
}
parseNicks();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.req == 'options') {
		parseNicks();
	}
});

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	if (sender.url == 'https://wx.qq.com/') {
		if (request.req == 'nicks') {
			sendResponse(nicks);
			return;
		}
	}
});
