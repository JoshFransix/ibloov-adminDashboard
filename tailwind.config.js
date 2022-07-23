/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      '2xl': { 'min': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'min': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'min': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'min': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'min': '539px' },
      // => @media (max-width: 639px) { ... }
    }
  },


}
