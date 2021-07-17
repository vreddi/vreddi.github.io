import { Measurements, Spacing } from "./Theme.types"

export const measurements: Measurements = {
  headerHeight: "3rem",
};

export const spacing: Spacing = {
  mb_0_25: "0.25rem",
  mb_0_5: "0.5rem",
  mb_0_75: "0.75rem",
  mb_1: "1rem",
  mb_1_5: "1.5rem",
  mb_2: "2rem",
  mb_2_5: "2.5rem",
  mb_3: "3rem",

  z_tooltip: "10",
  z_fixed: "100",
  z_modal: "1000",
};

export function initializeStyles() {
  document.documentElement.style.setProperty("--header-height", measurements.headerHeight);
}