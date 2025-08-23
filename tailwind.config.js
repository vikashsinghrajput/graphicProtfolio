/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3e3c46",
        subMain: "#151418",
        SubTwo: "#080809",
        ProdcutColor: "#8739fa",
        dryFooter: "#2f2e34",
        textOne: "#8f44fd",
        cardcolor: "#2f2e34",
        bordercolor: "#4a4656",
      },
       animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
       keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
      
    },
    
  },
  plugins: [],
};
