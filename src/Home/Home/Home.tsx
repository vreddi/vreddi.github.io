import React from "react";
import TextLoop from "react-text-loop";
import styled from "styled-components";
import { Section } from "../../Components/Section";
import Me from "../../Assets/me.png";
import { Theme } from "Theme/Theme.types";

const Container = styled.div`
  font-family: ${(props: { theme: Theme }) => props.theme.text.font};
  color: ${(props: { theme: Theme }) => props.theme.textColor};
  display: grid;
  gap: 1rem;
  max-width: 768px;
  margin-left: ${(props: { theme: Theme }) => props.theme.spacing.mb_1_5};
  margin-right: ${(props: { theme: Theme }) => props.theme.spacing.mb_1_5};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: .5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: ${(props: { theme: Theme }) => props.theme.firstColor};

  :hover {
    color: ${(props: { theme: Theme }) => props.theme.firstColorAlt};
  }
`;

const HomeImage = styled.div`
`;

const HomeBlob = styled.svg`
  width: 200px;
  fill: ${(props: { theme: Theme }) => props.theme.firstColor};
`;

const HomeBlobImage = styled.image`
  width: 280px;

`;

const HomeData = styled.div`
  grid-column: 1/3;
`;

const HomeTitle = styled.h1`
  color: ${(props: { theme: Theme }) => props.theme.titleColor};
  font-size: ${(props: { theme: Theme }) => props.theme.text.bigFontSize};
  font-weight: ${(props: { theme: Theme }) => props.theme.text.fontSemiBold};
`;

const HomeSubTitle = styled.h3`
  color: ${(props: { theme: Theme }) => props.theme.textColor};
  font-weight: ${(props: { theme: Theme }) => props.theme.text.fontMedium};
  font-size: ${(props: { theme: Theme }) => props.theme.text.h3FontSize};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.spacing.mb_0_75};
`;

const HomeDescription = styled.p`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.spacing.mb_2};
`;

const ContactButton = styled.a`
  text-decoration: none;
  display: inline-block;
  background-color: ${(props: { theme: Theme }) => props.theme.firstColor};
  color: #FFF;
  padding: 1rem;
  border-radius: .5rem;
  font-weight: ${(props: { theme: Theme }) => props.theme.text.fontMedium};

  :hover {
    background-color: ${(props: { theme: Theme }) => props.theme.firstColorAlt};
  }
`;

const ContactButtonIcon = styled.i`
  font-size: 1.25rem;
  margin-left: ${(props: { theme: Theme }) => props.theme.spacing.mb_0_5};
  transition: .3s;
  display: inline-flex;
  align-items: center;
`;

const HomeScroll = styled.div`
  display: none;
`;

const HomeScrollButton = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${(props: { theme: Theme }) => props.theme.firstColor};
  transition: .3s;

  :hover {
    transform: translateY(.25rem);
  }
`;

const ScrollMouseIcon = styled.i`
  font-size: 2rem;
`;

const HomeScrollName = styled.span`
  font-size: ${(props: { theme: Theme }) => props.theme.text.smallFontSize};
  color: ${(props: { theme: Theme }) => props.theme.titleColor};
  font-weight: ${(props: { theme: Theme }) => props.theme.text.fontMedium};
  margin-right: ${(props: { theme: Theme }) => props.theme.spacing.mb_0_25};
`;

const HomeScrollArrow = styled.i`
  font-size: 1.25rem;
`;

export const Home: React.FC = () => {

  return (
    <Section id="home">
      <Container>
        <Content>
          <Social>
            <SocialIcon href="https://www.linkedin.com/in/vishrutreddi" target="_blank">
              <i className="uil uil-linkedin-alt" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/vishrutreddi/" target="_blank">
              <i className="uil uil-instagram-alt" />
            </SocialIcon>
            <SocialIcon href="https://github.com/vreddi" target="_blank">
              <i className="uil uil-github-alt" />
            </SocialIcon>
          </Social>

          <HomeImage>
            <HomeBlob viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </mask>
                <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    <HomeBlobImage x="-35" y="10" xlinkHref={Me} />
                </g>
            </HomeBlob>
          </HomeImage>

          <HomeData>
            <HomeTitle>Hi, I'm Vishrut</HomeTitle>
            <TextLoop>
              <HomeSubTitle>Frontend developer</HomeSubTitle>
              <HomeSubTitle>Musician</HomeSubTitle>
              <HomeSubTitle>Investor</HomeSubTitle>
            </TextLoop>
            <HomeDescription>High level experience in web design and development knowledge, producing quality work.</HomeDescription>
            <ContactButton href="#contact">
              Contact Me <ContactButtonIcon className="uil uil-message" />
            </ContactButton>
          </HomeData>

          <HomeScroll>
            <HomeScrollButton href="#about">
              <ScrollMouseIcon className="uil uil-mouse-alt" />
              <HomeScrollName>Scroll down</HomeScrollName>
              <HomeScrollArrow className="uil uil-arrow-down" />
            </HomeScrollButton>
          </HomeScroll>
        </Content>
      </Container>
    </Section>
  );
}