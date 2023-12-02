/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontWeight: {
      myBold: '470',
      menuBold:"400",
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      colors: {
        blueOne: '#34a0a4',
        lightBlue : "#eef8f5",
        redOne: "#ca2b43",
        grayOne: "#e6e4e5",
        grayButton: "#6f6f6f",
        infoIcon: "#5d5d5d",
        bgColour: "#fcfcfc",
        buttonColor:"#40769f",
        buttonEnd: "#99f6e4",
        skillsBg: "#dedede",
        greenText: "#77ce7e",
        redText :"#d91512",
        favShare :"#39455d",
        appointmentColor: "#52b69a"
      }
    },
  },
  plugins: [],
};