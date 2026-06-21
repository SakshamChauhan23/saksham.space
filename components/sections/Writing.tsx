"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Writing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="writing"
      ref={ref}
      style={{
        
        padding: "clamp(5rem, 14vh, 11rem) 0",
        overflow: "hidden",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(3rem, 8vw, 8rem)",
            alignItems: "end",
          }}
          className="writing-grid"
        >
          {/* Left */}
          <motion.div style={{ y }}>
            <p className="section-label" style={{ marginBottom: "clamp(1.5rem, 4vh, 3rem)" }}>
              Writing
            </p>
            <h2
              style={{
                fontSize: "clamp(2.25rem, 5vw, 5.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.035em",
                lineHeight: 1.0,
                color: "var(--fg)",
                marginBottom: "clamp(1.5rem, 3.5vh, 3rem)",
              }}
            >
              Ground Truth
            </h2>
            <p
              className="body-text"
              style={{ maxWidth: "38ch", marginBottom: "2.5rem" }}
            >
              Notes from the actual work, including the parts I get wrong. Building with AI, getting products adopted, and the judgment calls in between.
            </p>
            <a
              href="https://sakshamspace.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
              style={{ fontSize: "0.875rem", letterSpacing: "0.02em" }}
            >
              Read on Substack →
            </a>
          </motion.div>

          {/* Right: circular subscribe button */}
          <div style={{ flexShrink: 0 }}>
            <a
              href="https://sakshamspace.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "clamp(120px, 13vw, 160px)",
                height: "clamp(120px, 13vw, 160px)",
                borderRadius: "50%",
                border: "1px solid var(--teal)",
                color: "var(--teal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontSize: "0.8125rem",
                letterSpacing: "0.04em",
                fontWeight: 500,
                transition: "background 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--teal)";
                el.style.color = "var(--bg)";
                el.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "var(--teal)";
                el.style.transform = "scale(1)";
              }}
              data-cursor-hover
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .writing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
