"use client";

import { motion } from "framer-motion";

interface FeaturedImageProps {
  src: string;
  alt: string;
  maxWidth?: string;
  style?: React.CSSProperties;
}

export default function FeaturedImage({ src, alt, maxWidth = "960px", style }: FeaturedImageProps) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, y: 32, scale: 1.03 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: "100%",
          maxWidth,
          height: "auto",
          display: "block",
          margin: "0 auto",
          ...style,
        }}
      />
    </div>
  );
}
