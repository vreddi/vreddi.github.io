import type { StaticImageData } from "next/image";

export type Guide = {
  id: string;
  title: string;
  icon: StaticImageData;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};
