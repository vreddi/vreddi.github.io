import React from "react";
import styled from "styled-components";

const StyledBackground = styled.main`
  min-height: 100vh;
  background: linear-gradient(to right top, #65efc9, #6cdbeb);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle1 = styled.div`
  height: 20rem;
  width: 20rem;
  right: 5%;
  top: 2%;
  border-radius: 50%;
  position: absolute;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  z-index: 1;
`;

const Circle2 = styled.div`
  height: 20rem;
  width: 20rem;
  position: absolute;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 50%;
  bottom: 2%;
  left: 5%;
  z-index: 1;
`;

export const Background = (props: any) => (
  <StyledBackground>
    {props.children}
    <Circle1 />
    <Circle2 />
  </StyledBackground>
);