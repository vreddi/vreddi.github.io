export type Theme = {
  text: {
    font: string;

    bigFontSize: string;
    h1FontSize: string;
    h2FontSize: string;
    h3FontSize: string;
    normalFontSize: string;
    smallFontSize: string;
    smallerFontSize: string;

    fontMedium: string;
    fontSemiBold: string;

    /**
     * Font sizes for large devices.
     * @media screen and (min-width: 968px)
     */
    largeDevice: {
      bigFontSize: string;
      h1FontSize: string;
      h2Fontsize: string;
      h3FontSize: string;
      normalFontSize: string;
      smallFontSize: string;
      smallerFontSize: string;
    }
  },
  spacing: Spacing;
  measurements: Measurements;
  hueColor: string;
  firstColor: string;
  firstColorSecond: string;
  firstColorAlt: string;
  firstColorLighter: string;
  titleColor: string;
  textColor: string;
  textColorLight: string;
  inputColor: string;
  bodyColor: string;
  containerColor: string;
};


export type Spacing = {
  mb_0_25: string;
  mb_0_5: string;
  mb_0_75: string;
  mb_1: string;
  mb_1_5: string;
  mb_2: string;
  mb_2_5: string;
  mb_3: string;

  z_tooltip: string;
  z_fixed: string;
  z_modal: string;
};

export type Measurements = {
  headerHeight: string;
};