// http://developer.chrome.com/extensions/devguide.html

seajs.use(['jquery'], function($) {
	// 本程序的扩展程序标识
	var DownloadAlbumExtId = document.body.getAttribute('DownloadAlbumExtId');

	// 提取空间用户 id
	var hostUin;
	var m = /http:\/\/user\.qzone\.qq\.com\/(\d+)/ .exec(window.location.href);
	if (m && m[1]) {
		hostUin = m[1];
	}
	if (!hostUin) return;

	// 用于计算 g_tk
	// 此代码来自 http://cnc.qzonestyle.gtimg.cn/qzone/v8/engine/migrate-plugin.js
	var getACSRFToken = function(url) {
		url = QZFL.util.URI(url);
		var skey;
		if (url) if (url.host && url.host.indexOf("qzone.qq.com") > 0) skey = QZFL.cookie.get("p_skey");
		else if (url.host && url.host.indexOf("qq.com") > 0) skey = QZFL.cookie.get("skey");
		if (!skey) skey = QZFL.cookie.get("skey") || QZFL.cookie.get("rv2") || "";
		var hash = 5381;
		for (var i = 0, len = skey.length; i < len; ++i) hash += (hash << 5) + skey.charCodeAt(i);
		return hash & 2147483647
	};

	// 下载指定相册中的全部图片
	var downloadAll = function(albumId) {
		// 先获取相册中的图片数量
		var params = {
			pageStart	: 0,
			pageNum		: 1,
			inCharset	: 'utf-8',
			outCharset	: 'utf-8',
			outstyle	: 'json',
			format		: 'json',
			hostUin		: hostUin,
			topicId		: albumId,
			g_tk		: getACSRFToken()
		};

		$.ajax({
			url: 'http://user.qzone.qq.com/p/shplist.photo/fcgi-bin/cgi_list_photo',
			data: params,
			dataType: 'json',
			success: function(result) {
				if (!confirm('导出当前相册中的全部 ' + result.data.totalInAlbum + ' 个图片？')) return;
				if (result.data.totalInAlbum < 1) return;

				// 获取相册中所有图片的信息
				params.pageNum = result.data.totalInAlbum;
				$.ajax({
					url: 'http://user.qzone.qq.com/p/shplist.photo/fcgi-bin/cgi_list_photo',
					data: params,
					dataType: 'json',
					success: function(result) {
						// 把相册信息发送给 background.js 进行下载
						chrome.runtime.sendMessage(DownloadAlbumExtId, {album:result}, function(resp) {});
					}
				});
			}
		});
	};

	var checkAlbum = function() {
		// 检查是否打开了某个相册
		// 注意：这里需要依据 iframe 的 window.location.href，而不能依据 src
		var albumId;
		var iframe = $('#tphoto').get(0);
		if (iframe) {
			// http://cnc.qzs.qq.com/qzone/photo/v7/page/photo.html?init=photo.v7/module/photoList2/index&navBar=1&normal=1&aid=V11XzKIl3SCN2v
			var m = /http:\/\/cnc\.qzs\.qq\.com\/qzone\/photo\/v7\/page\/photo\.html.*aid=([^&]*)/ .exec(iframe.contentWindow.location.href);
			if (m && m[1]) {
				albumId = m[1];
			}
		}

		if (albumId) {
			// 创建导出按钮
			var btn = $('.btn-download-all');
			if (btn.length == 0) {
				btn = $('<button class="btn-download-all">导出整个相册</button>').insertAfter($('.head-nav-menu a[title=相册]'));
				btn.on('click', function() {
					downloadAll(albumId);
					return false;
				});
			}
		} else {
			// 清除导出按钮
			$('.btn-download-all').remove();
		}

		// 反复检查
		window.setTimeout(checkAlbum, 1000);
	};
	checkAlbum();
});
