import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow: Electron.BrowserWindow | null = null;
let rootDir: string = path.resolve(__dirname + '/..');

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
        },
        frame: false,
        width: 1280,
        height: 1024,
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.loadURL('file://' + rootDir + '/public/index.html');
});