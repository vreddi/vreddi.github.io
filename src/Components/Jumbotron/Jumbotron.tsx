import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const BackgroundText = styled.span`
  font-family: "TIMMONS NY";
  font-size: 800px;
  color: white;
  transition: 0.5s opacity;
    will-change: transform;
`;

export const Jumbotron = () => (
  <Background>
    <BackgroundText>HELLO</BackgroundText>
  </Background>
);
