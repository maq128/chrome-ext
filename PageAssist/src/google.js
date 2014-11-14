// http://developer.chrome.com/extensions/devguide.html

// 对 Google 搜索结果页进行改造，增加“直连”功能，避免通过 Google 进行转跳。
(function() {
	// 找到所有搜索结果页面链接
	var links = [];
	var aa = document.getElementsByTagName('a');
	for (var i=0; i < aa.length; i++) {
		var a = aa[i];
		if (a.parentNode.className == 'r') {
			links.push(a);
		}
	}

	// 在每个链接前面插入一个“直连”链接
	var a;
	while (a = links.pop()) {
		var x = document.createElement('span');
		x.innerHTML = '[<a target="_blank" href="' + a.getAttribute('href') + '">^</a>] ';
		a.parentNode.insertBefore(x, a);
	}
})();
