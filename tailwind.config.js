/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        bg_color: "var(--bgcolor)",
        white: "var(--white)",
        primary_text: "var(--primarytext)",
        primary_hover: "var(--primaryhover)",
        primary_color: "var(--primaryblue)",
        paragraphtext: "var(--paragraphtext)",
        success: "var(--success)",
        success_hover: "var(--successhover)",
        danger: "var(--danger)",
        danger_hover: "var(--dangerhover)",
        warning: "var(--warning)",
        warning_hover: "var(--warninghover)",
      },
      
    },
  },
  plugins: [],
}
