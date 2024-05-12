// electron.d.ts
declare global {
    interface Window {
        electronAPI: {
            shutdownAtDate: (date: Date) => void;
        };
    }
}

export { };
