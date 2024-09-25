/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      //This is my own variables, for custom theme colors etc.
      colors: {
        theme1: "#2D9BA2",
        theme2: "#4DC58B",
        frame: "#29586C",
        boxbg: "#F2F5FB",
      },
      animation: {
        "bounce-once": "bounce 650ms ease-in-out 1",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0) translateX(0) translateZ(0)",
          },
          "50%": {
            transform: "translateY(-1%) translateX(2px) translateZ(0.5px)",
          },
          "80%": {
            transform: "translateY(-2%) translateX(-2px) translateZ(1px)",
          },
        },
      },
    },
  },
  plugins: [],
}
