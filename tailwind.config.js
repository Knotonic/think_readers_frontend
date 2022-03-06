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
      'primary': '#7C9473',
      'secondary': '#3B3B3B',
      'white': '#FFFFFF',
     
    },
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    
    },
    extend: {},
  },
  plugins: [],
}
