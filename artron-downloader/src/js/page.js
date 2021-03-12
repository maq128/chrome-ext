(function() {
    var extId = $(document.body).attr('data-extid');

    var loadImages = function(id, data) {
        document.oncontextmenu = null;
        $(document.body).empty();
        var container = $('<div></div>').appendTo($(document.body));
        container.css({
            minWidth: data.w,
            minHeight: data.h,
            position: 'relative',
        });

        var tasks = [];
        for (var j=0; j * 256 < data.h; j++) {
            for (var i=0; i * 256 < data.w; i++) {
                tasks.push(new Promise(function(resolve, reject) {
                    $('<img/>')
                        .appendTo(container)
                        .attr('src', 'https://hd-images.artron.net/auction/images/' + id + '/12/' + i + '_' + j + '.jpg')
                        .css({
                            position: 'absolute',
                            left: i * 256,
                            top: j * 256,
                        })
                        .on('load', resolve)
                        .on('error', reject);
                }));
            }
        }
        Promise.all(tasks).then(function() {
            // 通知 extension 进行截图操作
            chrome.runtime.sendMessage(extId, {act: 'capture', id: id}, function(resp) {
                console.log('sendMessage:', resp);
            });
        }).catch(function() {
            alert('出错了！无法下载大图的某些局部内容。')
        });
    };

    // 在页面里添加操作按钮
    $('<button>下载完整高清大图</button>')
        .appendTo($(document.body))
        .css({
            position: 'absolute',
            right: 5,
            top: 5,
            cursor: 'pointer'
        })
        .on('click', function() {
            var m = window.location.pathname.match(/showbigpic-(.*)\//);
            if (m.length != 2) {
                alert('出错了！无法获得图片 id。')
                return;
            }
            var id = m[1];

            // 获取大图信息
            $.ajax({
                url: 'https://hd-images.artron.net/auction/getImageOption',
                dataType: "jsonp",
                jsonp: "callback",
                data: {artCode: id},
                success: function(resp) {
                    if (!resp.data) {
                        alert('出错了！无法获得大图信息。')
                        return;
                    }
                    // 加载所有碎片
                    loadImages(id, resp.data);
                }
            });
        });

    // 测试
    $('<button>test</button>')
        .appendTo($(document.body))
        .css({
            position: 'absolute',
            left: 5,
            top: 5,
            cursor: 'pointer'
        })
        .on('click', function() {
            chrome.runtime.sendMessage(extId, {act: 'test'}, function(resp) {
                console.log('test sendMessage:', resp);
            });
        });
})();
