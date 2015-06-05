// http://developer.chrome.com/extensions/devguide.html

var props = JSON.parse(localStorage['props'] || '{"pwd":"", "voice":true, "desktopnotify":false}');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.open) {

		// 用新页签打开指定的网址
		chrome.tabs.create({ url: request.open }, function( tab ) {
			sendResponse(tab);
		});

	} else if (request.get) {

		// 获取属性值
		sendResponse(props[request.get]);
	}
});

function format2Digital(s)
{
	s = '00' + s;
	return s.substring(s.length - 2);
};

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	if (request.desktopnotify) {

		// 弹出通知
		var now = new Date();
		var notification = webkitNotifications.createNotification(
			'icon48.png',
			request.title || '抢标助手',
			request.content || '抢标助手提醒您，新网标出现了，赶紧去抢！\r\n' + [
				format2Digital(now.getHours()),
				format2Digital(now.getMinutes()),
				format2Digital(now.getSeconds())
			].join(':')
		);
		notification.show();

	} else if (request.activate) {

		// 激活当前窗口
		chrome.tabs.update(sender.tab.id, {'active':true, 'highlighted':true}, function (tab) {});

	} else if (request.set) {

		// 设置属性值
		props[request.set] = request.value;

		// 屏蔽 pwd 属性，其它做持久化保存
		var pwd = props['pwd'];
		props['pwd'] = '';
		localStorage['props'] = JSON.stringify(props);
		props['pwd'] = pwd;

	} else if (request.get) {

		// 获取属性值
		sendResponse(props[request.get]);
	}
});
