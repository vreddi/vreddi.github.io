"use client";

import {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import { GenerativeArtCanvas } from "./components/generativeArtCanvas";
import { GenerativeSketchProps } from "./generativeSketch.types";

// Native hook for element size
function useElementSizeNative<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateSize = useCallback(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [updateSize]);

  return [ref, size] as const;
}

export const GenerativeSketch = ({
  className,
  size,
  enableRedraw,
}: GenerativeSketchProps) => {
  const [containerRef, { width, height }] =
    useElementSizeNative<HTMLDivElement>();
  const [shouldRenderSketch, setShouldRenderSketch] = useState(false);

  useEffect(() => {
    setShouldRenderSketch(true);
  }, []);

  const onRedraw = () => {
    // not a very elegant solution here,
    // but we need to dismount and remount the <Sketch component
    // in order to re-generate and re-render with a new sketch.
    // toggle shouldRenderSketch, then back to 'true' quickly to dismount and remount.
    setShouldRenderSketch(false);
    setTimeout(() => {
      setShouldRenderSketch(true);
    });
  };

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className={"h-full"}
        style={size ? { width: size.width, height: size.height } : undefined}
      >
        {shouldRenderSketch && ((width && height) || size) ? (
          <GenerativeArtCanvas
            width={size ? size.width : width}
            height={size ? size.height : height}
          />
        ) : null}
      </div>
      {enableRedraw && (
        <div className="flex flex-row mt-2 justify-end">
          <button
            className="rounded-full font-sans text-xs text-white font-semibold bg-slate-400 hover:bg-slate-500 px-4 py-2"
            onClick={onRedraw}
          >
            Redraw
          </button>
        </div>
      )}
    </div>
  );
};
