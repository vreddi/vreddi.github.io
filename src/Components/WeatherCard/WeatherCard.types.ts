export type Props = {
  windSpeed?: number;
  rainCount?: number;
  leafCount?: number;
  snowCount?: number;
  cloudHeight?: number;
  cloudSpace?: number;
  cloudArch?: number;
  renewCheck?: number;
  splashBounce?: number;
};

export type Weather = "snow" |
  "wind" |
  "rain" |
  "thunder" |
  "sun";
