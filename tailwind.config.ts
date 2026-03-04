import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        basalt:   '#2D3436',
        tuff:     '#636E72',
        olivine:  '#4A7C59',
        limestone:'#F5F1EB',
        kowhai:   '#D4A843',
      },
      fontFamily: {
        sans:  ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        content: '960px',
      },
    },
  },
  plugins: [],
}

export default config
