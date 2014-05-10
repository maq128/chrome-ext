// http://developer.chrome.com/extensions/devguide.html

(function() {
    // 鼠标右键拖拽网页
    var dragWithRightButton = function() {
        var drag = {
            dragging: false,
            dragged: false,
            startY: 0,
            prevY: 0,
            scrollTop: 0
        }

        // 右键按下时，开始拖拽过程
        document.body.addEventListener( 'mousedown', function( evt ) {
            if ( evt.which != 3 ) return;

            chrome.extension.sendMessage({question: "drag scroll"}, function( response ) {
                if ( response ) {
                    drag.dragging = true;
                    drag.startY = evt.screenY;
                    drag.prevY = evt.screenY;
                    drag.scrollTop = document.body.scrollTop;
                }
            });
        });

        // 右键放开时，结束拖拽过程
        document.body.addEventListener( 'mouseup', function( evt ) {
            if ( evt.which != 3 ) return;

            drag.dragging = false;
        });

        // 鼠标移动时，按拖拽的位置设置滚动条
        document.body.addEventListener( 'mousemove', function( evt ) {
            if ( ! drag.dragging ) return;

            // 如果右键已经放开，则解除拖拽过程。
            // 注意：即使右键没有放开，也有可能被插入 evt.which 为 0 的事件，所以还要同时判断 evt.screenY 是否变化。
            if ( drag.prevY != evt.screenY && evt.which != 3 ) {
                drag.dragging = false;
                drag.dragged = false;
                return;
            }
            drag.prevY = evt.screenY;

            document.body.scrollTop = drag.scrollTop + ( drag.startY - evt.screenY );
            drag.dragged = true;
        });

        // 如果发生过拖拽，则阻止 contextmenu
        document.body.addEventListener( 'contextmenu', function( evt ) {
            if ( drag.dragged ) {
                evt.returnValue = false;
                drag.dragged = false;
            }
        });
    };

    dragWithRightButton();
})();
