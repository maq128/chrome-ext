// http://developer.chrome.com/extensions/devguide.html

var _enableRightButtonDrag = true;
chrome.extension.onMessage.addListener( function( request, sender, sendResponse ) {
    // 向 content script 报告“是否启用鼠标右键拖拽功能”
    if ( request.question == "drag scroll") {
        sendResponse( _enableRightButtonDrag );
    }
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "enableRightButtonDrag",
        title: '启用鼠标右键拖拽功能',
        type: 'checkbox',
        checked: _enableRightButtonDrag,
        contexts: ['all']
    });

    chrome.contextMenus.create({
        id: "sep1",
        type: 'separator',
        contexts: ['selection']
    });

    chrome.contextMenus.create({
        id: 'usingIciba',
        title: '用爱词霸翻译“%s”',
        contexts:['selection']
    });
});

function onClickHandler(info, tab) {
    if ( info.menuItemId == 'enableRightButtonDrag' ) {
        _enableRightButtonDrag = ! _enableRightButtonDrag;

    } else if ( info.menuItemId == 'usingIciba' ) {
        chrome.tabs.create({
            url: 'http://www.iciba.com/' + info.selectionText,
            selected: true
        });
    }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);
