"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.div
        style={{ opacity, flex: 1, display: "flex", flexDirection: "column" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {/* ── Main headline (globe renders behind via ThreeScene fixed) ── */}
        <div
          className="site-container"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "clamp(1.25rem, 3vh, 2rem)",
            paddingTop: "6vh",
            paddingBottom: "6vh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(1rem, 2.5vw, 2rem)" }}>
              <svg
                width="clamp(26px, 3vw, 42px)"
                height="clamp(26px, 3vw, 42px)"
                viewBox="0 0 56 56"
                fill="none"
                style={{ flexShrink: 0, marginTop: "0.35em" }}
              >
                <path
                  d="M12 12h32v32M12 44L44 12"
                  stroke="#1377ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--fg)",
                  maxWidth: "20ch",
                  margin: 0,
                }}
              >
                Building practical software that gets used.
              </h1>
            </div>

            <p
              className="hero-subtext"
              style={{
                fontSize: "clamp(0.9375rem, 1.3vw, 1.125rem)",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                maxWidth: "46ch",
                paddingLeft: "clamp(2rem, 5.5vw, 4.5rem)",
                marginTop: "clamp(1rem, 2.5vh, 1.75rem)",
              }}
            >
              Product manager with a builder&apos;s background, now studying management
              consultancy to sharpen the strategy behind the build.
            </p>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .hero-subtext { padding-left: 0 !important; margin-top: 1.25rem !important; }
          }
        `}</style>

        {/* ── Scroll cue ── */}
        <div
          className="site-container"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "clamp(1.25rem, 3vh, 2.25rem)",
          }}
        >
          <Link
            href="#work"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
          >
            <span className="small-text">Scroll</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2v12M3 10l5 5 5-5"
                stroke="var(--fg-muted)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
