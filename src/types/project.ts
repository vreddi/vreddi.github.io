import type { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  icon: StaticImageData;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};
