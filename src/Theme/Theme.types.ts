export type Theme = {
  text: {
    font: string;
    primary: string;
    secondary: string;
    inactive: string;
  },
  background: {
    /**
     * Background color of the glass.
     */
    primary: string;
    secondary: string;

    /**
     * Background color on hover.
     */
    onHover: string;
  },
  border: {
    /**
     * All the borders used in the glass.
     */
    primary: string;
  }
};
