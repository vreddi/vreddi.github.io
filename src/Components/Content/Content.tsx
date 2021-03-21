import React from "react";
import styled from "styled-components";

import { WelcomeCard } from "../WelcomeCard";
import { BitcoinCard } from "../BitcoinCard/BitcoinCard";

const StyledContent = styled.div`
  display: grid;
  flex: 2;
  padding: 2.5rem;
  justify-content: center;
`;

export const Content = () => (
  <StyledContent>
    <WelcomeCard />
    <BitcoinCard />
  </StyledContent>
);
