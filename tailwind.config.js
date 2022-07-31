/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/script.js"],
  theme: {
    extend: {
      colors: {
        mainBG: {
          1: "hsl(222, 26%, 31%)",
          2: "hsl(0, 0%, 90%)",
          3: "hsl(281, 89%, 26%)",
        },
        screenBG: {
          1: "hsl(224, 36%, 15%)",
          2: "hsl(0, 0%, 93%)",
          3: "hsl(268, 71%, 12%)",
        },
        keypadBG: {
          1: "hsl(223, 31%, 20%)",
          2: "hsl(0, 5%, 81%)",
          3: "hsl(268, 71%, 12%)",
        },
        keyBG: {
          1: "hsl(30, 25%, 89%)",
          2: "hsl(45, 7%, 89%)",
          3: "hsl(268, 47%, 21%)",
        },
        keyBGEquals: {
          1: "hsl(6, 63%, 50%)",
          2: "hsl(25, 98%, 40%)",
          3: "hsl(176, 100%, 44%)",
        },
        keyBGReset: {
          1: "hsl(225, 21%, 49%)",
          2: "hsl(185, 42%, 37%)",
          3: "hsl(281, 89%, 26%)",
        },
        keyShadow: {
          1: "hsl(28, 16%, 65%)",
          2: "hsl(35, 11%, 61%)",
          3: "hsl(290, 70%, 36%)",
        },
        keyShadowReset: {
          1: "hsl(224, 28%, 35%)",
          2: "hsl(185, 58%, 25%)",
          3: "hsl(285, 91%, 52%)",
        },
        keyShadowEquals: {
          1: "hsl(6, 70%, 34%)",
          2: "hsl(25, 99%, 27%)",
          3: "hsl(177, 92%, 70%)",
        },
        textKey: {
          1: "hsl(221, 14%, 31%)",
          2: "hsl(60, 10%, 19%)",
          3: "hsl(52, 100%, 62%)",
        },
        textEquals: {
          1: "hsl(0, 0, 100%)",
          2: "hsl(0, 0, 100%)",
          3: "hsl(198, 20%, 13%)",
        },
        textReset: {
          3: "hsl(0, 0, 100%)",
        },
      },
    },
  },
  plugins: [],
};
