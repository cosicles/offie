// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    shutdownAtTimeout: (timeout: number) => ipcRenderer.send('call-shutdown', timeout),
    abortShutdown: () => ipcRenderer.send('abort-shutdown')
})
