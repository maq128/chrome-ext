// http://api.jquery.com/
// https://github.com/websanova/js-url

$(function() {
	$(window).on('resize', onResizeWindow);
	onResizeWindow();

	Cards.populate(loadRecords());

	// 鼠标进入账号/密码文字区域后，选中文字准备拖拽
	$('#list').delegate('.username, .password', 'mouseenter', function(evt) {
		$('#search-input').get(0).blur();

		var range = document.createRange();
		range.selectNodeContents(evt.currentTarget);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	});
	$('#list').delegate('.username, .password', 'mouseleave', function(evt) {
		var sel = window.getSelection();
		sel.removeAllRanges();
	});

	$('#list').delegate('.title', 'click', function(evt) {
		var detail = $(evt.target).parent('.card').find('.detail');
		detail[detail.is(':visible') ? 'hide' : 'show'](100);
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

	// 按关键词进行过滤
	Cards.filter(keyword);
}

function loadRecords()
{
	return [{
		title: '微博',
		siteurl: 'http://weibo.com/u/1400837702',
		username: 'username_weibo',
		password: 'password_weibo',
		hint: 'hint_weibo'
	}, {
		title: '新浪',
		siteurl: 'http://www.sina.com.cn/',
		username: 'username_sina',
		password: 'password_sina',
		hint: ''
	}, {
		title: '京东',
		siteurl: 'http://www.jd.com',
		username: 'username_jd',
		password: 'password_jd',
		hint: 'hint_jd'
	}, {
		title: '其它',
		username: 'username_other',
		password: 'password_other'
	}];
}

var Cards = {
	records: []
};

Cards.populate = function(records) {
	var me = this;
	var list = $('#list').empty();
	me.records = [];
	$.each(records, function(idx, rec) {
		rec = $.extend({}, rec);
		var html = [
			'<div class="card">',
				'<div class="title"></div>',
				'<div class="detail">',
					'<div class="block">网站：<a class="siteurl" target="_blank"></a></div>',
					'<div class="block">账号：<span class="username" title="可以用鼠标拖拽复制"></span></div>',
					'<div class="block">密码：<span class="password-bg"><span class="password" title="可以用鼠标拖拽复制"></span></span></div>',
					'<div class="hint"></div>',
				'</div>',
			'</div>'
		];
		var card = $(html.join('')).appendTo(list);
		card.find('.title').text(rec.title);
		if (!rec.siteurl) {
			card.find('.siteurl').parent('.block').hide();
		} else {
			card.find('.siteurl').text(rec.siteurl).attr('href', rec.siteurl);
		}
		card.find('.username').text(rec.username);
		card.find('.password').text(rec.password);
		card.find('.hint').text(rec.hint);

		rec.card = card;
		rec.hostname = $.url('hostname', rec.siteurl);
		me.records.push(rec);
	});
};

Cards.filter = function(keyword) {
	var me = this;
	var list = $('#list');
	$.each(me.records, function(idx, rec) {
		var is = keyword.length == 0;
		is |= rec.hostname.indexOf(keyword) >= 0;
		is |= rec.title.indexOf(keyword) >= 0;
		is |= (rec.hint || '').indexOf(keyword) >= 0;
		rec.card[is ? 'show' : 'hide']();
	});
};

function onResizeWindow()
{
	$('#mainframe').css({
		'box-sizing': 'border-box',
		height: window.innerHeight
	});
}
