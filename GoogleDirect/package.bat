"C:\Program Files\Google\Chrome\Application\chrome.exe" --pack-extension="%CD%\src" --pack-extension-key="%CD%\GoogleDirect.pem" --no-message-box
del GoogleDirect.crx
rename src.crx GoogleDirect.crx
