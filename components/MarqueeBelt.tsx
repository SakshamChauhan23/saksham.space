"use client";

import { motion } from "framer-motion";

const text = "Saksham Chauhan — Product Manager — ";
const repeated = Array(8).fill(text).join("");

export default function MarqueeBelt() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        overflow: "hidden",
        background: "var(--bg)",
        paddingTop: "clamp(1rem, 2.5vh, 1.75rem)",
        paddingBottom: "clamp(1rem, 2.5vh, 1.75rem)",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        <span
          style={{
            fontSize: "clamp(3rem, 7vw, 7.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.035em",
            color: "var(--fg)",
            lineHeight: 1,
          }}
        >
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
