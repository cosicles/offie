const ShutdownAborter = () => {
    const handleAbort = () => {
        window.electronAPI.abortShutdown()
    };

    return (
        <div>
            <button id='abort-btn' onClick={handleAbort}>Send Abort Command</button>
        </div>
    );

}

export default ShutdownAborter;