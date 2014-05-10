// http://developer.chrome.com/extensions/devguide.html

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	if (request.album) {
		var list = request.album.data.photoList;
		var name = request.album.data.topic.name.replace(/[\\\/\:\*\?\"\<\>\|]/g , '_');
		for (var i=0; i < list.length; i++) {
			chrome.downloads.download({
				url				: list[i].url,
				filename		: name + '/' + (i+1) + '.jpg',
				conflictAction	: 'uniquify',
				method			: 'GET'
			}, function(downloadId) {
				console.log('downloadId', downloadId);
			});
		}
		sendResponse({success:true});
		return;
	}

	sendResponse({success:false});
});
