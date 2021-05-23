import { Legal, Mail, Section } from "../Home/Footer/Footer.types";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { BiDollarCircle, GiFoodTruck, GiMoneyStack } from "react-icons/all";
import { GiRobinHoodHat } from "react-icons/all";
import Profile from "../Assets/Profile.png";

export function getSections(): Section[] {
  return [
    getSocialSection(),
    getReferSection()
  ];
}

function getSocialSection(): Section {
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
  };
}

function getReferSection(): Section {
  return {
    title: "Refer",
    listItems: [
      {
        title: "Robinhood",
        link: "https://join.robinhood.com/vishrur3",
        icon: <GiRobinHoodHat />
      },
      {
        title: "WeBull",
        link: "https://act.webull.com/ne/KwGgDWzkMuy3/ng0/inviteUs/",
        icon: <GiMoneyStack />
      },
      {
        title: "Copilot (UPG6KG)",
        link: "https://copilot.money/link/867dkypfpvFCzuwcA",
        icon: <BiDollarCircle />
      },
      {
        title: "Freshly",
        link: "https://refer.freshly.com/s/vishrut",
        icon: <GiFoodTruck />
      },
    ]
  };
}

export function getLegal(): Legal {
  return {
    copyright: "Copyright © 2021 Vishrut Reddi. All rights reserved.",
    location: "🏔 Seattle, WA"
  };
}

export function getMail(): Mail {
  return {
    image: Profile
  };
}