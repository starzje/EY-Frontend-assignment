/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        black: "#2B2B2B",
        white: "#FFFFFF",
        "primary-400": "#F7F7F7",
        "primary-100": "#FFFFFF",
        "secondary-900": "#1D1D1D",
      },
      backgroundColor: (theme) => ({
        "primary-400": theme("colors.primary-400"),
        "primary-100": theme("colors.primary-100"),
        "secondary-900": theme("colors.secondary-900"),
      }),
      textColor: (theme) => ({
        black: theme("colors.black"),
        white: theme("colors.white"),
      }),
    },
  },
  plugins: [],
};
