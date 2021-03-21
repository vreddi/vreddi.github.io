import React from "react";
import styled from "styled-components";
import Code2 from "../../Assets/Code2.mp4";

const Video = styled.video`
  width: 100% !important;
  height: auto !important;
  right: 0;
  bottom: 0;
  z-index: -100;
  background-size: cover;
  overflow: hidden;
`;

export class IntroductionBackground extends React.Component {
  public render(): React.ReactNode {
    return (
      <Video autoPlay muted loop id="myVideo">
        <source src={Code2} type="video/mp4" />
        Your browser does not support HTML5 video.
      </Video>
    );
  }
}
