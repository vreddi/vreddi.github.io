import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../Theme/Theme.types";

import { Props } from "./LeftDrawerSectionItem.types";

const MenuItem = styled.a`
  text-decoration: none;
  color: ${(props: { theme: Theme }) => props.theme.text.primary};
  display: flex;
  align-items: center;
  font-weight: 400;
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;
  transition: 0.3s;
  &:hover {
    background-color: ${(props: { theme: Theme }) => props.theme.background.onHover};
  }

  svg {
    height: 14px;
    margin-right: 8px;
  }
`;

export class LeftDrawerSectionItem extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <MenuItem onClick={this.props.onClick}>
        {this.props.children}
      </MenuItem>
    );
  }
}
