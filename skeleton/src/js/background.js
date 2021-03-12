chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	if (request.p1) {
		console.log('background.js:', 'request: p1:', request.p1);
		sendResponse({success:true});
		return;
	}

	sendResponse({success:false});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('chrome.tabs.onUpdated:', tabId, tab.url, tab.status);
});
