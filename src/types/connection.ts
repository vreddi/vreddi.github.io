import type { StaticImageData } from "next/image";

export type Connection = {
  id: string;
  icon: StaticImageData;
  title: string;
  link: string;
};
