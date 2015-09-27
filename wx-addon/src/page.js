/*
	参考资料
	http://docs.ngnice.com/guide
	https://docs.angularjs.org/guide
*/
(function() {
	// 屏蔽 console 原有的功能，本程序改用 _console 做调试输出
	window._console = window.console;
	window.console = {};
	var emptyFn = function() {};
	var fns = 'assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn'.split(' ');
	for (var i = 0; i < fns.length; i++) {
		window.console[fns[i]] = emptyFn;
	}

	// 对当前网页进行改造
	var doHack = function() {
		// 本程序的扩展程序标识
		var WxAssistExtId = document.body.getAttribute('WxAssistExtId');

		angular.element(document).scope().$apply(function($scope) {
			// 监听消息事件
			$scope.$on("message:add:success", function(evt, msg) {
				_console.log('message:add:success: -- event --', evt);
				_console.log('message:add:success: -- msg --', msg);
				//_console.log('message:add:success: -- sender --', s.getContact(o.MMActualSender));
			});

			var injector = angular.element(document).injector();
			var $templateCache = injector.get('$templateCache');

			// 改造显示模板
			var tmpl = $templateCache.get('message.html');
			tmpl = tmpl.replace(/class="plain"/ , 'class="plain" style="border:5px solid green"');
			$templateCache.put('message.html', tmpl);

			// 强制刷新当前显示内容
//			angular.element(document).controller('ngModel').$render();
		});

		// 显示扩展程序名称
		var div = document.createElement('div');
		div.innerText = '（微信网页版外挂 @ maq128）';
		document.querySelector('p.copyright').appendChild(div);
	};

	// 检查宿主网页加载完成，然后启动改造
	var doCheck = function() {
		if (window._contacts && window._contacts.filehelper) {
			doHack();
		} else {
			window.setTimeout(doCheck, 500);
		}
	};
	doCheck();
})();
