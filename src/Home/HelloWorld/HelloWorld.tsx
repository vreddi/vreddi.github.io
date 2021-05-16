import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 9em;
  font-weight: 900;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    font-size: 6em;
  }
`;

const Hello = styled.div`
  color: #ffcc81;
`;

const World = styled.div`
  color: #a5ea9b;
  margin-left: 1em;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    margin-left: 0em;
  }
`;

export class HelloWorld extends React.Component {
  public render(): React.ReactNode {
    return (
      <Container>
        <Hello>Hello</Hello>
        <World>World!</World>
      </Container>
    );
  }
}
