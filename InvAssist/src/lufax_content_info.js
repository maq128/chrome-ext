// http://developer.chrome.com/extensions/devguide.html

// 匹配网页: 确认信息页
// 匹配网址: https://trading.lufax.com/trading/trade-info?productId=81185&sid=318771
(function() {
	var qs = window.location.search.substring(1);

	var try_1 = function() {
		var reqTrace = function(data, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'https://trading.lufax.com/trading/service/trade/trace', true);
			xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					callback();
				}
			}
			xhr.send(data);
		};

		reqTrace(qs + '&curStep=TRADE_INFO', function() {
			reqTrace(qs + '&curStep=CONTRACT', function() {
				chrome.runtime.sendMessage({
					open: 'https://trading.lufax.com/trading/security-valid?' + qs
				}, function(response) { });
			});
		});
	};

	var try_2 = function() {
		// 自动打开“确认合同页”
		chrome.runtime.sendMessage({
			open: 'https://trading.lufax.com/trading/contract-info?' + qs
		}, function(response) { });

		// 自动打开“安全验证页”
		chrome.runtime.sendMessage({
			open: 'https://trading.lufax.com/trading/security-valid?' + qs
		}, function(response) { });
	};

	try_1();
})();
