const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {autoUpdater} = electron;
const {dialog} = electron;

var path = require('path');
var cp = require('child_process');

let win;

function createWindow() {
  win = new BrowserWindow({width: 1122, height: 600});
  win.loadURL(`file://${__dirname}/dist/index.html`);
  //win.webContents.openDevTools();  // 打开 开发者工具
  win.on('closed', () => {
    win = null;
  });
}


app.on('ready', () => {
  createWindow();  
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
