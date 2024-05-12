import { useState } from 'react';

import SliderButton from './SliderButton';

function splitTime(time: string): number[] {
    return time.split(':').map(Number);
}

function addTimeToNow(time: string): Date {
    const [hours, minutes] = splitTime(time);
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + hours);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
}

function convertTimeToDate(time: string): Date {
    const [hours, minutes] = splitTime(time);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date
}


const ShutdownTimePicker = () => {
    const [shutdownTime, setShutdownTime] = useState(new Date());
    const [isDelayMode, setIsDelayMode] = useState(false);

    const handleSubmit = () => {
        console.log(shutdownTime);
    };

    const handleChange = (event: React.BaseSyntheticEvent) => {
        const timeInput = event.target.value
        console.log('time input is ' + timeInput);

        if (isDelayMode) {
            setShutdownTime(addTimeToNow(timeInput));
        } else {
            setShutdownTime(convertTimeToDate(timeInput));
        }
        console.log('shutdown time is ' + shutdownTime);
    };

    return (
        <div>
            <input
                type="time"
                onChange={handleChange}
                pattern="[0-9]{2}:[0-9]{2}"
            />
            <SliderButton
                isDelayMode={isDelayMode}
                onToggle={setIsDelayMode}
            />
            <button onClick={handleSubmit}>Send Shutdown Command</button>
        </div>
    );

}

export default ShutdownTimePicker;