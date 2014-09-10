$(function() {
	$(window).on('resize', onResizeWindow);
	onResizeWindow();
});

function onResizeWindow()
{
	$('#mainframe').css({
		width: window.innerWidth,
		height: window.innerHeight
	});
}
