import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../Theme/Theme.types";

import { Props } from "./LeftDrawerSection.types";


const Wrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  color: ${(props: { theme: Theme }) => props.theme.text.inactive};
  margin-bottom: 14px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export class LeftDrawerSection extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <Menu>
          {this.props.children}
        </Menu>
      </Wrapper>
    );
  }
}
