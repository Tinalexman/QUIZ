/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
      mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2rem))",
      skewed: "polygon(0 5%, 0 100%, 100% 95%, 100% 0%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainCyan: "#E6EDB7",
        deepGreen: "#88AE45",
        mainYellow: "#F1BC19",
        weirdBlue: "#666AAD",
        lightGrey: "#DED5EA",
        mainBrown: "#472B29",
      },
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
