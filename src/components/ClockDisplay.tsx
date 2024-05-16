import { useState, useEffect } from "react";

const DigitalClock = () => {
    // State to store the current time
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Set up an interval to update the time every second
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timerId);
    }, []);

    // Format the time as a string
    const timeString = currentTime.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });

    // Render the time
    return (
        <div className="font-mono text-8xl text-amber-700 opacity-75">
            <span>{timeString}</span>
        </div>
    );
};

export default DigitalClock;
