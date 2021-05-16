import React from 'react';
// import GlobalFonts from './GlobalFonts';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DarkTheme from "./Theme/Dark.theme";
import styled, { ThemeProvider } from 'styled-components';

// import { IntroductionCard } from "./Components/IntroductionCard";
// import { IntroductionBackground } from "./Components/IntroductionBackground";
import { Home } from "./Home/Home.view";

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
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
