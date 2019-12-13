
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
let mainWindow = null;

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 1200,
        minHeight: 400,
        title: "Vioswift - Time In Lieu Tracker",      
        icon: path.join(__dirname, '../public/timeinlieutracker-logo-white.png'),
        fullscreenable: true,
        webPreferences: { 
            nodeIntegration: true,
            nativeWindowOpen: true,
            allowRunningInsecureContent: true
        }
    });
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`); 
    mainWindow.on('closed', function () {
        mainWindow = null;
    })
    mainWindow.on('page-title-updated', function (e) {
        e.preventDefault();
    });

    if (isDev) {
        // Open the DevTools.
        //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
        // mainWindow.webContents.openDevTools();
    }else {
        Menu.setApplicationMenu(null);
    }
}