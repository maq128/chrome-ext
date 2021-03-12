// 接收来自 page.js 的消息
chrome.runtime.onMessageExternal.addListener(function(msg, sender, sendResponse) {
	console.log('chrome.runtime.onMessageExternal:', msg, sender);

	// 发送消息到 content.js
	var tabId = sender.tab.id;
	chrome.tabs.sendMessage(tabId, {info: 'background.js -> content.js'}, function(resp) {
		console.log('chrome.tabs.sendMessage:', resp);
	});

	sendResponse({success:true});
});

// 监测页签的变化
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log('chrome.tabs.onUpdated:', tabId, changeInfo.status, tab.url);
});
