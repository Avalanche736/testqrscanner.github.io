let tg = window.Telegram.WebApp;

tg.expand();

    this.is_telegram_api_updated = this.TWA.isVersionAtLeast('6.4');
    // platform not updated if version is not 6.4 or greater

    if (this.TWA.platform != "unknown") {
      this.is_telegram_client = true;
    }

//check that platform is telegram and version is at least 6.4
if (tg.platform != "unknown" && tg.isVersionAtLeast('6.4')) {
  
  tg.showScanQrPopup("", function(text) {
                          tg.sendData(text);
                          return true;
                          });

  tg.onEvent('qrTextReceived', tg.sendData(this.data));
} else if (tg.platform == "unknown") {
  document.write('Это приложение следует запускать из клиента telegram');
} else if (!tg.isVersionAtLeast('6.4')) {
  document.write('Это приложение не может работать с клиентами telegram версии ниже 6.4. Пожалуйста, обновите ваше приложение.');
}
