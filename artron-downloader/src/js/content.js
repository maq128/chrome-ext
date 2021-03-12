(function() {
    document.body.setAttribute('data-extid', chrome.runtime.id);

    var sc = document.createElement('script');
    sc.setAttribute('charset','UTF-8');
    sc.setAttribute('src', chrome.extension.getURL('js/page.js'));
    document.body.appendChild(sc);
})();

// 测试
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.act == 'test') {
        var img = document.querySelector('img');
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);

        var dataurl = canvas.toDataURL();
        console.log(dataurl);
    }
});
