/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'green-nate': '#67f700', //
                'eerie-black': '#1e1e1f', //
                'jet': '#38383b', //
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'], //
            }
        },
    },
    plugins: [],
}