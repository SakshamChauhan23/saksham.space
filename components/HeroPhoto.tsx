"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function HeroPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -18);
    rotateY.set(x * 18);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px", display: "inline-block" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          borderRadius: "1.5rem",
          overflow: "hidden",
          width: "clamp(220px, 22vw, 340px)",
          aspectRatio: "1 / 1",
          boxShadow: isHovered
            ? "0 32px 80px rgba(19,119,255,0.18), 0 8px 24px rgba(0,0,0,0.12)"
            : "0 16px 48px rgba(0,0,0,0.10)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        <img
          src="/saksham.png"
          alt="Saksham Chauhan"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            mixBlendMode: "multiply",
          }}
        />
      </motion.div>

      {/* Floating shadow plane */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-1.5rem",
          left: "10%",
          right: "10%",
          height: "2rem",
          background: "rgba(19,119,255,0.12)",
          borderRadius: "50%",
          filter: "blur(16px)",
          rotateX,
          rotateY,
          scaleX: scale,
        }}
      />
    </div>
  );
}
