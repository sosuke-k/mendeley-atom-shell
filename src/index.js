var app = require('app');
var ipc = require('ipc');
var BrowserWindow = require('browser-window');  

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {

    mainWindow = new BrowserWindow({width: 800, height: 600});
    var loadUrl = 'file://' + __dirname + '/index.html';
    console.log(loadUrl);
    mainWindow.loadUrl(loadUrl);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

ipc.on('result-access-token', function(event, arg) {
  console.log(arg);
  if (arg == 'success') {
  	if (mainWindow != null) {
  		var loadUrl = 'file://' + __dirname + '/app.html';
      console.log(loadUrl);
      mainWindow.loadUrl(loadUrl);
  	}
  }
  
});
