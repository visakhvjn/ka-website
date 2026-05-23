"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  variant?: "light" | "dark";
};

export function StatCounter({
  value,
  suffix = "",
  label,
  variant = "dark",
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p
        className={cn(
          "text-4xl font-bold tracking-tight sm:text-5xl",
          variant === "dark"
            ? "bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent"
            : "text-brand",
        )}
      >
        {count.toLocaleString()}
        {suffix}
      </p>
      <p
        className={cn(
          "mt-2 text-sm font-medium",
          variant === "dark" ? "text-blue-200/80" : "text-muted",
        )}
      >
        {label}
      </p>
    </div>
  );
}
