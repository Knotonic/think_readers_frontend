
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body':['Poppins']
    },
  
    colors: {
      'primary': '#ED553B',
      'secondary': '#3B3B3B',
      'white': '#FFFFFF',
      "inputbg":"#F2F3F7",
      "fontblack":"#444343"
     
    },
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    
    },
    backgroundImage: {
   
      'background-pattern': "url('~/assets/bg.png')",
      'top-logo': "url('~/assets/logo1.svg')",
    },
  
  },
  plugins: [],
}
