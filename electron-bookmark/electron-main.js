const {
  app,
  BrowserWindow,
  BrowserView,
  globalShortcut,
  ipcMain,
  dialog,
} = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;
let mainView;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(__dirname, `/preload.js`),
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/webapp/index.html`),
      protocol: "file",
      slashes: true,
    })
  );

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  globalShortcut.register("Alt+CommandOrControl+I", () => {
    // Open the DevTools.
    mainWindow.openDevTools({ detached: true });
    mainWindow.webContents.openDevTools({ detached: true });
  });

  mainView = new BrowserView();
  mainWindow.setBrowserView(mainView);
  mainView.setBounds({
    x: 105,
    y: 0,
    width: mainWindow.getBounds().width - 105,
    height: mainWindow.getBounds().height,
  });
  mainView.setBackgroundColor("#56cc5b10");
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

ipcMain.handle("openTab", async (event, arg) => {
  mainView?.webContents.loadURL(arg);
  return 0;
});
