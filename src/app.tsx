import React from 'react';
import { createRoot } from 'react-dom/client';
import DigitalClock from './components/ClockDisplay';

const App = () => {
    return (
        <div>
            <h1> Welcome to Offie!</h1>
            <DigitalClock />
        </div>
    )
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
