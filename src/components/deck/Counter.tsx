import { useEffect, useRef, useState } from "react";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1400,
  delay = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const timer = window.setTimeout(() => {
      const step = (t: number) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(to * eased));
        if (p < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [to, duration, delay]);

  return (
    <span>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
