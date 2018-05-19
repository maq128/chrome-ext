// http://developer.chrome.com/extensions/devguide.html

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: 'makePageMark',
        title: '制作书页签',
        contexts:['all']
    });
});

function onClickHandler(info, tab) {
    if ( info.menuItemId == 'makePageMark' ) {
		if (!info.pageUrl) return;
		var url = info.pageUrl.split('#')[0];

		chrome.tabs.sendMessage(tab.id, 'scroll-pos', null, function(response) {
			var pos = response.scrollY;
			url += '#@' + pos;

			var sel = info.selectionText;
			if (sel) {
				if (sel.length > 500) {
					sel = sel.substr(0, 500)
				}
				url += '#!' + encodeURIComponent(sel);
			}
			chrome.tabs.create({
				url: url,
				selected: true
			});
		});
    }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);
