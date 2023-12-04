import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      '2xl': {'max': '1536px'},

      'xl': {'max': '1280px'},

      // 'lg': {'max': '1024px'},
      'lg': {'max': '999px'},

      'md': {'max': '868px'},

      'sm': {'max': '640px'},
    }
  },
  plugins: [],
}
export default config
