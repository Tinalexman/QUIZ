/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainBlue: "#064997",
        deepBlue: "#001A38",
        lightPurple: "#9747FF",
        lightBlue: "#4399FD",
        lightGrey: "#D1D3D4"
      },
      screens: {
        sm: {
          min: "320px",
          max: "425px",
        },
        md: {
          min: "426px",
          max: "768px",
        },
        lg: {
          min: "769px",
          max: "1024px",
        },
        xl: {
          min: "1025px",
          max: "1280px",
        },
        xl2: {
          min: "1281px",
          max: "1536px",
        },
        xl4: {
          min: "1537px",
          max: "1920px",
        }
      },
      fontFamily: {
        body: ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
