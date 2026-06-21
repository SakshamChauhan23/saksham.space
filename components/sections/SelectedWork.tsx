"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Project data ─────────────────────────────────────────── */

const projects = [
  {
    index: "01",
    tags: "AI & Product",
    title: "Adaptive difficulty, built for each learner",
    description: "An evaluation system powered by AI that adjusts question difficulty in real time, built for learners on 2G networks and entry level devices.",
    href: "/work/adaptive-assessment",
    image: "/zuvy-eval.png",
    image2: "/zuvy-eval2.png",
    bg: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
  },
  {
    index: "02",
    tags: "Systems Design",
    title: "Four days of manual work, rebuilt to thirty three hours",
    description: "Rebuilt admissions from spreadsheets to a system that tracks every applicant from screening to offer letter in one record.",
    href: "/work/admissions-at-scale",
    image: "/ad-dashboard.png",
    image2: "/ad-interviews.png",
    bg: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%)",
  },
  {
    index: "03",
    tags: "Strategy",
    title: "Design, product, and growth. A side project.",
    description: "Working directly with the founder to define audience, shape the product's first version, and build growth in from the start.",
    href: "/work/socialripple",
    image: "/sr-dashboard.png",
    image2: "/sr-timeline.png",
    bg: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)",
  },
  {
    index: "04",
    tags: "AI & Ops",
    title: "Too many candidates, too little signal.",
    description: "Three automation layers that turned a manual reactive recruitment pipeline into a system that qualifies, activates, and reaches out on its own.",
    href: "/work/recruitment-automation",
    image: "/recruitment-dashboard.png",
    image2: "/recruitment-dashboard2.png",
    bg: "linear-gradient(135deg, #fde8d0 0%, #fff5ee 100%)",
  },
];

/* ─── Card component ───────────────────────────────────────── */

function WorkCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="work-sticky-slot">
      <div className="work-sticky-inner">
        <Link href={project.href} style={{ textDecoration: "none", display: "block" }}>
          <div className="work-row-card" style={{ background: project.bg }}>

            {/* Left — text panel */}
            <div className="work-card-left">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p className="work-card-tags">{project.tags}</p>
                <div>
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{project.description}</p>
                </div>
              </div>
              <div className="work-card-pill">
                <span style={{ marginRight: "0.375rem" }}>★</span>
                Read Case Study
              </div>
            </div>

            {/* Right — 3D stacked screenshots */}
            <div className="work-card-right">
              <div className="work-img-stack">
                <img src={project.image2} alt="" className="work-img-back" />
                <img src={project.image}  alt={project.title} className="work-img-front" />
              </div>
            </div>

          </div>
        </Link>
      </div>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────── */

