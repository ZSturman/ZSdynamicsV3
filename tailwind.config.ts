import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        'urbanist-light': "Urbanist-Light",
        'urbanist-regular': "Urbanist-Regular",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "lightest-shade": "var(--lightest-shade)",
        "darkest-shade": "var(--darkest-shade)",
        "light-shade": "var(--light-shade)",
        "dark-shade": "var(--dark-shade)",
        "light-accent": "var(--light-accent)",
        "dark-accent": "var(--dark-accent)",
        "main-brand": "var(--main-brand)",
      },
    },
  },
  plugins: [],
};



export default config;
