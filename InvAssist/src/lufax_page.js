(function() {
	var INTERVAL_NORMAL = 2000;
	var INTERVAL_EMERGENCY = 1000;
	var probeInterval = INTERVAL_NORMAL;
	var items = {};
	var needAlarm = false;
	var needReload = true;
	var domBoard = null;
	var domPlayer = null;

	// 本程序的扩展程序标识
	var InvAssistExtId = document.body.getAttribute('InvAssistExtId');

	var doProbe = function() {
		// 高亮显示表示开始抓数据
		domBoard.css({
			'background-color': 'yellow',
			'color': 'red'
		});
		$.ajax('http://list.lufax.com/list/service/product/listing/1', {
			data: {
				minAmount: 0,
				maxAmount: 100000000,
				minInstalments: 1,
				maxInstalments: 240,
				collectionMode: '',
				productName: '',
				column: 'publishedAt',
				order: 'desc',
				isDefault: true,
				isPromotion: '',
				pageLimit: 10,
				_: new Date().getTime()
			},
			dataType: 'json',
			success: function(data, textStatus, jqXHR) {
				probeInterval = INTERVAL_NORMAL;
				$.each(data.data, function(idx, item) {
					// 07投资 / 06竞拍 / 00？
					if (item.tradingMode != '07' && item.tradingMode != '00') return;

					if (item.isForNewUser) return;

					// ONLINE / DONE / PREVIEW
					if (item.productStatus == 'ONLINE') {
						addItem(item);
						probeInterval = INTERVAL_EMERGENCY;
					} else if (item.productStatus == 'DONE') {
						removeItem(item);
					}
				});
				flushItems();

				var now = new Date();
				var ts = [
					format2Digital(now.getHours()),
					format2Digital(now.getMinutes()),
					format2Digital(now.getSeconds())
				];
				domBoard.text('正在监听新网标 ' + ts.join(':'));
			},
			complete: function(jqXHR, textStatus) {
				// 预约下一轮操作
				setTimeout(doProbe, probeInterval);

				// 恢复正常显示
				domBoard.css({
					'background-color': 'transparent',
					'color': 'white'
				});
			}
		});
	};

	// 前导 0 补足两位
	var format2Digital = function(s) {
		s = '00' + s;
		return s.substring(s.length - 2);
	};

	var addItem = function(item) {
		// 已记录在案且无显著变化的不重复
		var oldItem = items[item.productId];
		if (oldItem && oldItem.remainingAmount == item.remainingAmount) return;

		// 记录新项目
		items[item.productId] = $.extend({}, item);

		if (!oldItem) {
			// 只有“新”项目才报警
			needAlarm = true;
		}
		needReload = true;
	};

	var removeItem = function(item) {
		// 未记录在案的不处理
		if (!items[item.productId]) return;

		// 删除记录
		delete items[item.productId];

		needReload = true;
	};

	var flushItems = function() {
		if (needAlarm) {
			// 播放语音提示
			chrome.runtime.sendMessage(InvAssistExtId, {get:'voice'}, function(voice) {
				if (voice) {
					domPlayer.currentTime = 0;
					domPlayer.play();
				}
			});

			// 由插件代为发送桌面通知
			chrome.runtime.sendMessage(InvAssistExtId, {get:'desktopnotify'}, function(desktopnotify) {
				if (desktopnotify) {
					chrome.runtime.sendMessage(InvAssistExtId, {desktopnotify:true, title:'陆金所网标'}, function(resp) {});
				}
			});

			// 由插件激活当前页签
			chrome.runtime.sendMessage(InvAssistExtId, {activate:true}, function(resp) {});
			needAlarm = false;
		}

		if (needReload) {
			// 触发页面本身的列表刷新
			$('#list-property-minAmount .all a').trigger('click');
			needReload = false;
		}
	};

	// 检查宿主网页加载完成，然后对页面进行改造
	var doCheck = function() {
		if (typeof($) == 'undefined') {
			window.setTimeout(doCheck, 500);
			return;
		}

		var html = [
			'<div style="position:fixed; right:5px; top:5px; z-index:100; border:1px solid silver; font-weight:bold; font-family:微软雅黑; background-color:red; color:white;">',
				'<div style="position:relative; border-bottom:1px solid yellow; padding:3px; color:yellow; font-size:14px;">',
					'陆金所 - 抢标助手',
					'<div class="btn-desktopnotify" style="float:right; font-family:Webdings; font-weight:normal; line-height:16px; margin-left:5px; cursor:pointer;" title="桌面通知">&#41;</div>',
					'<div class="btn-voice" style="float:right; font-family:Webdings; font-weight:normal; line-height:16px; margin-left:5px; cursor:pointer;" title="语音提示">&#88;</div>',
					'<input class="input-pwd" type="password" style="float:right; width:100px; padding-left:3px; margin-left:5px; display:none;"/>',
					'<div class="btn-pwd" style="float:right; font-family:Webdings; font-weight:normal; line-height:16px; margin-left:15px; cursor:pointer;" title="请输入交易密码。\r\n此密码不会以任何方式传输或保存，\r\n仅用于此次抢标过程中自动填写交易\r\n密码，关闭浏览器即自动消失。">&#232;</div>',
				'</div>',
				'<div class="probe-board" style="padding:3px;">正在监听新网标...</div>',
				'<audio class="alarm-player" src="chrome-extension://' + InvAssistExtId + '/lufax_alarm.wav" preload="auto"></audio>',
			'</div>'
		];
		var dom = $(html.join('')).appendTo($(document.body));
		domBoard = dom.children('.probe-board');
		domPlayer = dom.children('.alarm-player').get(0);

		// 切换“桌面通知”
		var domBtnDesktopnotify = dom.find('.btn-desktopnotify');
		var resetBtnDesktopnotify = function(desktopnotify) {
			domBtnDesktopnotify.css('color', desktopnotify ? 'yellow' : '#f88');
			domBtnDesktopnotify.attr('title', desktopnotify ? '桌面通知（已开启）' : '桌面通知（未开启）');
		};
		domBtnDesktopnotify.click(function() {
			chrome.runtime.sendMessage(InvAssistExtId, {get:'desktopnotify'}, function(desktopnotify) {
				desktopnotify = !desktopnotify;
				chrome.runtime.sendMessage(InvAssistExtId, {set:'desktopnotify', value:desktopnotify}, function(resp) {});
				if (desktopnotify) {
					chrome.runtime.sendMessage(InvAssistExtId, {desktopnotify:true, title:'陆金所网标', content:'当出现新网标项目时，这里会有通知。'}, function(resp) {});
				}
				resetBtnDesktopnotify(desktopnotify);
			});
		});
		chrome.runtime.sendMessage(InvAssistExtId, {get:'desktopnotify'}, resetBtnDesktopnotify);

		// 切换“语音提示”
		var domBtnVoice = dom.find('.btn-voice');
		var resetBtnVoice = function(voice) {
			domBtnVoice.css('color', voice ? 'yellow' : '#f88');
			domBtnVoice.attr('title', voice ? '语音提示（已开启）' : '语音提示（未开启）');
		};
		domBtnVoice.click(function() {
			chrome.runtime.sendMessage(InvAssistExtId, {get:'voice'}, function(voice) {
				voice = !voice;
				chrome.runtime.sendMessage(InvAssistExtId, {set:'voice', value:voice}, function(resp) {});
				if (voice) {
					$('<audio class="alarm-player" src="chrome-extension://' + InvAssistExtId + '/voice.wav" autoplay></audio>').appendTo(document.body);
				}
				resetBtnVoice(voice);
			});
		});
		chrome.runtime.sendMessage(InvAssistExtId, {get:'voice'}, resetBtnVoice);

		// 设置“交易密码”
		var domBtnPwd = dom.find('.btn-pwd');
		var resetBtnPwd = function(pwd) {
			domBtnPwd.css('color', pwd.length > 0 ? 'yellow' : '#f88').show();
		};

		// 点击按钮可以输入密码
		var domInputPwd = dom.find('.input-pwd');
		domBtnPwd.click(function() {
			domBtnPwd.hide();
			domInputPwd.show().focus();
		});

		// 密码输入完成
		domInputPwd.blur(function() {
			var pwd = domInputPwd.hide().val();
			resetBtnPwd(pwd);

			// 设置交易密码
			chrome.runtime.sendMessage(InvAssistExtId, {set:'pwd', value:pwd}, function(resp) {});
		}).keydown(function(evt) {
			if (evt.keyCode == 13) {
				domInputPwd.trigger('blur');
			}
		});

		// 刷新页面时保持上次输入的密码
		chrome.runtime.sendMessage(InvAssistExtId, {get:'pwd'}, function(pwd) {
			domInputPwd.val(pwd);
			resetBtnPwd(pwd);
		});

		doProbe();

		// 延迟 5 秒之后模拟点击，设置“按发布时间倒排序”
		setTimeout(function() {
			$('a[column=publishedAt]')
				.trigger('click')
				.trigger('click');
		}, 5000);
	};
	doCheck();
})();
