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
        accent: '#D4A574',
        surface: '#FFFFFF',
        background: '#F8FBF5',
        border: '#E5E7EB',
        success: '#4CAF50',
        warning: '#D4A574',
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
        'organic': '16px'
      },
      boxShadow: {
        'organic': '0 4px 12px rgba(45, 95, 63, 0.08)',
        'organic-hover': '0 8px 24px rgba(45, 95, 63, 0.12)',
        'wellness': '0 2px 8px rgba(139, 195, 74, 0.1)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2D5F3F 0%, #8BC34A 100%)',
        'card-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FBF5 100%)'
      }
    },
  },
  plugins: [],
}