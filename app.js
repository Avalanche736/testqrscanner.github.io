let tg = window.Telegram.WebApp;

tg.expand();

  tg.showScanQrPopup("", function(text) {
                          tg.sendData(text);
                          return true;
                          });

//check that platform is telegram and version is at least 6.4
// if (tg.platform != "unknown" && tg.isVersionAtLeast('6.4')) {
  
//   tg.showScanQrPopup("", function(text) {
//                           tg.sendData(text);
//                           return true;
//                           });
  
// } else if (tg.platform == "unknown") {
//   document.write('Это приложение следует запускать из клиента telegram');
// } else if (!tg.isVersionAtLeast('6.4')) {
//   document.write('Это приложение не может работать с клиентами telegram версии ниже 6.4. Пожалуйста, обновите ваше приложение.');
// }
