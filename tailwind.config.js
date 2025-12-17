/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            fontSize: {
                '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
            },
            minHeight: {
                'touch': '44px',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            }
        },
    },
    plugins: [],
}
