export type Props = {
  /**
   * Title shown in the logo region of the header.
   */
  logoTitle: string;

  /**
   * List of Navigation items shown within the header.
   */
  navItems: NavItem[];
};

export type NavItem = {
  /**
   * Unicon icon string.
   * eg: uil uil-estate
   */
  uniconIcon: string;

  /**
   * Label of the navigational item.
   */
  label: string;

  /**
   * Link string that goes within the href.
   */
  link: string;
};
