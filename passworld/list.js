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

	// 输入查找
	$('#search-input').on('change keyup', function(evt) {
		console.log($(evt.target).val());
	});
});

var g_records = [{
	title: '微博',
	siteurl: 'http://weibo.com',
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
		var html = [
			'<div class="card">',
				'<div class="title"></div>',
				'<div class="block">账号：<span class="username" title="可以用鼠标拖拽复制"></span></div>',
				'<div class="block">密码：<span class="password-bg"><span class="password" title="可以用鼠标拖拽复制"></span></span></div>',
				'<div class="hint"></div>',
				'<div style="clear:both;"></div>',
			'</div>'
		];
		var card = $(html.join('')).appendTo(others).data('data-record', rec);
		card.find('.title').text(rec.title);
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
