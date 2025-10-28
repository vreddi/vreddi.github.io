import type { StaticImageData } from "next/image";

export type Article = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  readingTime?: string;
  icon: StaticImageData | string;
  createdAt: Date;
  updatedAt: Date;
};
