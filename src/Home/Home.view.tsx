import React from "react";
import styled from "styled-components";
import { CodingCat } from "./CodingCat/CodingCat";
import { HelloWorld } from "./HelloWorld/HelloWorld";

const Container = styled.div`
  background-color: #1a1e2d;
  font-family: Montserrat, sans-serif;
  height: 100%;
  width: 100%;
`;

const Heading = styled.div`
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    padding: 0.5em;
  }
`;

const CodingCatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export class Home extends React.Component {


  public render(): React.ReactNode {
    return (
      <Container>
        <Heading>
          <CodingCatContainer>
            <CodingCat />
          </CodingCatContainer>
          <HelloWorld />
        </Heading>
      </Container>
    );
  }
}
