/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        pg: { bg: '#edf2f7', card: '#ffffff', dark: '#1a202c', darker: '#0f1724', blue: '#3b82f6', blueDark: '#2563eb', blueLight: '#dbeafe', border: '#e2e8f0' },
        txt: { primary: '#1a202c', secondary: '#64748b', light: '#94a3b8' },
      },
      boxShadow: { card: '0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)', cardHover: '0 4px 6px rgba(0,0,0,.05), 0 2px 4px rgba(0,0,0,.03)' },
    },
  },
  plugins: [],
};
