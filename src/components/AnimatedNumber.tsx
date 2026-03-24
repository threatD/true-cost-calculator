"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
}

export default function AnimatedNumber({
  value,
  duration = 900,
  className = "",
  prefix = "$",
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);
  const prevValue = useRef(value);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const start = prevValue.current;
    const end = value;
    const startTime = performance.now();

    if (rafId.current) cancelAnimationFrame(rafId.current);

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = start + (end - start) * eased;
      setDisplay(current);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        prevValue.current = end;
      }
    }

    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [value, duration]);

  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(display));

  return (
    <span className={className}>
      {prefix}
      {formatted}
    </span>
  );
}
