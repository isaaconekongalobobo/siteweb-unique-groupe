module.exports = {
  content: ["./src/views/**/*.ejs"],
  theme: {
    extend: {
      screens: {
        'xs': { max: '639px' },
        'tablet': { min: '640px', max: '1023px' },
        'desktop': { min: '1024px' },
      },
      backgroundColor: {
        'main-blue': '#1C94C4'
      }
    },
  },
  plugins: [],
}