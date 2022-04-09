module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: [
          'Syne Mono', 'monospace'
        ]
      }
    },
  },
  plugins: [require("daisyui")],
}