"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GroundTruthCta from "@/components/GroundTruthCta";

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
      className="writing-section"
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
              style={{ maxWidth: "38ch" }}
            >
              Notes from the actual work, including the parts I get wrong. Building with AI, getting products adopted, and the judgment calls in between.
            </p>
          </motion.div>

          <div className="writing-cta">
            <GroundTruthCta variant="actions" essaysLink />
          </div>
        </div>
      </div>

      <style>{`
        .writing-cta {
          display: flex;
          align-items: flex-end;
          padding-bottom: 0.35rem;
        }
        @media (max-width: 800px) {
          .writing-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .writing-section { padding: 3.5rem 0 !important; }
        }
      `}</style>
    </section>
  );
}
