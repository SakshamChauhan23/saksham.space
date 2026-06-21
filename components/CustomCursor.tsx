"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Only on pointer-fine devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let x = 0, y = 0;
    let rx = 0, ry = 0;
    let isHovering = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        isHovering = true;
      }
    };

    const onLeave = () => {
      isHovering = false;
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);

      // Dot follows exactly
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;

      // Ring lags behind
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px) scale(${isHovering ? 1.8 : 1})`;
      ring.style.borderColor = isHovering ? "var(--secondary)" : "rgba(0, 0, 0, 0.3)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    raf = requestAnimationFrame(loop);

    // Hide native cursor
    document.body.style.cursor = "none";

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "var(--fg)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "normal",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          border: "1px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "border-color 0.3s ease, transform 0.1s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
