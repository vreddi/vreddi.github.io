import { P5CanvasInstance } from "@p5-wrapper/react";
import type { Point } from "./types/point";
import type { Bounds } from "./types/bounds";

export const draw = (
  p5: P5CanvasInstance,
  size: { width: number; height: number }
) => {
  const margin = -100;

  const drawCloud = (args: { y: number; lightFactor: number; hue: number }) => {
    const lightBounds = getBoundedBoundsWithRatio(
      { min: 20, max: 90 },
      { min: 70, max: 98 },
      args.lightFactor
    );
    const cloudColor = randomColor(p5, {
      hue: { min: args.hue - 5, max: args.hue + 5 },
      sat: { min: 20, max: 60 },
      light: lightBounds,
    });

    const line = {
      start: { x: margin, y: args.y },
      angle: 0,
      length: size.width - margin * 2,
    };

    drawCirclesAlongLine(p5, {
      line,
      count: p5.random(8, 15),
      sizeBounds: { min: 120, max: 300 },
      locationBounds: { min: 0, max: 80 },
      stayOnLine: false,
      fillColor: cloudColor,
    });

    p5.rect(0, args.y, size.width, size.height - args.y);
  };

  const hue = p5.random(5, 95);
  const layers = Math.floor(p5.random(6, 10));

  const ySpace = size.height - margin * 2;
  let yCursor = margin;
  while (yCursor < size.height - margin) {
    const lightFactor = (ySpace - yCursor) / ySpace;
    drawCloud({ y: yCursor, lightFactor: lightFactor, hue });
    yCursor = yCursor + ySpace / layers;
  }

  p5.noLoop();
};

export const drawWavesSketch = (
  p5: P5CanvasInstance,
  size: { width: number; height: number }
) => {
  function drawRidge(y: number) {
    p5.beginShape();
    p5.vertex(-5, size.height + 5);

    const stepWidthBounds = [size.width * 0.1, size.width * 0.6];

    let prevX = -5;
    p5.vertex(prevX, y);
    let isPeak = p5.random() > 0.5;
    while (prevX < size.width) {
      const stepWidth = p5.random(stepWidthBounds[0], stepWidthBounds[1]);
      const x = prevX + stepWidth;
      p5.quadraticVertex(
        prevX + stepWidth / 2,
        isPeak ? y - stepWidth / 2.3 : y + stepWidth / 2.3,
        x,
        y
      );
      prevX = x;
      isPeak = !isPeak;
    }

    p5.vertex(size.width + 1, size.height + 1);
    p5.endShape(p5.CLOSE);
  }

  function interpolateTopDown(lower: number, upper: number, ratio: number) {
    return upper - (upper - lower) * ratio;
  }

  function randomPairSeparate(lower: number, upper: number) {
    let a = p5.random(lower, upper);
    let b = p5.random(lower, upper);
    const diff = Math.abs(upper - lower);

    // must be >40% different
    while (Math.abs(a - b) < diff * 0.4) {
      a = p5.random(lower, upper);
      b = p5.random(lower, upper);
    }
    return [a, b];
  }

  const hueRange = [p5.random(0, 100), p5.random(0, 100)];
  const satRange = randomPairSeparate(0, 55);
  const lightRange = randomPairSeparate(35, 98);

  p5.colorMode(p5.HSL, 100);

  const bgColor = p5.color(hueRange[1] + 1, satRange[1] + 1, lightRange[1] + 1);
  p5.background(bgColor);

  p5.strokeWeight(p5.round(p5.random(1, 3)));

  // nostroke vs light vs dark
  const strokeSeed = p5.random();
  if (strokeSeed < 0.15) {
    p5.noStroke();
  } else if (strokeSeed <= 0.6) {
    p5.stroke(p5.random(77, 100));
  } else {
    p5.stroke(p5.random(0, 38));
  }

  const count = p5.round(p5.random(4, 9));

  // draws back to front
  for (let i = 1; i < count + 1; i++) {
    const currentRatio = i / count;
    const hue = interpolateTopDown(hueRange[0], hueRange[1], currentRatio);
    const sat = interpolateTopDown(satRange[0], satRange[1], currentRatio);
    const light = interpolateTopDown(
      lightRange[0],
      lightRange[1],
      currentRatio
    );
    p5.colorMode(p5.HSL, 100);
    const currentcolor = p5.color(hue, sat, light);
    p5.fill(currentcolor);
    const offset = (i - 1) * (size.height / count);
    drawRidge(offset);
  }

  p5.noLoop();
};

