/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFCD8',
          DEFAULT: '#FBF7BA',
          dark: '#F0EC9C',
        },
        secondary: {
          light: '#ffd166',
          DEFAULT: '#ffc233',
          dark: '#e6a100',
        },
        accent: {
          light: '#ff99c8',
          DEFAULT: '#ff6b99',
          dark: '#ff3d75',
        },
        background: '#121212',
        surface: '#1e1e1e',
        text: {
          primary: '#ffffff',
          secondary: '#b3b3b3',
        }
      },
      fontFamily: {
        'display': ['"Press Start 2P"', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(0, 123, 255, 0.7)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 123, 255, 0.9), 0 0 30px rgba(0, 123, 255, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
