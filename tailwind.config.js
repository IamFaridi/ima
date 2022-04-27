const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ['sf', 'sans-serif'],
      },
      borderRadius:{
        '7': '7px',
      },
      colors: {
        icon:"#35405240",
        main:"#354052",
        sec:"#35405280",
        border:"#CCD2E2",
        primary:"#F7F8FA",
        lightGreyGradient:"F1F5FA",
        darkGreyGradient:"FDFEFF",
      },
      backgroundColor: {
        main:"#F7F8FA",
      },
      fontSize:{
        "13": "13px",
      },
      width:{
        "245":"245px"
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
    },
    screens:{
      "cus-538":"538px",
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}