// electron.d.ts
declare global {
    interface Window {
        electronAPI: {
            shutdownAtTimeout: (timeout: number) => void;
        };
    }
}

export { };
