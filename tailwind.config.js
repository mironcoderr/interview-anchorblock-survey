/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'dark': '#171A29',
            'black': '#000000',
            'white': '#ffffff',
            'green': '#10C939',
            'active': '#E4EFFF',
            'primary': '#246CD9',
            'border-step': '#E2E5EA',
            'border-check': '#D2D5DB',
            'border-divide': '#E4E8EF',
            'border-content': '#E1E4EA',
            'gray-btn': '#DCE1E8',
            'gray-body': '#F5F5F5',
            'gray-number': '#989898',
            'gray-content': '#EEF0F3',
            'gray-placeholder': '#9A9A9A',
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
            'icons': ['Material Icons'],
        },
        extend: {
            padding: { '105px': '105px', },
            maxWidth: { '700px': '700px', },
            inset: { '10px': '10px', },
            height: { '50px': '50px', },
            rotate: { '18deg': '18deg', },
            fontSize: {
                '0px': '0px',
                '35px': '35px',
            },
            borderRadius: { 
                '20px': '20px',
                '10px': '10px', 
                '5px': '5px',
            },
        },
    },
    plugins: [],
}