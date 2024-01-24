/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "lightWhite" : "#f5f5f5",

        "para" : "#777777",

        "rich-purple-50" : "#f3f2ff",
        "rich-purple-100" : "#e9e8ff",
        "rich-purple-200" : "#d5d4ff",
        "rich-purple-300" : "#b7b1ff",
        "rich-purple-400" : "#9385ff",
        "rich-purple-500" : "#7b61ff",
        "rich-purple-600" : "#5d30f7",
        "rich-purple-700" : "#4f1ee3",
        "rich-purple-800" : "#4218bf",
        "rich-purple-900" : "#37169c",
        "rich-purple-950" : "#200b6a",

        "rich-black-50" : "#f6f7f9",
        "rich-black-100" : "#edeef1",
        "rich-black-200" : "#d6d9e1",
        "rich-black-300" : "#b3b9c6",
        "rich-black-400" : "#8993a7",
        "rich-black-500" : "#6b768c",
        "rich-black-600" : "#565e73",
        "rich-black-700" : "#464c5e",
        "rich-black-800" : "#363a45d9",
        "rich-black-900" : "#3c4250",
        "rich-black-950" : "#24262d",
        
      },
      // fontSize:{
      //   "sm":"16px",
      //   "md":"20px",
      //   "24":"24px",
      //   "26":"26px",
      //   "lg":"28px",
      //   "xl":"36px",
      // },
      fontFamily:{
        "Inter" : "Inter"
      },
      boxShadow: {
        "3dBox" : "inset 7px 7px 14px #fbe2e3, inset -7px -7px 14px #dbd7fb;"
      }
      
    },
  },
  plugins: [],
}

