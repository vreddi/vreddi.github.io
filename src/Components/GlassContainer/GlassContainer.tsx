import React from "react";
import styled from "styled-components";

import { Dashboard } from "../Dashboard";
import { Content } from "../Content";

const Glass = styled.div`
  display: flex;
  background: white;
  min-height: 85vh;
  width: 70%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
  border-radius: 2rem;
  z-index: 2;
`;

export const GlassContainer = () => (
  <Glass>
    <Dashboard />
    <Content />
  </Glass>
);
