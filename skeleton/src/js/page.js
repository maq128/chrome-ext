// page.js 与 web page javascript 运行在同一个 context 中。
(function() {
	var extid = document.body.getAttribute('data-extid');
	console.log('page.js: extid:', extid);

	var btn = document.createElement('button');
	document.body.appendChild(btn);
	btn.innerText = 'TEST';
	btn.style.position = 'absolute';
	btn.style.right = '0.5em';
	btn.style.top = '0.5em';
	btn.style.zIndex = 1000;
	btn.style.cursor = 'pointer';
	btn.addEventListener('click', function() {
		alert('点击了 TEST 按钮');

		// 发送消息到 background.js
		// 需要配置 externally_connectable 才会允许发送
		chrome.runtime.sendMessage(extid, {info: 'page.js -> background.js'}, function(resp) {
			console.log('page.js: chrome.runtime.sendMessage:', resp);
		});
	});
})();
