import React from "react";
import styled from "styled-components";

const StyledBackground = styled.main`
  min-height: 100vh;
  background: linear-gradient(to right top, #1c6fec, #1ca7ec);
  background-image: url("https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg");
  background-size: cover;
  background-position: center;
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
    {/* <Circle1 />
    <Circle2 /> */}
  </StyledBackground>
);