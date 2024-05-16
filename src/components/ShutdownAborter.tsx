const ShutdownAborter = () => {
    const handleAbort = () => {
        window.electronAPI.abortShutdown();
    };

    return (
        <div className="rounded bg-blue-500 px-4 py-2 text-white">
            <button id="abort-btn" onClick={handleAbort}>
                Send Abort Command
            </button>
        </div>
    );
};

export default ShutdownAborter;
