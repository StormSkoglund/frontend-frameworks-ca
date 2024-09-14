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
    },
  },
  plugins: [],
};
