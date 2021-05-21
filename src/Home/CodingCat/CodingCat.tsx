import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { CodingCatImage } from "./CodingCatImage";
import { Cat, Music } from "./CodingCat.types";

const CodingCatContainer = styled.div`
  min-width: 30em;
  margin-top: 3em;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    min-width: 22em;
  }
`;

export class CodingCat extends React.Component {
  private id: string = "bongo-cat";
  private notes: NodeListOf<Element>;
  private music: Music;
  private cat: Cat;
  private timeLine: gsap.core.Timeline;

  constructor(props: {}) {
    super(props);
    this.notes = document.querySelectorAll(".note");
    this.music = { note: this.s(".music .note") };
    this.cat = {
      pawRight: {
        up: this.s(".paw-right .up"),
        down: this.s(".paw-right .down")
      },
      pawLeft: {
        up: this.s(".paw-left .up"),
        down: this.s(".paw-left .down")
      }
    };
    this.timeLine = gsap.timeline();
  }

  componentDidMount() {
    this.notes = document.querySelectorAll(".note");

    this.notes.forEach((note) => {
      note?.parentElement?.appendChild(note.cloneNode(true));
      note?.parentElement?.appendChild(note.cloneNode(true));
    });

    gsap.set(this.music.note, { scale: 0, autoAlpha: 1 });

    this.timeLine
      .add(this.animatePawState(this.cat.pawLeft.up), "start")
      .add(this.animatePawState(this.cat.pawRight.down), "start")
      .add(this.animatePawState(this.cat.pawLeft.down), "start+=0.19")
      .add(this.animatePawState(this.cat.pawRight.up), "start+=0.19")
      .timeScale(1.6);

    gsap.from(
      ".terminal-code line",
      {
        duration: 0.1,
        stagger: 0.1,
        ease: "none",
        repeat: -1,
      }
    );

    const noteElFn: Function = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);

    const noteEls: HTMLElement[] = noteElFn(this.music.note);

    const numNotes = noteEls.length / 3;
    const notesG1 = noteEls.splice(0, numNotes);
    const notesG2 = noteEls.splice(0, numNotes);
    const notesG3 = noteEls;

    this.timeLine.add(this.animateNotes(notesG1)).add(this.animateNotes(notesG2), ">0.05").add(this.animateNotes(notesG3), ">0.25");
  }

  public animateNotes(els: HTMLElement[]): GSAPTween {
    const colorizer = gsap.utils.random(
      [
        "#a5ea9b",
        "#ff61d8",
        "#569cfa",
        "#ffcc81",
        "#7ed1e2",
        "#a3a4ec",
        "#67b5c0",
        "#fd7c6e"
      ],
      true
    );
    const rotator = gsap.utils.random(-50, 50, 1, true);
    const dir = (amt: number) => `${gsap.utils.random(["-", "+"])}=${amt}`;

    els.forEach((el) => {
      gsap.set(el, {
        stroke: colorizer(),
        rotation: rotator(),
        x: gsap.utils.random(-25, 25, 1),
      });
    });

    return gsap.fromTo(
      els,
      {
        autoAlpha: 1,
        y: 0,
        scale: 0,
      },
      {
        duration: 2,
        autoAlpha: 0,
        scale: 1,
        ease: "none",
        stagger: {
          from: "random",
          each: 0.5,
        },
        rotation: dir(gsap.utils.random(20, 30, 1)),
        x: dir(gsap.utils.random(40, 60, 1)),
        y: gsap.utils.random(-200, -220, 1),
        onComplete: () => { this.animateNotes(els) },
      }
    );
  };

  public animatePawState(selector: string): gsap.core.Tween {
    return gsap.fromTo(
      selector,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.01,
        repeatDelay: 0.19,
        yoyo: true,
        repeat: -1
      }
    );
  }

  public s(selector: string) {
    return `#${this.id} ${selector}`;
  }

  public render() {
    return (
      <CodingCatContainer>
        <CodingCatImage />
      </CodingCatContainer>
    );
  }
}