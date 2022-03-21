const {
  app,
  BrowserWindow,
  globalShortcut,
  ipcMain,
  dialog,
} = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
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
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

ipcMain.handle("some-name", async (event, arg) => {
  dialog.showMessageBox(mainWindow, {
    type: "warning",
    message: "You have been warned.",
    buttons: ["OK"],
  });
  return 0;
});
