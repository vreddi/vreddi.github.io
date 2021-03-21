import React from "react";
import styled from "styled-components";

import { Theme } from "../../../Theme/Theme.types";

const Container = styled.div`
  flex-basis: 240px;
  border-right: 1px solid ${(props: { theme: Theme }) => props.theme.border.primary };
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
  @media screen and (max-width: 945px) {
    display: none;
  }
`;

export class LeftDrawer extends React.Component {
  public render(): React.ReactNode {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
