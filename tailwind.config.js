/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height :{
        '50' : '150px',
        '60' : '280px',
        '100' : '250px'
      },
      width : {
        '50': '150px',

        '100': '300px'
      }
    },
  },
  plugins: [],
};
