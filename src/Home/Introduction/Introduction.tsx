import React from "react";
import styled from "styled-components";

import { Props, State } from "./Introduction.type";

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

const Value  = styled.span`
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
`;

const Mask = styled.div`
  height: 106px;
  position: relative;
  overflow: hidden;
  margin-top: 6px;

  span:nth-child(1) {
    background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
  }

  span:nth-child(2) {
    background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
  }

  span:nth-child(3) {
    background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
  }

  span:nth-child(4) {
    background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
  }

  span[data-show] {
    transform: translateY(-100%);
    transition: .5s transform ease-in-out;
  }

  span[data-up] {
    transform: translateY(-200%);
    transition: .5s transform ease-in-out;
  }
`;

export class Introduction extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    setInterval(() => {
      const show = document.querySelector('span[data-show]') as Element;
      const next = show.nextElementSibling || document.querySelector('span:first-child') as Element;
      const up = document.querySelector('span[data-up]');
      
      if (up) {
        up.removeAttribute('data-up');
      }

      show.removeAttribute('data-show');
      show.setAttribute('data-up', '');

      next.setAttribute('data-show', '');

    }, 4000);
  }

  public render(): React.ReactNode {
    return (
      <Heading>
        hello i am vishrut
        <Mask>
          <Value data-show>a software engineer.</Value>
          <Value>an investor.</Value>
          <Value>a musician.</Value>
          <Value>a fitness enthusiast.</Value>
        </Mask>
      </Heading>
    );
  }
}
