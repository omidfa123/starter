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
          200: "#ADADAD",
          300: "#B8B8B8",
          400: "#EEEEEE",
        },
        primary: {
          DEFAULT: "#FFA826",
        },
        secondary: {
          DEFAULT: "#9773FF",
        },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit , minmax(134px , 1fr))",
        container: "minmax(auto , 1440px)",
      },
      backgroundImage: {
        "body-gradient": "linear-gradient(180deg, #FFF5F7 0%, #F5F9FF 100%)",
        "header-gradient": "linear-gradient(90deg, #FFF5F7 0%, #F5F9FF 100%)",
      },
      boxShadow: {
        header: "0px 4px 8px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
