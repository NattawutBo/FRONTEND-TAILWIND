/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        tvi: '#00a350',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      width:{
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

