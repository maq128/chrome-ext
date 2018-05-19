// http://developer.chrome.com/extensions/devguide.html

(function() {
	var protocol = document.location.protocol;

	// 鼠标右键拖拽网页
	var dragWithRightButton = function() {
		var drag = {
			dragging: false,
			dragged: false,
			startY: 0,
			prevY: 0,
			scrollTop: 0
		};

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

	// 鼠标右键长按
	var holdWithRightButton = function() {
		// 显示浮动窗格
		var showIcibaDiv = function(x, y) {
			var sel = window.getSelection();
			var word = sel.toString().toLowerCase();

			// 如果当前有选中文字，则要求右键长按的位置在选择区内，否则清除选择内容
			if (word.length > 0) {
				var range = sel.getRangeAt(0);
				var rc = range.getBoundingClientRect();
				if (x < rc.left || x >= rc.left + rc.width || y < rc.top || y >= rc.top + rc.height) {
					word = '';
				}
			}

			// 若尚无选择内容，则根据鼠标当前位置选择一个 word
			if (word.length == 0) {
				sel.removeAllRanges();
				sel.addRange(document.caretRangeFromPoint(x - window.scrollX, y - window.scrollY));
				sel.modify("move", 'backward', "word");
				do {
					sel.modify("extend", 'forward', "character");
				} while (!sel.toString().match(/[^\w\u4e00-\u9fff]/));
				sel.modify("extend", 'backward', "character");
				word = sel.toString().toLowerCase();
			}

			var icibaDiv = document.getElementById('iciba_div');
			if (icibaDiv == null) {
				// 如尚未创建 icibaDiv，则生成相应内容
				var css = document.createElement('link');
				css.rel = 'stylesheet';
				css.type = 'text/css';
				css.href = protocol + '//open.iciba.com/huaci/mini.css';
				document.body.appendChild(css);

				icibaDiv = document.createElement('div');
				icibaDiv.id = 'iciba_div';
				icibaDiv.style.position = 'absolute';
				icibaDiv.style.width = '300px';
				document.body.appendChild(icibaDiv);

				// 鼠标点击在外面是隐藏掉 icibaDiv
				document.body.addEventListener('click', function(evt) {
					var inMe = false;
					var target = evt.target;
					while (target) {
						if (target == icibaDiv) {
							inMe = true;
							break;
						}
						target = target.parentElement;
					}
					if (!inMe) {
						icibaDiv.style.display = 'none';
					}
				});
			}

			// 显示 icibaDiv
			var range = sel.getRangeAt(0);
			var rc = range.getBoundingClientRect();
			icibaDiv.innerHTML = '<div id="icIBahyI-main_cont">正在查找“' + word + '”……</div><div id="loading" style="display:none">loading...</div>';
			icibaDiv.style.left = Math.floor(rc.left + rc.width / 3 + window.scrollX) + 'px';
			icibaDiv.style.top = (rc.top + rc.height + window.scrollY + 2) + 'px';
			icibaDiv.style.display = 'block';

			// 发送查询请求
			var sc = document.createElement('script');
			sc.src = protocol + '//open.iciba.com/huaci/dict.php?word=' + encodeURIComponent(word) + '&t=' + new Date().getTime();
			document.body.appendChild(sc);
		};

		var holding = {
			timer: null,
			startX: 0,
			startY: 0,
			fired: false
		}

		// 右键按下时，进入 holding 状态
		document.body.addEventListener('mousedown', function(evt) {
			if (evt.which != 3) return;
			if (holding.timer) {
				clearTimeout(holding.timer);
			}
			holding.startX = evt.pageX;
			holding.startY = evt.pageY;
			holding.timer = setTimeout(function() {
				holding.timer = null;
				holding.fired = true;
				showIcibaDiv(holding.startX, holding.startY);
			}, 500);
			holding.fired = false;
		});

		// 右键放开时，退出 holding 状态
		document.body.addEventListener('mouseup', function(evt) {
			if (evt.which != 3) return;
			if (holding.timer) {
				clearTimeout(holding.timer);
			}
			holding.timer = null;
		});

		// 鼠标移动时，退出 holding 状态
		document.body.addEventListener('mousemove', function(evt) {
			if (!holding.timer) return;
			if (evt.pageX == holding.startX && evt.pageY == holding.startY) return;
			clearTimeout(holding.timer);
			holding.timer = null;
		});

		// 如果发生过 holding，则阻止 contextmenu
		document.body.addEventListener('contextmenu', function(evt) {
			if (holding.fired) {
				evt.returnValue = false;
				holding.fired = false;
			}
		});
	};

	holdWithRightButton();
})();
