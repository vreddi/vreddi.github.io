import React from "react";
import styled from "styled-components";
import Microsoft from "../../../Assets/Microsoft.png";

import { Props } from "./MailMe.types";

const Container = styled.div`
  color: #515154;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  justify-content: flex-start;
  align-items: center;
`;

const Avatar = styled.div<Partial<Props>>`
  width: 75px;
  height: 75px;
  background-image: ${props => `url(${props.image})`};
  border-radius: 50%;
  background-size: cover;
  background-position: top center;
`;

const Button = styled.button`
  color: #333333;
  font-size: 16px;
  font-weight: 300;
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 7px 7px 14px rgb(0 0 0 / 15%), -7px -7px 14px rgb(255 255 255 / 95%);
  padding: 12px 25px;
  outline: none;
  transition: box-shadow 0.3s;

  :hover {
    box-shadow: 3px 3px 5px rgb(0 0 0 / 15%), -3px -3px 5px rgb(255 255 255 / 95%);
  }

  :active {
    box-shadow: 1px 1px 2px rgba(0,0,0,0.15) inset,
              -1px -1px 2px rgba(255,255,255,0.95) inset;
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const CompanyLogo = styled.img`
  height: 1em;
  width: auto;
  margin: 0em 0.4em;
`;

const CompanyContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
`;

export class MailMe extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <Container>
        <Avatar image={this.props.image} />
        <Description>
          Senior Software Engineer
        </Description>
        <CompanyContainer>
          <CompanyLogo src={Microsoft} /> Microsoft
        </CompanyContainer>
        <ButtonContainer>
          <Button>Resume</Button>
          <Button>Email</Button>
        </ButtonContainer>
      </Container>
    );
  }
}