/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E3A8A',  
        'secondary-blue': '#2563EB', 
        'light-blue': '#3B82F6',     
        'dark-blue': '#1E40AF',      
        'sky-blue': '#38BDF8',       
        'muted-blue': '#93C5FD',     

        
        'cool-gray': '#64748B',      
        'light-gray': '#F3F4F6',     
        'off-white': '#F9FAFB',     
        'black': '#111827',          
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #1E3A8A, #2563EB)', 
        'gradient-to-b': 'linear-gradient(to bottom, #2563EB, #3B82F6)', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
        



      },
    },
  },
  plugins: [],
}

