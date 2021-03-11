chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	if (request.p1) {
		console.log('background.js:', 'request: p1:', request.p1);
		sendResponse({success:true});
		return;
	}

	sendResponse({success:false});
});
