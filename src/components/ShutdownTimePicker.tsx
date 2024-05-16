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

        console.log("delay in seconds is " + delayInSeconds);
        console.log("shutdown time is " + shutdownTimeout);
    };

    const handleSubmit = () => {
        window.electronAPI.shutdownAtTimeout(shutdownTimeout);
    };

    return (
        <div className="flex flex-row items-center space-x-4">
            <div className="flex items-center space-x-2 rounded bg-amber-100 bg-opacity-70 px-4 py-2 text-lg hover:shadow-md hover:shadow-amber-300">
                <input
                    className="form-input border-b bg-transparent px-4 py-3 transition duration-200 ease-in-out focus:border-b-amber-700 focus:outline-none"
                    type="time"
                    onChange={handleTimeChange}
                    pattern="[0-9]{2}:[0-9]{2}"
                />
                <SliderButton
                    isDelayMode={isDelayMode}
                    onToggle={setIsDelayMode}
                />
            </div>
            <button
                className="btn btn-primary text-base-100"
                onClick={handleSubmit}
            >
                <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V6C11.25 6.41421 11.5858 6.75 12 6.75C12.4142 6.75 12.75 6.41421 12.75 6V2Z"></path>
                        <path d="M8.7919 4.39678C9.17345 4.23557 9.35208 3.79557 9.19087 3.41402C9.02966 3.03246 8.58966 2.85384 8.2081 3.01505C4.70832 4.49372 2.25 7.95891 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 7.95891 19.2917 4.49372 15.7919 3.01505C15.4103 2.85384 14.9703 3.03246 14.8091 3.41402C14.6479 3.79557 14.8265 4.23557 15.2081 4.39678C18.1722 5.64913 20.25 8.58279 20.25 12C20.25 16.5564 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5564 3.75 12C3.75 8.58279 5.82779 5.64913 8.7919 4.39678Z"></path>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default ShutdownTimePicker;
