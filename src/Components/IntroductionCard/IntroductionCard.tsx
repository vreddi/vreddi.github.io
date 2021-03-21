import React from "react";
import styled from "styled-components";

import IntroImage from "../../Assets/Introduction.png";
import Microsoft from "../../Assets/Microsoft.png";
import Location from "../../Assets/Location.png";
import WavingHand from "../../Assets/waving_hand.gif";
import Rocket from "../../Assets/rocket.gif";

const Card = styled.div`
  box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 30rem;
  border-radius: 0.7rem;
  display: flex;
  justify-content: space-between;
  background: rgba(16, 18, 27, 40%);
  backdrop-filter: blur(20px);
`;

const Image = styled.div`
  display: flex;
  border-radius: 0.7rem;
  background-position: left top;
  background-image: url(${IntroImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 12rem;
  flex: 1;
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

const Heading = styled.div`
  font-size: 3rem;
  font-weight: 700;
  font-family: "Montserrat";
  color: white;
`;

const IntroText = styled.div`
  color: white;
  margin-top: 1.5rem;
  font-size: 1.3rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 2rem;
  flex: 2;
`;

const WavingHandImage = styled.img`
  src: ${WavingHand};
  width: 1.5rem;
`;

const RocketImage = styled.img`
  width: 2rem;
`;

const Intro = styled.div``;

export class IntroductionCard extends React.Component {
  public render(): React.ReactNode {
    return (
      <Card>
        <Image />
        <TextSection>
      <Intro>
        <Heading>
          Welcome!
        </Heading>
        <IntroText>
          Hi <WavingHandImage src={WavingHand}/>, I'm Vishrut - I design and build beautiful applications and tools
          that help people make a difference and achieve more.
        </IntroText>
      </Intro>

      <Insights>
        <InsightContainer>
          <InsightImageContainer>
            <InsightIcon src={Microsoft} height={40}/>
          </InsightImageContainer>
          <InsightText>Senior Software Engineer, Microsoft</InsightText>
        </InsightContainer>

        <InsightContainer>
          <InsightImageContainer>
            <InsightIcon src={Location} height={20}/>
          </InsightImageContainer>
          <InsightText>Seattle, WA</InsightText>
        </InsightContainer>
      </Insights>
    </TextSection>

      </Card>
    );
  }
}
