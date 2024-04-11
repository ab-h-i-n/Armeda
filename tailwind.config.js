/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/svg/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HelveticaNow"],
        serif: ["HelveticaNow-md"] 
      },
      fill: (theme) => ({
        current: "currentColor",
      }),
    },
  },
  plugins: [],
};
