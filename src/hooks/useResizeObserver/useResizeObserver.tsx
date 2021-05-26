import { useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useResizeObserver(
  ref: any,
  monitor: { height?: boolean; width?: boolean }
) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const observer = useRef(
    new ResizeObserver((entries: any) => {
      const { width, height } = entries[0].contentRect;
      if (monitor.width) {
        setWidth(width);
      }
      if (monitor.height) {
        setHeight(height);
      }
    })
  );

  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }
  }, [ref, observer]);

  return { width: width, height: height };
}
