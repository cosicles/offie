/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: [
            {
                sunset: {
                "primary": "#FFCDB2",
                "secondary": "#FFB4A2",
                "accent": "#E5989B",
                "neutral": "#B5838D",
                "base-100": "#6D6875",
              }
            },
            "light",
            "cupcake",
            "dark",
        ],
    }
}