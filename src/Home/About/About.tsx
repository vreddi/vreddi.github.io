import React from "react";
import styled from "styled-components";
import { Theme } from "Theme/Theme.types";

import { Section } from "../../Components/Section";

const ContentContainer = styled.div`
  display: grid;
  max-width: 768px;
  margin-left: ${(props: { theme: Theme }) => props.theme.spacing.mb_1_5};
  margin-right: ${(props: { theme: Theme }) => props.theme.spacing.mb_1_5};
`;

const Image = styled.img``;

const Data = styled.div``;
const Description = styled.p`

`;

export const About: React.FC = () => {

  return (
    <Section id="about" title="About Me" subTitle="My introduction">
      <ContentContainer>
        <Image />
        <Data>
          <Description>
            Web developer, with extensive knowledge and years of experience, working
            in web technologies and UI/UX design, delivering quality work.
          </Description>
        </Data>
      </ContentContainer>
    </Section>
  );
}