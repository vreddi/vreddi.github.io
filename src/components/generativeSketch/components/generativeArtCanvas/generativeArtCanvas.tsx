"use client";

import dynamic from "next/dynamic";
import type { SketchProps } from "react-p5";
import { draw as defaultDraw } from "../../generativeSketch.utils";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

type P5Instance = Parameters<SketchProps["setup"]>[0];

export type DrawFunction = (
  p5: P5Instance,
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

  const setup = (p5: P5Instance, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  return (
    <div
      style={{ width, height }}
      className={`rounded-xl overflow-hidden bg-slate-200 ${className || ""}`}
    >
      <Sketch
        setup={setup}
        draw={(p5: P5Instance) => draw(p5, { width, height })}
      />
    </div>
  );
};
