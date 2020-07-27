"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let mainWindow = null;
let rootDir = path_1.default.resolve(__dirname + '/..');
electron_1.app.on('ready', () => {
    mainWindow = new electron_1.BrowserWindow({
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
