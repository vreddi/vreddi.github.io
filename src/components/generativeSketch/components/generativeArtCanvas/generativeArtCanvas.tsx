"use client";

import dynamic from "next/dynamic";
import type { default as P5 } from "p5";
import { draw as defaultDraw } from "../../generativeSketch.utils";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export type DrawFunction = (
  p5: P5,
  size: { width: number; height: number }
) => void;

interface GenArtCanvasProps {
  draw?: DrawFunction;
  width: number;
  height: number;
  className?: string;
}

export const GenerativeArtCanvas = (props: GenArtCanvasProps) => {
  const { draw = defaultDraw, width, height, className } = props;

  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  return (
    <div
      style={{ width, height }}
      className={`rounded-xl overflow-hidden bg-slate-200 ${className || ""}`}
    >
      <Sketch setup={setup} draw={(p5: P5) => draw(p5, { width, height })} />
    </div>
  );
};
