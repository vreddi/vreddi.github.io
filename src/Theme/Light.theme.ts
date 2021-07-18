import { spacing, measurements } from "./Initializer";
import { Theme } from "./Theme.types";

const theme: Theme = {
  text: {
    font: "\"Poppins\", sans-serif",

    bigFontSize: "2rem",
    h1FontSize: "1.5rem",
    h2FontSize: "1.25rem",
    h3FontSize: "1.125rem",
    normalFontSize: "0.983rem",
    smallFontSize: "0.813rem",
    smallerFontSize: "0.75rem",

    fontMedium: "500",
    fontSemiBold: "600",

    largeDevice: {
      bigFontSize: "3rem",
      h1FontSize: "2.25rem",
      h2Fontsize: "1.5rem",
      h3FontSize: "1.25rem",
      normalFontSize: "1rem",
      smallFontSize: "0.875rem",
      smallerFontSize: "0.813rem",
    }
  },
  spacing,
  measurements,
  hueColor: "250",
  /**
   * Hue color
   * Purple - 250
   * Green - 142
   * Blue - 230
   * Pink - 340
   */
  firstColor: "hsl(142, 69%, 61%)",
  firstColorSecond: "hsl(142, 69%, 61%)",
  firstColorAlt: "hsl(142, 57%, 53%)",
  firstColorLighter: "hsl(142, 92%, 85%)",
  titleColor: "hsl(142, 8%, 15%)",
  textColor: "hsl(142, 8%, 45%)",
  textColorLight: "hsl(142, 8%, 65%)",
  inputColor: "hsl(142, 70%, 96%)",
  bodyColor: "hsl(142, 60%, 99%)",
  containerColor: "#FFF",

};

export default theme;
