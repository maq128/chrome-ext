$(function() {
	$(window).on('resize', onResizeWindow);
	onResizeWindow();

	populateRecords(g_records);
});

var g_records = [{
	name: '微博',
	siteurl: 'http://weibo.com',
	username: 'username_weibo',
	password: 'password_weibo',
	hint: 'hint_weibo'
}, {
	name: '京东',
	siteurl: 'http://www.jd.com',
	username: 'username_jd',
	password: 'password_jd',
	hint: 'hint_jd'
}];

function populateRecords(records)
{
	$.each(records, function(rec, idx) {
		console.log(rec, idx);
	});
}

function onResizeWindow()
{
	$('#mainframe').css({
		width: window.innerWidth,
		height: window.innerHeight
	});
}
