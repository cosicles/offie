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
        <div className="rounded bg-blue-500 px-4 py-2 text-white">
            <input
                type="time"
                onChange={handleTimeChange}
                pattern="[0-9]{2}:[0-9]{2}"
            />
            <SliderButton isDelayMode={isDelayMode} onToggle={setIsDelayMode} />
            <button id="submit-btn" onClick={handleSubmit}>
                Send Shutdown Command
            </button>
        </div>
    );
};

export default ShutdownTimePicker;
