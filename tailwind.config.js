/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            'white': "#fff",
            'black': '#000',
            'grey': '#686868',
            'light-grey': '#F5F5F5',
            'blue1': '#007EDA',
            'blue2': '#0162A8',
            'blue3': '#DBF0FF',
            'yellow1': '#F7BD4A',
            'yellow2': '#B27E15',
            'space1': '#111827',
            'space2': '#4b5563',
            'horizon-text1': '#f97316',
            'horizon-text2': '#fde047',
            primary: {
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
            },
            secondary: {
                50: '#ecfdf5',
                100: '#d1fae5',
                200: '#a7f3d0',
                300: '#6ee7b7',
                400: '#34d399',
                500: '#10b981',
                600: '#059669',
                700: '#047857',
                800: '#065f46',
                900: '#064e3b',
            },
        },
        extend: {
            fontFamily: {
                'plus-jakarta': ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans]
            },
        },

    },
    plugins: [],
}
