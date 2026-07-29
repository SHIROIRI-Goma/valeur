const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 460,
    height: 1060,
    minWidth: 380,
    minHeight: 500,
    backgroundColor: '#1a1916',
    title: 'Valeur',
    autoHideMenuBar: true,
    resizable: true,
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // index.html is one level up (root of the repo)
  win.loadFile(path.join(__dirname, '..', 'index.html'));
  win.once('ready-to-show', () => win.show());

  // Pin toggle — always on top
  ipcMain.on('set-always-on-top', (event, flag) => {
    if (event.sender === win.webContents) win.setAlwaysOnTop(!!flag);
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
