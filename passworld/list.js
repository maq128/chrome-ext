// http://api.jquery.com/
// https://github.com/websanova/js-url

$(function() {
	$(window).on('resize', onResizeWindow);
	onResizeWindow();

	populateRecords(g_records);

	// 鼠标进入账号/密码文字区域后，选中文字准备拖拽
	$('.list').delegate('.username, .password', 'mouseenter', function(evt) {
		$('#search-input').get(0).blur();

		var range = document.createRange();
		range.selectNodeContents(evt.currentTarget);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	});
	$('.list').delegate('.username, .password', 'mouseleave', function(evt) {
		var sel = window.getSelection();
		sel.removeAllRanges();
	});

	// 输入查找
	$('#search-input').on('change keypress paste focus textInput input', debounce(doSearch, 500));

	// 清空输入内容
	$('#search-clean').on('click', function(evt) {
		$('#search-input').val('').focus();
	});
});

// 延迟一定时间，合并多次重复的触发事件
function debounce(func, timeout)
{
	timeout = timeout || 200;
	var timeoutID;
	return function () {
		var scope = this;
		var args = arguments;
		clearTimeout(timeoutID);
		timeoutID = setTimeout(function () {
			func.apply(scope, Array.prototype.slice.call(args));
		}, timeout);
	}
}

function doSearch()
{
	// 排除重复的无效触发
	var keyword = $('#search-input').val().trim();
	if (keyword == arguments.callee._kw) {
		return;
	}
	arguments.callee._kw = keyword;

	// 查找匹配项
	console.log('keyword', keyword);
}

var g_records = [{
	title: '微博',
	siteurl: 'http://weibo.com/u/1400837702',
	username: 'username_weibo',
	password: 'password_weibo',
	hint: 'hint_weibo'
}, {
	title: '京东',
	siteurl: 'http://www.jd.com',
	username: 'username_jd',
	password: 'password_jd',
	hint: 'hint_jd'
}];

function populateRecords(records)
{
	var matched = $('#matched');
	var others = $('#others');
	$.each(records, function(idx, rec) {
		rec.domain = $.url('domain', rec.siteurl);

		var html = [
			'<div class="card">',
				'<div class="title"></div>',
				'<div class="block">网站：<a class="siteurl" target="_blank"></a></div>',
				'<div class="block">账号：<span class="username" title="可以用鼠标拖拽复制"></span></div>',
				'<div class="block">密码：<span class="password-bg"><span class="password" title="可以用鼠标拖拽复制"></span></span></div>',
				'<div class="hint"></div>',
				'<div style="clear:both;"></div>',
			'</div>'
		];
		var card = $(html.join('')).appendTo(others).data('data-record', rec);
		card.find('.title').text(rec.title);
		card.find('.siteurl').text(rec.siteurl).attr('href', rec.siteurl);
		card.find('.username').text(rec.username);
		card.find('.password').text(rec.password);
		card.find('.hint').text(rec.hint);
	});
}

function onResizeWindow()
{
	$('#mainframe').css({
		'box-sizing': 'border-box',
		height: window.innerHeight
	});
}
