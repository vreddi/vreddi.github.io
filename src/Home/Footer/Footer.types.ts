import { ListItem } from "./Section/Section.types";

export type Props = {
  sections?: Section[];
  legal?: Legal;
};

export type Section = {
  title: string;
  listItems: ListItem[];
};

export type Legal = {
  copyright: string;
  location: string;
}
