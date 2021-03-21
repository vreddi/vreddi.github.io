import React from "react";
import styled from "styled-components";

import { Theme } from "Theme/Theme.types";
import { Header } from "./Header";
import { State } from "./GlassContainer.types";
import { Content } from "../Content";
import { LeftDrawer } from "./LeftDrawer/LeftDrawer";
import { LeftDrawerSection } from "./LeftDrawer/LeftDrawerSection/LeftDrawerSection";
import { LeftDrawerSectionItem } from "./LeftDrawer/LeftDrawerSectionItem/LeftDrawerSectionItem";
import { Photography } from "./LeftDrawer/Icons/Photography";
import { Projects } from "./LeftDrawer/Icons/Projects";
import { Home } from "./LeftDrawer/Icons/Home";
import { Music } from "./LeftDrawer/Icons/Music";
import { RealEstate } from "./LeftDrawer/Icons/RealEstate";
import { Fitness } from "./LeftDrawer/Icons/Fitness";

// import { Dashboard } from "../Dashboard";
// import { Content } from "../Content";

const Glass = styled.div`
  display: flex;
  background: rgba(16, 18, 27, 40%);
  backdrop-filter: blur(20px);
  z-index: 2;
  animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;

  @keyframes anime {
    0% {
        width: 10px;
        height: 10px;
        background: ${(props: { theme: Theme }) => props.theme.background.primary};
        /* box-shadow:  0 0 0 #cccccc,
                     0 0 0 #ffffff,
                      10px 10px 10px #cccccc inset,
                      -10px -10px 10px #ffffff inset; */
      }
      25% {
        width: 10px;
        height: 10px;
        background: ${(props: { theme: Theme }) => props.theme.background.primary};
        /* box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset; */
      }
      50% {
        width: 10px;
        height: 90vh;
        background: ${(props: { theme: Theme }) => props.theme.background.primary};
        /* box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset; */
      }
      100% {
        width: 90vw;
        height: 90vh;
        background: ${(props: { theme: Theme }) => props.theme.background.primary};
        border-radius: 14px;
        /* box-shadow:  40px 40px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset; */
      }
  }
`;

const VisibilityDefer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  
  @keyframes fadeInAnimation { 
      0% { 
          opacity: 0; 
      } 
      100% { 
          opacity: 1; 
      } 
  } 
`;

const ConentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

export class GlassContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ isReady: true }), 4000)
  }

  public render(): React.ReactNode {
    return (
      <Glass>
        {
          this.state.isReady &&
          (
            <VisibilityDefer>
              <Header />
              <ConentWrapper>
                <LeftDrawer>
                <LeftDrawerSection title="Welcome">
                    <LeftDrawerSectionItem onClick={() => null}>
                      <Home />
                      Home
                    </LeftDrawerSectionItem>
                  </LeftDrawerSection>
                  <LeftDrawerSection title="Categories">
                    <LeftDrawerSectionItem onClick={() => null}>
                      <Photography />
                      Photography
                    </LeftDrawerSectionItem>
                    <LeftDrawerSectionItem onClick={() => null}>
                      <Projects />
                      Projects
                    </LeftDrawerSectionItem>
                    <LeftDrawerSectionItem onClick={() => null}>
                      <Music />
                      Music
                    </LeftDrawerSectionItem>
                    <LeftDrawerSectionItem onClick={() => null}>
                      <RealEstate />
                      Real Estate
                    </LeftDrawerSectionItem>
                    <LeftDrawerSectionItem onClick={() => null}>
                      <Fitness />
                      Fitness
                    </LeftDrawerSectionItem>
                  </LeftDrawerSection>
                </LeftDrawer>
                <Content />
              </ConentWrapper>
            </VisibilityDefer>
          )
        }
      </Glass>
    );
  }
}
