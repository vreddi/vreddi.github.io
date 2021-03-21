import React from 'react';
// import GlobalFonts from './GlobalFonts';
import './App.css';
import DarkTheme from "./Theme/Dark.theme";
import styled, { ThemeProvider } from 'styled-components';

import { IntroductionCard } from "./Components/IntroductionCard";
import { IntroductionBackground } from "./Components/IntroductionBackground";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 1em 2em;
  z-index: 2;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 35em;
  min-height: 20em; 
  position: absolute;
  overflow: hidden;
  background: linear-gradient(to bottom, 
        rgba(255, 255, 255, 0), 
        rgba(255, 255, 255, 0.9)
    100%);
`;

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <VideoContainer>
        <IntroductionBackground />
      </VideoContainer>
      <Container>
        <IntroductionCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
