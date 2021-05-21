export type Props = {
  title: string;
  listItems: ListItem[];
}

export type ListItem = {
  title: string;
  link: string;
  icon?: JSX.Element;
};
