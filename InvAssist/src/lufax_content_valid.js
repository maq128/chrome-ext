// http://developer.chrome.com/extensions/devguide.html

// 匹配网页: 安全验证页
// 匹配网址: https://trading.lufax.com/trading/security-valid?productId=81185&sid=318771
(function() {
	var tradeCode = document.getElementById('tradeCode');
	var inputValid = document.getElementById('inputValid');

	// 自动填写“交易密码”
	chrome.runtime.sendMessage({
		get: 'pwd'
	}, function(pwd) {
		tradeCode.value = pwd;
	});

	// 设置输入焦点到“验证码”
	inputValid.focus();
})();
