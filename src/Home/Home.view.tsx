import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer/Footer";
import { Introduction } from "./Introduction/Introduction";
import { getLegal, getMail, getSections } from "../Utils/Footer";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
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
        <Introduction heading="" values={[]}/>
        <Footer
          sections={getSections()}
          legal={getLegal()}
          mail={getMail()}
        />
      </Container>
    );
  }
}
