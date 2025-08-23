/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                'bordeaux': {
                    'deep': '#581845',
                    'rich': '#8b3a42'
                },
                'warm-neutral': '#a67c7c',
                'cream-elegant': '#f7f3e9',
                'alert-copper': '#cd853f',
                'success-sage': '#6b8e23',
                'background-light': '#fdfbf7',
                'text-dark': '#2c1810'
            },
            fontFamily: {
                'crimson': ['Crimson Text', 'serif'],
                'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                }
            },
            screens: {
                'xs': '475px'
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}