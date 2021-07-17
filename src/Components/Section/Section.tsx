import React from "react";
import styled from "styled-components";
import { Theme } from "Theme/Theme.types";
import { Props } from "./Section.types";

const Container = styled.div`
  padding: 2rem 0 4rem;
`;

const Title = styled.div`
  font-size: ${(props: { theme: Theme }) => props.theme.text.h1FontSize};
  text-align: center;
`;

const SubTitle = styled.div`
  display: block;
  font-size: ${(props: { theme: Theme }) => props.theme.text.smallFontSize};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.spacing.mb_3};
  text-align: center;
`;

export const Section: React.FC<Props> = (props) => {

  return (
    <Container id={props.id}>
      {props.title && <Title>{props.title}</Title>}
      {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
      {props.children}
    </Container>
  );
}