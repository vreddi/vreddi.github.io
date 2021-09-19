import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer/Footer";
import { Introduction } from "./Introduction/Introduction";
import { getLegal, getMail, getSections } from "../Utils/Footer";
import { Header } from "../Components/Header";
import { Section } from "../Components/Section";
import { Home } from "./Home/Home";
import { About } from "./About/About";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const Heading = styled.div`
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    padding: 0.5em;
  }
`;


// export class Home extends React.Component {
//   public render(): React.ReactNode {
//     return (
//       <Container>
//         <Introduction heading="" values={[]}/>
//         <Footer
//           sections={getSections()}
//           legal={getLegal()}
//           mail={getMail()}
//         />
//       </Container>
//     );
//   }
// }


export const Main: React.FC = () => {
  return (
    <>
      <Header
        logoTitle="Vishrut"
        navItems={[
          {
            label: "Home",
            uniconIcon: "uil uil-estate",
            link: "#home"
          },
          {
            label: "About",
            uniconIcon: "uil uil-user",
            link: "#about"
          },
          {
            label: "Skills",
            uniconIcon: "uil uil-file-alt",
            link: "#skills"
          },
          {
            label: "Services",
            uniconIcon: "uil uil-briefcase-alt",
            link: "#services"
          },
          {
            label: "Portfolio",
            uniconIcon: "uil uil-scenery",
            link: "#portfolio"
          },
          {
            label: "Contact",
            uniconIcon: "uil uil-message",
            link: "#contact"
          }
        ]}
      />
      <main>
        <Home />
        {/* <About /> */}
      </main>
    </>
  );
}