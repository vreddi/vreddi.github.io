import React from "react";
import styled from "styled-components";

import { Props } from "./Legal.types";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em 0em 1em;
  border-top: 1px solid #d2d2d7;
  color: #86868b;
`;

const Copyright = styled.div`
  @media only screen and (max-width: 600px) {
    width: 10em;
  }
`;

const Location = styled.div`

`;

export class Legal extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <Container>
        <Copyright>{this.props.copyright}</Copyright>
        <Location>{this.props.location}</Location>
      </Container>
    );
  }
}
