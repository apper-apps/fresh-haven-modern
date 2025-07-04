/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5F3F',
        secondary: '#8BC34A',
        accent: '#FF6B35',
        surface: '#FFFFFF',
        background: '#F8FBF5',
        success: '#4CAF50',
        warning: '#FFA726',
        error: '#EF5350',
        info: '#29B6F6',
        text: {
          primary: '#1A1A1A',
          secondary: '#6B7280',
          light: '#9CA3AF'
        }
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      borderRadius: {
        'organic': '12px'
      },
      boxShadow: {
        'organic': '0 2px 8px rgba(0,0,0,0.08)',
        'organic-hover': '0 4px 16px rgba(0,0,0,0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2D5F3F 0%, #8BC34A 100%)',
        'card-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FBF5 100%)'
      }
    },
  },
  plugins: [],
}