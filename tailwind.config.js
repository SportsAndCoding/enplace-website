module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bordeaux: { deep: "#581845", medium: "#8b3a42", light: "#d98f96" },
                slate: "#2c3e50",
                gold: "#f4d06f",
            },
        },
    },
    plugins: [],
}