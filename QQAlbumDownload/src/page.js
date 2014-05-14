// http://developer.chrome.com/extensions/devguide.html

seajs.use(['jquery', 'photo.v7/common/api/photoApi/photoApi'], function($, photoApi) {
	// 本程序的扩展程序标识
	var DownloadAlbumExtId = document.body.getAttribute('DownloadAlbumExtId');

	// 提取空间用户 id
	var hostUin;
	var m = /http:\/\/user\.qzone\.qq\.com\/(\d+)/ .exec(window.location.href);
	if (m && m[1]) {
		hostUin = m[1];
	}
	if (!hostUin) return;

	// 下载指定相册中的全部图片
	var downloadAlbum = function(albumId) {
		// 先获取相册中的图片数量
		var options = {
			hostUin: hostUin,
			albumId: albumId,
			pageStart: 0,
			pageNum: 1
		};
		photoApi.photoList.getPhotoList(options).then(function(album) {
			if (!confirm('导出当前相册中的全部 ' + album.totalInAlbum + ' 个图片？')) return;
			if (album.totalInAlbum < 1) return;

			// 获取相册中所有图片的信息
			options.pageNum = album.totalInAlbum;
			photoApi.photoList.getPhotoList(options).then(function(album) {
				// 把相册信息发送给 background.js 进行下载
				chrome.runtime.sendMessage(DownloadAlbumExtId, {album:album}, function(resp) {});
			});
		});
	};

	var checkAlbum = function() {
		// 检查是否打开了某个相册
		// 注意：这里需要依据 iframe 的 window.location.href，而不能依据 src
		var albumId;
		var iframe = $('#tphoto').get(0);
		if (iframe) {
			// http://cnc.qzs.qq.com/qzone/photo/v7/page/photo.html?init=photo.v7/module/photoList2/index&navBar=1&normal=1&aid=V11XzKIl3SCN2v
			var m = /http:\/\/\w+\.qzs\.qq\.com\/qzone\/photo\/v7\/page\/photo\.html.*aid=([^&]*)/ .exec(iframe.contentWindow.location.href);
			if (m && m[1]) {
				albumId = m[1];
			}
		}

		if (albumId) {
			// 创建导出按钮
			var btn = $('.btn-download-all');
			if (btn.attr('data-album-id') != albumId) {
				btn.remove();
				btn = $('<button class="btn-download-all" data-album-id="' + albumId + '">导出整个相册</button>').insertAfter($('.head-nav-menu a[title=相册]'));
				btn.on('click', function() {
					downloadAlbum(albumId);
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