export default function SelectedWork() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const labelY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="work" ref={ref} style={{  }}>

      {/* Section header */}
      <div className="work-section-header" style={{ padding: "clamp(4rem, 8vh, 7rem) clamp(2rem, 6vw, 7rem) clamp(2rem, 4vh, 3rem)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <motion.h2
            style={{
              y: labelY,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--fg)",
            }}
          >
            Selected work
          </motion.h2>
          <p className="small-text">{projects.length} projects</p>
        </div>
      </div>

      {/* Sticky card stack */}
      <div className="work-cards-wrap" style={{ padding: "0 clamp(2rem, 6vw, 7rem)" }}>
        {projects.map((project) => (
          <WorkCard key={project.index} project={project} />
        ))}
      </div>

      <style>{`
        /* Each slot is 100vh — card sticks while in view */
        .work-sticky-slot {
          height: 100vh;
          display: flex;
          align-items: center;
          padding: clamp(1rem, 2vh, 1.5rem) 0;
          box-sizing: border-box;
        }
        .work-sticky-inner {
          position: sticky;
          top: clamp(4rem, 8vh, 6rem);
          width: 100%;
        }

        /* Card itself */
        .work-row-card {
          width: 100%;
          border-radius: 1.25rem;
          overflow: hidden;
          display: grid;
          grid-template-columns: 2fr 3fr;
          cursor: pointer;
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }
        .work-row-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.10);
          transform: translateY(-2px);
        }

        /* Left panel */
        .work-card-left {
          padding: clamp(2.5rem, 5vw, 4.5rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: clamp(520px, 75vh, 720px);
        }
        .work-card-tags {
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          hyphens: none;
        }
        .work-card-title {
          font-size: clamp(1.75rem, 2.8vw, 2.5rem);
          font-weight: 400;
          letter-spacing: -0.03em;
          line-height: 1.2;
          color: rgba(0,0,0,0.85);
          margin: 0 0 1rem;
          hyphens: none;
          overflow-wrap: normal;
          word-break: normal;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .work-card-desc {
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          line-height: 1.75;
          color: rgba(0,0,0,0.5);
          max-width: 36ch;
          hyphens: none;
          overflow-wrap: normal;
          word-break: normal;
        }

        /* Pill button */
        .work-card-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background: #000;
          color: #fff;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          width: fit-content;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .work-row-card:hover .work-card-pill {
          background: #1377ff;
          transform: translateX(3px);
        }

        /* Right panel */
        .work-card-right {
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 4vh, 3.5rem) clamp(1.5rem, 3vw, 2.5rem);
        }

        /* 3D image stack container */
        .work-img-stack {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          perspective: 900px;
        }

        .work-img-back,
        .work-img-front {
          position: absolute;
          width: 80%;
          height: auto;
          display: block;
          border-radius: 0.625rem;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.5s ease;
        }

        /* Back image — top-right, tilted away */
        .work-img-back {
          top: 0;
          right: 0;
          transform: perspective(900px) rotateX(4deg) rotateY(-12deg) rotateZ(1deg);
          box-shadow: 6px 12px 40px rgba(0,0,0,0.14);
          z-index: 1;
        }

        /* Front image — bottom-left, tilted toward viewer */
        .work-img-front {
          bottom: 0;
          left: 0;
          transform: perspective(900px) rotateX(-3deg) rotateY(10deg) rotateZ(-1deg);
          box-shadow: -4px 16px 48px rgba(0,0,0,0.18);
          z-index: 2;
        }

        /* On hover, images gently separate for more depth */
        .work-row-card:hover .work-img-back {
          transform: perspective(900px) rotateX(6deg) rotateY(-16deg) rotateZ(2deg) translate(6px, -6px);
          box-shadow: 10px 20px 56px rgba(0,0,0,0.16);
        }
        .work-row-card:hover .work-img-front {
          transform: perspective(900px) rotateX(-4deg) rotateY(14deg) rotateZ(-1.5deg) translate(-6px, 6px);
          box-shadow: -8px 20px 60px rgba(0,0,0,0.20);
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          /* Disable sticky scroll on mobile — just normal flow */
          .work-sticky-slot {
            height: auto !important;
            padding: 0.75rem 0 !important;
          }
          .work-sticky-inner {
            position: static !important;
          }

          /* Single column card */
          .work-row-card {
            grid-template-columns: 1fr !important;
            border-radius: 1rem !important;
          }

          /* Left panel: tighter on mobile */
          .work-card-left {
            min-height: unset !important;
            padding: 1.75rem 1.5rem !important;
            gap: 1.25rem !important;
          }
          .work-card-title {
            font-size: 1.375rem !important;
          }
          .work-card-desc {
            font-size: 0.9375rem !important;
          }

          /* Image stack — below the text, scaled for mobile */
          .work-card-right {
            padding: 1.25rem 1.5rem 1.75rem !important;
          }
          .work-img-stack {
            aspect-ratio: 16 / 9 !important;
          }
          .work-img-back {
            transform: perspective(600px) rotateX(3deg) rotateY(-8deg) rotateZ(1deg) !important;
          }
          .work-img-front {
            transform: perspective(600px) rotateX(-2deg) rotateY(6deg) rotateZ(-1deg) !important;
          }

          /* Section header */
          .work-section-header {
            padding: 3rem 1.25rem 1.5rem !important;
          }
          .work-cards-wrap {
            padding: 0 1.25rem !important;
          }
        }

        /* ── Tablet ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .work-card-left { min-height: clamp(400px, 60vh, 560px) !important; }
          .work-card-title { font-size: clamp(1.5rem, 2.2vw, 2rem) !important; }
        }
      `}</style>
    </section>
  );
}
