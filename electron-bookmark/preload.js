const { contextBridge, ipcRenderer } = require("electron");

// Adds an object 'api' to the global window object:
contextBridge.exposeInMainWorld("electron", {
  doAction: async (arg) => {
    return await ipcRenderer.invoke("openTab", arg);
  },
});
