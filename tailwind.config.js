/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
   extend: {
      // Add this new utility for text shadow
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.4)', // Small shadow
        'md': '0 2px 4px rgba(0, 0, 0, 0.5)', // Medium shadow
        'lg': '0 4px 8px rgba(0, 0, 0, 0.6)', // Large shadow
        'xl': '0 8px 16px rgba(0, 0, 0, 0.7)', // Extra large shadow
      },
    
    },
  },
  plugins: [],
}
