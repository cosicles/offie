import { createRoot } from "react-dom/client";
import DigitalClock from "./components/ClockDisplay";
import ShutdownTimePicker from "./components/ShutdownTimePicker";
import ShutdownAborter from "./components/ShutdownAborter";

const App = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <DigitalClock />
            <ShutdownTimePicker />
            <ShutdownAborter />
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
