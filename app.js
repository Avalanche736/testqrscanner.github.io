let tg = window.Telegram.WebApp;

tg.expand();

tg.showScanQrPopup("");

tg.onEvent('qrTextReceived', tg.sendData(this.data));

//tg.sendData('тест')

//document.write('Тест метода sendData');

