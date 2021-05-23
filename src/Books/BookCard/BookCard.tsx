import React from "react";
import styled, { keyframes } from "styled-components";

import { Props } from "./BookCard.types";
import { Book } from "../Book/Book";

// --primary-light: #8abdff;
// --primary: #6d5dfc;
// --primary-dark: #5b0eeb;
// --white: #ffffff;
// --greyLight-1: #e4ebf5;
// --greyLight-2: #c8d0e7;
// --greyLight-3: #bec8e4;
// --greyDark: #9baacf;

const Waves = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

const Container = styled.div`
`;

const Card = styled.div`
  position: relative;
  width:  20em;
  height: 12em;
  background: #e4ebf5;
  z-index: 300;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
  border-radius: 1.25em;
  padding: 1em;
`;

const CardBack1 = styled.div`
  width:  20em;
  height: 12em;
  border-radius: 1.25em;
  filter: blur(1px);
  z-index: 100;

  margin-top: -192px;

  box-shadow: 0.4rem 0.4rem 0.8rem #c8d0e7, -0.4rem -0.4rem 0.8rem #ffffff;
  background: linear-gradient(to bottom right, #c8d0e7 0%, #ffffff 100%);
  -webkit-animation: ${Waves} 4s linear infinite;
          animation: ${Waves} 4s linear infinite;
`;

const CardBack2 = styled.div`
  width:  20em;
  height: 12em;
  border-radius: 1.25em;
  filter: blur(1px);
  z-index: 100;

  margin-top: -192px;

  box-shadow: 0.4rem 0.4rem 0.8rem #c8d0e7, -0.4rem -0.4rem 0.8rem #ffffff;
  -webkit-animation: ${Waves} 4s linear 2s infinite;
          animation: ${Waves} 4s linear 2s infinite;
`;

export class BookCard extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <Container>
        <Card>
          <Book cover={this.props.bookCover} />
        </Card>
        {
          this.props.status === "active" &&
          <CardBack1 /> &&
          <CardBack2 />
        }
      </Container>
    );
  }
}
