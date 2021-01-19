import React from "react";
import styled from "styled-components";

import WavingBird from "../../Assets/WavingBird.gif";
import Microsoft from "../../Assets/Microsoft.png";
import Location from "../../Assets/Location.png";

const Card = styled.div`
  box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 20rem;
  border-radius: 0.7rem;
  display: flex;
  justify-content: space-between;
  background: rgb(132,189,254);
  background: linear-gradient(to top, rgba(132,189,254,1) 0%, rgba(106,173,255,1) 14%);
`;

const Image = styled.div`
background-position: right bottom;
  background-image: url(${WavingBird});
  background-size: contain;
  background-repeat: no-repeat;
  width: 12rem;
  flex: 1;
`;

const Heading = styled.div`
  font-size: 3rem;
  font-weight: 700;
  font-family: "Montserrat";
  color: white;
`;

const IntroText = styled.div`
  color: white;
  font-size: 1.1rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 2rem;
  flex: 2;
`;

const InsightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const InsightImageContainer = styled.div`
  height: 2rem;
  width: 2rem;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsightIcon = styled.img`
`;

const InsightText = styled.div`
  color: white;
  margin-left: 0.5rem;
`;

const Insights = styled.div`
  margin: 1rem 0rem;
`;

const Intro = styled.div``;

export const WelcomeCard = () => (
  <Card>
    <TextSection>
      <Intro>
        <Heading>
          Welcome!
        </Heading>
        <IntroText>
          Hi 👋, I'm Vishrut - I design and build beautiful applications and tools
          that help people make a difference and achieve more.
        </IntroText>
      </Intro>

      <Insights>
        <InsightContainer>
          <InsightImageContainer>
            <InsightIcon src={Microsoft} height={40}/>
          </InsightImageContainer>
          <InsightText>Software Engineer 2, Microsoft</InsightText>
        </InsightContainer>

        <InsightContainer>
          <InsightImageContainer>
            <InsightIcon src={Location} height={20}/>
          </InsightImageContainer>
          <InsightText>Seattle, WA</InsightText>
        </InsightContainer>
      </Insights>
    </TextSection>
    <Image />
  </Card>
);