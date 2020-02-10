//----------------------------------------------------
// Background
//----------------------------------------------------

chrome.browserAction.onClicked.addListener(paramelBrowserAction)

function paramelBrowserAction(tab) {
  let url = tab.url
  let newUrl = url.split(/\?|\#|ref=/)[0]

  //chrome.extension.getBackgroundPage().console.log(newUrl)
  chrome.tabs.update({ url: newUrl })

  chrome.browserAction.setBadgeBackgroundColor({ color: [120, 120, 120, 100] })
  chrome.browserAction.setBadgeText({ text: "Para" })
  setTimeout(function() {
    chrome.browserAction.setBadgeText({ text: "" })
  }, 1000)
}
