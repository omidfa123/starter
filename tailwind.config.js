const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "22em",
      // => @media (min-width: 352px) { ... }
      sm: "30em",
      // => @media (min-width: 480px) { ... }
      md: "48em",
      // => @media (min-width: 768px) { ... }
      lg: "62em",
      // => @media (min-width: 992px) { ... }
      xl: "80em",
      // => @media (min-width: 1280px) { ... }
      "2xl": "96em",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["iransansx", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: {
          DEFAULT: "#15121D",
          100: "#CACACA",
          150: "#A1A1A1",
          200: "#ADADAD",
          300: "#B8B8B8",
          400: "#EEEEEE",
          500: "#F5F5F5",
          600: "#C7C7C7",
        },
        primary: {
          DEFAULT: "#FFA826",
        },
        secondary: {
          DEFAULT: "#9773FF",
        },
        red: {
          150: "#FF5E5E",
        },
        blue: {
          150: "#98AFFF",
        },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit , minmax(283px , 1fr))",
        container: "minmax(auto , 1440px)",
      },
      backgroundImage: {
        "body-gradient": "linear-gradient(180deg, #FFF5F7 0%, #F5F9FF 100%)",
        "header-gradient": "linear-gradient(90deg, #FFF5F7 0%, #F5F9FF 100%)",
      },
      boxShadow: {
        header: "0px 4px 8px rgba(0, 0, 0, 0.03)",
      },
      keyframes: {
        circle1: {
          " 0%": {
            opacity: ".9",
          },
          "33.3333%": {
            opacity: ".6",
          },
          "66.6667%": {
            opacity: ".3",
          },
          "100%": {
            opacity: ".9",
          },
        },
        circle2: {
          " 0%": {
            opacity: ".6",
          },
          "33.3333%": {
            opacity: ".3",
          },
          "66.6667%": {
            opacity: ".9",
          },
          "100%": {
            opacity: ".6",
          },
        },
        circle3: {
          " 0%": {
            opacity: ".3",
          },
          "33.3333%": {
            opacity: ".9",
          },
          "66.6667%": {
            opacity: ".6",
          },
          "100%": {
            opacity: ".3",
          },
        },
        grow: {
          from: {
            width: "87px",
          },
          to: {
            width: "144px",
          },
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
