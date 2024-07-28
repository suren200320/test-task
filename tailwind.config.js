/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xxs": "320px",
        "xs": "576px",
        "sm": "768px",
        "md": "990px",
        "lg": "1260px",
        "xl": "1400px",
        "xxl": "1600px"
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      fontSize: {
        title: "36px",
        subtitle: "20px",
        "title-sm": "18px",
        "subtitle-sm": "14px"
      },
      colors: {
        primary: "#E2C299",
        "primary-dark": "#C5A67C",
        black: "#212529",
        error: "#E86068",
        "black-light": "rgba(33, 37, 41, 0.6)",
        "border-color": "rgba(0, 0, 0, 0.1)",
        "chip-color": "rgba(33, 37, 41, 0.04)",
        "scrollbar-color": "rgba(216, 216, 216, 1)"
      },
      spacing: {
        lg: "30px",
        md: "15px",
        "flex-sm": "14px",
        sm: "10px"
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(269.01deg, #E2C299 5.64%, #C5A67C 94.29%)",
        "primary-light-gradient": ""
      },
      boxShadow: {
        "card": "0px 0px 15px 0px rgba(0, 0, 0, 0.06)",
        "card-hover": "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateColumns: {
        "cols-2": "repeat(2, 1fr)",
        "cols-3": "repeat(3, 1fr)",
        "cols-4": "repeat(4, 1fr)",
        "cols-5": "repeat(5, 1fr)",
      }
    },
  },
  plugins: []
};
