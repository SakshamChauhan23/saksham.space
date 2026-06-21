"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const principles = [
  {
    index: "01",
    title: "Diagnosis before building",
    body: "The most expensive mistake is solving the wrong problem well. I spend real effort getting the problem right before anything gets made.",
  },
  {
    index: "02",
    title: "Building with AI, in practice",
    body: "I use AI to remove manual work, not to decorate a feature. Knowing where it genuinely helps, and being close enough to the technology to tell the difference.",
  },
  {
    index: "03",
    title: "Zero to one, end to end",
    body: "Most useful where the problem is still unclear and nothing has been built yet. I stay with it past launch, because a product no one uses is not finished.",
  },
  {
    index: "04",
    title: "Building for the overlooked",
    body: "Low-bandwidth users, first-generation and neurodivergent learners. Designing for the hardest case tends to produce something better for everyone.",
  },
];

export default function HowIWork() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(5rem, 12vh, 10rem) 0",
        
      }}
    >
      <div className="site-container">
        {principles.map((p, i) => {
          return (
            <PrincipleRow key={i} p={p} i={i} totalProgress={scrollYProgress} />
          );
        })}
      </div>
    </section>
  );
}

function PrincipleRow({
  p,
  i,
  totalProgress,
}: {
  p: (typeof principles)[0];
  i: number;
  totalProgress: import("framer-motion").MotionValue<number>;
}) {
  const start = i * 0.15;
  const end = start + 0.35;

  const opacity = useTransform(totalProgress, [start, start + 0.12, end], [0, 1, 1]);
  const x = useTransform(totalProgress, [start, start + 0.15], [40, 0]);

  return (
    <motion.div
      className="principle-item"
      style={{
        display: "grid",
        gridTemplateColumns: "3ch 1fr 1fr",
        gap: "clamp(1rem, 3vw, 3rem)",
        padding: "clamp(1.5rem, 3.5vh, 2.5rem) 0",
        alignItems: "start",
        opacity,
        x,
      }}
    >
      <span className="section-label" style={{ paddingTop: "0.2em" }}>
        {p.index}
      </span>
      <h3
        style={{
          fontSize: "clamp(1rem, 2vw, 1.5rem)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "var(--fg)",
          lineHeight: 1.25,
        }}
      >
        {p.title}
      </h3>
      <p
        className="body-text"
        style={{ fontSize: "clamp(0.875rem, 1vw, 0.9375rem)" }}
      >
        {p.body}
      </p>
    </motion.div>
  );
}
