chrome.webNavigation.onCompleted.addListener(function() {
  console.log();
}, {url: [{urlMatches : 'https://www.reddit.com/r/dankmemes'}]
});

// chrome.runtime.onMessage.addListener(function(callback) {
//   chrome.tabs.executeScript({file: 'call.js'});
//   }
// });

chrome.tabs.executeScript(
  {file: 'call.js'}
)

   