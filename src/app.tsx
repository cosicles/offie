import { createRoot } from 'react-dom/client';
import DigitalClock from './components/ClockDisplay';
import ShutdownTimePicker from './components/ShutdownTimePicker';

const App = () => {
    return (
        <div>
            <h1> Welcome to Offie!</h1>
            <DigitalClock />
            <ShutdownTimePicker />
        </div>
    )
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
