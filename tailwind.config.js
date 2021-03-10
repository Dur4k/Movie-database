module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        baloo: ["Nunito"],
        jura: ["Jura"],
        mukta: ["Mukta"],
        rubik: ["Rubik"],
      },
      height: {
        sm: "25rem",
        md: "28rem",
        lg: "30rem",
        xl: "35rem",
      },
      spacing: {
        98: "30rem",
        99: "35rem",
        100: "40rem",
        101: "75rem",
        102: "60%",
      },
      zIndex: {
        auto: "auto",
        n2: -2,
        n1: -1,
        0: 0,
        1: 1,
        2: 2,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
