chrome.runtime.onMessageExternal.addListener(function(message, sender, sendResponse) {
    if (message.act == 'capture') {
        console.log('message:', message, sender, sendResponse);
        var tabId = sender.tab.id;

        chrome.debugger.attach({tabId:tabId}, '1.0', function() {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError);
                return;
            }

            chrome.debugger.sendCommand(
                { tabId: tabId },
                "Page.captureScreenshot",
                {
                    format: "png",
                    quality: 100,
                    fromSurface: true,
                },
                (resp) => {
                    if (chrome.runtime.lastError) {
                        console.log(chrome.runtime.lastError);
                    } else {
                        // 把截图的结果下载到本地文件
                        let dataurl = "data:image/jpg;base64," + resp.data;
                        chrome.downloads.download({
                            url: dataurl,
                            filename: message.id + '.png'
                        });
                    }

                    chrome.debugger.detach({tabId:tabId});
                }
            );
        });
    }

    // 测试
    if (message.act == 'test') {
        var tabId = sender.tab.id;
        chrome.tabs.sendMessage(tabId, {act: 'test'});
        return;
    }
});
