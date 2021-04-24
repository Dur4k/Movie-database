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
        81: "21rem",
        82: "22rem",
        83: "23rem",
        84: "24rem",
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
        1280: "1180px",
      },
      zIndex: {
        auto: "auto",
        n2: -2,
        n1: -1,
        0: 0,
        1: 1,
        2: 2,
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 0 11px rgba(33, 33, 33, 1.8)",
        inner: "inset 0 2px 4px 0 rgba(13, 0, 0, 0)",
        none: "none",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
