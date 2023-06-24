function paramelBrowserAction(tab: chrome.tabs.Tab) {
  const url = tab.url

  if (url && tab.id) {
    const newUrl = url.split(/\?|\#|ref=/)[0]

    chrome.tabs.update(tab.id, { url: newUrl })

    chrome.action.setBadgeBackgroundColor({
      color: [120, 120, 120, 100],
    })
    chrome.action.setBadgeText({ text: "Para" })

    setTimeout(() => {
      chrome.action.setBadgeText({ text: "" })
    }, 1000)
  }
}

chrome.action.onClicked.addListener(paramelBrowserAction)
