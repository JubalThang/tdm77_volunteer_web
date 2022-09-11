/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#555279',
                secondary: '#AEAAE8',
                bgprimary: '#E3E3E3'
            },
            fontFamily: {
                figfree: "'Figtree',sans-serif"
            }
        },
    },
    plugins: [],
}