export const drawCloudsSketch = (
  p5: P5CanvasInstance,
  size: { width: number; height: number }
) => {
  const margin = -100;

  const drawCloud = (args: { y: number; lightFactor: number; hue: number }) => {
    const lightBounds = getBoundedBoundsWithRatio(
      { min: 20, max: 90 },
      { min: 70, max: 98 },
      args.lightFactor
    );
    const cloudColor = randomColor(p5, {
      hue: { min: args.hue - 5, max: args.hue + 5 },
      sat: { min: 20, max: 60 },
      light: lightBounds,
    });

    const line = {
      start: { x: margin, y: args.y },
      angle: 0,
      length: size.width - margin * 2,
    };

    drawCirclesAlongLine(p5, {
      line,
      count: p5.random(8, 15),
      sizeBounds: { min: 120, max: 300 },
      locationBounds: { min: 0, max: 80 },
      stayOnLine: false,
      fillColor: cloudColor,
    });

    p5.rect(0, args.y, size.width, size.height - args.y);
  };

  const hue = p5.random(5, 95);
  const layers = Math.floor(p5.random(6, 10));

  const ySpace = size.height - margin * 2;
  let yCursor = margin;
  while (yCursor < size.height - margin) {
    const lightFactor = (ySpace - yCursor) / ySpace;
    drawCloud({ y: yCursor, lightFactor: lightFactor, hue });
    yCursor = yCursor + ySpace / layers;
  }

  p5.noLoop();
};

export const randomColor = (
  p5: P5CanvasInstance,
  bounds: { hue: Bounds; sat: Bounds; light: Bounds } = {
    hue: { min: 0, max: 100 },
    sat: { min: 0, max: 100 },
    light: { min: 0, max: 100 },
  }
): ReturnType<P5CanvasInstance["color"]> => {
  const hue = p5.random(bounds.hue.min, bounds.hue.max);
  const sat = p5.random(bounds.sat.min, bounds.sat.max);
  const light = p5.random(bounds.light.min, bounds.light.max);

  p5.colorMode(p5.HSL, 100);
  return p5.color(hue, sat, light);
};

export const addPoints = (a: Point, b: Point) => {
  return { x: a.x + b.x, y: a.y + b.y };
};

export const subtractPoints = (a: Point, b: Point) => {
  return { x: a.x - b.x, y: a.y - b.y };
};

export const randomBounded = (p5: P5CanvasInstance, bounds: Bounds) => {
  return p5.random(bounds.min, bounds.max);
};

export const getBoundedBoundsWithRatio = (
  minBounds: Bounds,
  maxBounds: Bounds,
  ratio: number
) => {
  const min = minBounds.min + (minBounds.max - minBounds.min) * ratio;
  const max = maxBounds.min + (maxBounds.max - maxBounds.min) * ratio;
  return { min, max } as Bounds;
};

// all 'angle' values in radians.
export const getPointAtRandomAngle = (
  p5: P5CanvasInstance,
  start: Point,
  distance: number
) => {
  const randomAngle = p5.random(0, p5.TWO_PI);
  return getPointAtAngle(p5, start, randomAngle, distance);
};

export const getPointAtAngle = (
  p5: P5CanvasInstance,
  start: Point,
  angle: number,
  distance: number
) => {
  const x = distance * p5.cos(angle);
  const y = distance * p5.sin(angle);
  return { x: start.x + x, y: start.y + y } as Point;
};

export const drawCirclesAlongLine = (
  p5: P5CanvasInstance,
  args: {
    line: { start: Point; angle: number; length: number };
    count: number;
    sizeBounds: Bounds;
    locationBounds: Bounds;
    fillColor: ReturnType<P5CanvasInstance["color"]>;
    stayOnLine?: boolean;
  }
) => {
  const { line, count, sizeBounds, locationBounds, stayOnLine, fillColor } =
    args;
  p5.noStroke();
  p5.fill(fillColor);

  const spacePerItem = line.length / count;

  for (let i = 0; i < count - 1; i++) {
    const center = getPointAtAngle(
      p5,
      line.start,
      line.angle,
      spacePerItem * i
    );
    let circleLocation: Point = center;

    if (stayOnLine) {
      // if stayOnLine, calculate location offset along same line
      const locationOffset =
        (locationBounds.max - locationBounds.min) / 2 -
        randomBounded(p5, locationBounds);
      circleLocation = getPointAtAngle(p5, center, line.angle, locationOffset);
    } else {
      // if not stayOnLine, calculate location offset as random point at any angle from center point
      const locationOffset = randomBounded(p5, locationBounds);
      circleLocation = getPointAtRandomAngle(p5, center, locationOffset);
    }

    const circleSize = randomBounded(p5, sizeBounds);

    p5.circle(circleLocation.x, circleLocation.y, circleSize);
  }
};
