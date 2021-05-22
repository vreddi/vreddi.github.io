import { ListItem } from "./Section/Section.types";
import { Props as MailProps } from "./MailMe/MailMe.types";

export type Props = {
  sections?: Section[];
  legal?: Legal;
  mail?: Mail;
};

export type Section = {
  title: string;
  listItems: ListItem[];
};

export type Legal = {
  copyright: string;
  location: string;
}

export type Mail = MailProps;
