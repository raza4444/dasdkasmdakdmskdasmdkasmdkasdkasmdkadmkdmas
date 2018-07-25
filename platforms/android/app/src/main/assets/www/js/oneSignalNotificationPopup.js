// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.
/*
document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  
}, false);*/

function oneSignalNotification(oneSignalId)
{
	var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
   /* .startInit("e24cd419-e704-4dd1-bcb5-7185df9290fe")*/
   .startInit(oneSignalId)
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}