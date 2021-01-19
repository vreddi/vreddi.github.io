import React from "react";
import styled from "styled-components";

import { WelcomeCard } from "../WelcomeCard";

const StyledContent = styled.div`
  display: flex;
  flex: 2;
  padding: 2.5rem;
  justify-content: center;
`;

export const Content = () => (
  <StyledContent>
    <WelcomeCard />
  </StyledContent>
);
