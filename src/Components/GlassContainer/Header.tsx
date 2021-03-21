import React from "react";
import styled from "styled-components";

import { Theme } from "Theme/Theme.types";
import { SearchBox } from "./SearchBox";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${(props: { theme: Theme }) => props.theme.border.primary};
`;

export class Header extends React.Component {
  public render(): React.ReactNode {
    return (
      <Container>
        <SearchBox />
      </Container>
    );
  }
}