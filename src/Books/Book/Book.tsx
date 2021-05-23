import React from "react";
import styled from "styled-components";

import { Props } from "./Book.types";

const Container = styled.div`
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  z-index: 400;

  &:hover {
    .book-card {
      transition:
        0.6s cubic-bezier(0.23, 1, 0.32, 1),
        box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow:
        rgba(white, 0.2) 0 0 40px 5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
`;

const BookCard = styled.div`
  position: relative;
  flex: 0 0 240px;
  width: 80px;
  height: 120px;
  background-color: #333;
  overflow: hidden;
  border-radius: 4px;
  box-shadow:
    rgba(black, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const BookCardBackground = styled.div<Partial<Props>>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-image: ${props => `url(${props.cover})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
`;

export class Book extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <Container>
        <BookCard className="book-card">
          <BookCardBackground cover={this.props.cover}>

          </BookCardBackground>
        </BookCard>
      </Container>
    );
  }
}
