import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return <h1>Welcome to Offie! </h1>;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
