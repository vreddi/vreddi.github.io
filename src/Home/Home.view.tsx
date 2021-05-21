import React from "react";
import styled from "styled-components";
import { CodingCat } from "./CodingCat/CodingCat";
import { Footer } from "./Footer/Footer";
import { Legal, Section } from "./Footer/Footer.types";
import { HelloWorld } from "./HelloWorld/HelloWorld";
import { Introduction } from "./Introduction/Introduction";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";

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

const CodingCatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export class Home extends React.Component {
  public getSections(): Section[] {
      return [
        this.getSocialSection()
      ];
  }

  public getSocialSection(): Section {
    return {
      title: "Connect and reach out",
      listItems: [
        {
          title: "Instagram",
          link: "https://www.instagram.com/vishrutreddi/",
          icon: <FaInstagram />
        },
        {
          title: "Twitter",
          link: "https://twitter.com/vishrutreddi",
          icon: <FaTwitter />
        },
        {
          title: "Github",
          link: "https://instagram.com",
          icon: <FaGithub />
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/channel/UCd_gPVUq_wiXUnjBKcGMlYA",
          icon: <FaYoutube />
        },
        {
          title: "BiggerPockets",
          link: "https://www.biggerpockets.com/users/VishrutR",
          icon: <FaHouseDamage />
        }
      ]
    }
  }

  public getLegal(): Legal {
    return {
      copyright: "Copyright © 2021 Vishrut Reddi. All rights reserved.",
      location: "🏔 Seattle, WA"
    }
  }

  public render(): React.ReactNode {
    return (
      <Container>
        <Introduction heading="" values={[]}/>
        <Footer
          sections={this.getSections()}
          legal={this.getLegal()}
        />
      </Container>
    );
  }
}
