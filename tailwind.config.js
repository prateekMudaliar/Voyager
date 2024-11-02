/** @type {import('tailwindcss').Config} */





module.exports =  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mycover': "url('cover.jpg')",
       
      },
      fontFamily: {
        myFont: ['DM Serif Text']
      }
    },
  },
  plugins: [
    
  ],
}

