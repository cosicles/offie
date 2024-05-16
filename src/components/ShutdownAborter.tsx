const ShutdownAborter = () => {
    const handleAbort = () => {
        window.electronAPI.abortShutdown();
    };

    return (
        <div className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            <button
                className="flex items-center justify-center space-x-2"
                onClick={handleAbort}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                Abort
            </button>
        </div>
    );
};

export default ShutdownAborter;
