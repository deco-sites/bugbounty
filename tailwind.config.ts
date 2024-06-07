import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      dropShadow: {
        "luminous": "2px 0px 40px #02F67CCC",
        "luminous-less": "2px 0px 10px #02F67CCC",
      },
    },
  },
};
