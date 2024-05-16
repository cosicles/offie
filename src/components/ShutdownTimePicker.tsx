import { useState } from "react";

import SliderButton from "./SliderButton";

function splitTime(time: string): number[] {
    return time.split(":").map(Number);
}

/** Converts a delay expressed in hh:mm in seconds */
function convertDelayToSeconds(time: string): number {
    const [hours, minutes] = splitTime(time);
    return hours * 3600 + minutes * 60;
}

/** Converts a future time to a delay in seconds until now */
function convertFutureTimeToDelay(futureTime: string): number {
    const future = new Date();
    const [hours, minutes] = splitTime(futureTime);
    future.setHours(hours);
    future.setMinutes(minutes);

    const now = new Date();

    return (future.getTime() - now.getTime()) / 1000;
}

const ShutdownTimePicker = () => {
    const [shutdownTimeout, setShutdownTimeout] = useState(0);
    const [isDelayMode, setIsDelayMode] = useState(false);

    const handleTimeChange = (event: React.BaseSyntheticEvent) => {
        const timeInput = event.target.value;
        console.log("time input is " + timeInput);

        let delayInSeconds;
        if (isDelayMode) {
            delayInSeconds = convertDelayToSeconds(timeInput);
        } else {
            delayInSeconds = convertFutureTimeToDelay(timeInput);
        }

        //TODO handle negative delay

        setShutdownTimeout(delayInSeconds);

        console.log("shutdown time is " + shutdownTimeout);
    };

    const handleSubmit = () => {
        window.electronAPI.shutdownAtTimeout(shutdownTimeout);
    };

    return (
        <div className="flex items-center space-x-2 rounded bg-blue-500 px-4 py-2 text-white">
            <input
                type="time"
                onChange={handleTimeChange}
                pattern="[0-9]{2}:[0-9]{2}"
            />
            <SliderButton isDelayMode={isDelayMode} onToggle={setIsDelayMode} />
            <button
                className="flex flex-row items-center"
                id="submit-btn"
                onClick={handleSubmit}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708"
                    />
                </svg>
                <span>Submit</span>
            </button>
        </div>
    );
};

export default ShutdownTimePicker;
