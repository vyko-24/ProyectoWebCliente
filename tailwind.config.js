/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/flowbite/**/*.js", 
  "./node_modules/flowbite-react/lib/esm/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

