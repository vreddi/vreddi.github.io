import React from "../../../public/icons/react-light.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import GitHub from "../../../public/icons/github-light.svg";
import Instagram from "../../../public/icons/instagram-light.svg";
import YouTube from "../../../public/icons/youtube.svg";
import Spotify from "../../../public/icons/spotify.svg";
import Fandom from "../../../public/icons/fandom.png";
import BitManipulation from "../../../public/icons/bit-manipulation.png";
import { Guide } from "@/types/guide";
import { Connection } from "@/types/connection";
import { Project } from "@/types/project";
import { Article } from "@/types/article";

export function getGuides(): Guide[] {
  return [
    {
      id: "1",
      title: "React architectural patterns",
      icon: React,
      tags: ["Next.js", "React", "JavaScript"],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "Bit manipulation",
      icon: BitManipulation,
      tags: ["Interview"],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

export function getConnections(): Connection[] {
  return [
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/vishrut-reddi/",
    },
    {
      id: "github",
      title: "GitHub",
      icon: GitHub,
      link: "https://github.com/vishrutreddi",
    },
    {
      id: "instagram",
      title: "Instagram",
      icon: Instagram,
      link: "https://instagram.com/vishrutreddi",
    },
    {
      id: "youtube",
      title: "YouTube",
      icon: YouTube,
      link: "https://youtube.com/vishrutreddi",
    },
    {
      id: "spotify",
      title: "Spotify",
      icon: Spotify,
      link: "https://open.spotify.com/user/vishrutreddi",
    },
  ];
}

export function getProjects(): Project[] {
  return [
    {
      id: "1",
      title: "Kaijudo",
      icon: Fandom,
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

export function getArticles(): Article[] {
  return [
    {
      id: "1",
      icon: "",
      title: "Building a Modern Portfolio with Next.js",
      description:
        "A deep dive into creating a performant and responsive portfolio website using Next.js, React, and TypeScript",
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date("2024-01-15"),
      readingTime: "8 min read",
      tags: ["Next.js", "React", "TypeScript", "Web Development"],
    },
  ];
}
