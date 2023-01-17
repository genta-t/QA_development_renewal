/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./products.html",
    "./headerLogout.html",
    "./headerLogin.html",
    "./footer.html",
    "./top.html",
  ],
  purge: [
    "./index.html",
    "./products.html",
    "./headerLogout.html",
    "./headerLogin.html",
    "./footer.html",
    "./top.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Roboto"],
        inter: ["Inter"],
        robotoFlex: ["Roboto Flex"],
      },
      colors: {
        // 'カラー名': 'カラーコード'
        "qa-blue": "#2F6EBA",
        "qa-red": "#EA3323",
        "qa-thinGray": "#FAF9F9",
        "qa-gray": "#EFEFEF",
        "qa-yellow": "#FFFF54",
        "qa-green": "#4EAD5B",
        "qa-darkGray" : "#999999",
      },
    },
  },
  plugins: [],
};

// ３、４行目のファイルを全部通す書き方を相談
//ファイルパスを通す場所を間違っている為
