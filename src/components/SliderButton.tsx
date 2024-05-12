import './SliderButton.css'; // Make sure to create this CSS file

type SliderButtonProps = {
    isDelayMode: boolean;
    onToggle: (isDelayMode: boolean) => void;
};

const SliderButton: React.FC<SliderButtonProps> = ({ isDelayMode, onToggle }) => {
    const toggleIcon = () => {
        onToggle(!isDelayMode);
    };

    return (
        <div className="slider-container" onClick={toggleIcon}>
            <div className={`slider-icon ${isDelayMode ? 'hourglass' : 'clock'}`}>
                {isDelayMode ? '⌛' : '⏰'}
            </div>
        </div>
    );
};

export default SliderButton;
