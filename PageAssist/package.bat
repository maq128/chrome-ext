"C:\Program Files\Google\Chrome\Application\chrome.exe" --pack-extension="%CD%\src" --pack-extension-key="%CD%\PageAssist.pem" --no-message-box
del PageAssist.crx
rename src.crx PageAssist.crx
