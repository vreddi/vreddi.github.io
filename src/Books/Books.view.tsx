import React from "react";
import { Footer } from "src/Home/Footer/Footer";
import { getLegal, getSections, getMail } from "src/Utils/Footer";
import styled from "styled-components";
import { BookCard } from "./BookCard/BookCard";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  max-width: 980px;
  font-size: 100px;
  margin-left: 1em;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #1d1d1f;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    margin-left: 0.7em;
    font-size: 80px;
  }
`;

const Title = styled.span`
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  padding-bottom: 6px;
  
  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
`;

const CardContainer = styled.div`
  margin-top: 100px;
  margin: 5em;
  display: flex;
  width: 80%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3em;
`;

export class Books extends React.Component {
  public render(): React.ReactNode {
    return (
      <Container>
        <Heading>
          <Title>Books</Title>
        </Heading>
        <CardContainer>
          <BookCard status="active" bookCover="https://images-na.ssl-images-amazon.com/images/I/51iKBuGKQxL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
          <BookCard status="done" bookCover="https://images-na.ssl-images-amazon.com/images/I/41fKUV78B-L._SX342_SY445_QL70_ML2_.jpg" />
          <BookCard status="done" bookCover="https://images-na.ssl-images-amazon.com/images/I/71xACyJha0L.jpg" />
          <BookCard status="done" bookCover="https://m.media-amazon.com/images/I/51DnVUpc80L.jpg" />
          <BookCard status="done" bookCover="https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL.jpg" />
          <BookCard status="done" bookCover="https://m.media-amazon.com/images/I/51+Nj26xH0L.jpg" />
          <BookCard status="done" bookCover="https://images-na.ssl-images-amazon.com/images/I/91Uqed0uPbL.jpg" />
          <BookCard status="done" bookCover="https://images-na.ssl-images-amazon.com/images/I/81e2YrHxtAL.jpg" />
          <BookCard status="done" bookCover="https://m.media-amazon.com/images/I/518l2awqcnL.jpg" />
          <BookCard status="done" bookCover="https://m.media-amazon.com/images/I/418vBUtIjrL.jpg" />
          <BookCard status="done" bookCover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1450755788l/28263492._SY475_.jpg" />
          <BookCard status="done" bookCover="https://images.bwbcovers.com/006/9780062362490.jpg" />
          <BookCard status="done" bookCover="https://images-na.ssl-images-amazon.com/images/I/81WY8INey8L.jpg" />
          <BookCard status="done" bookCover="https://m.media-amazon.com/images/I/41ZwqwL8NWL.jpg" />
          <BookCard status="done" bookCover="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg" />
        </CardContainer>
        <Footer
          sections={getSections()}
          mail={getMail()}
          legal={getLegal()}
        />
      </Container>
    );
  }
}