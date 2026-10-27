"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import GroundTruthCta from "@/components/GroundTruthCta";
import PostLink from "@/components/PostLink";
import { publishedPosts } from "@/data/writing";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export default function Writing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const recent = publishedPosts().slice(0, 4);

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

        <div className="writing-cards">
          {recent.map((post) => (
            <PostLink key={post.id} post={post} className="writing-card">
              <div className="writing-card-media">
                {post.cover && (
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                )}
              </div>
              <div className="writing-card-meta">
                <time className="section-label" dateTime={post.date}>{formatDate(post.date)}</time>
                {post.source === "substack" && <span className="section-label">Substack</span>}
              </div>
              <h3 className="writing-card-title">{post.title}</h3>
              <p className="body-text writing-card-excerpt">{post.excerpt}</p>
              <span className="writing-card-read">
                {post.source === "substack" ? "Read on Substack" : "Read essay"} →
              </span>
            </PostLink>
          ))}
        </div>
      </div>

      <style>{`
        .writing-cta {
          display: flex;
          align-items: flex-end;
          padding-bottom: 0.35rem;
        }
        .writing-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1.25rem, 2vw, 2rem);
          margin-top: clamp(3rem, 8vh, 5rem);
        }
        .writing-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }
        .writing-card-media {
          position: relative;
          aspect-ratio: 1.91 / 1;
          border-radius: 0.75rem;
          overflow: hidden;
          background: var(--bg-alt);
          border: 1px solid var(--line);
        }
        .writing-card-media img {
          object-fit: cover;
          object-position: left center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .writing-card:hover .writing-card-media img {
          transform: scale(1.03);
        }
        .writing-card-meta {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.1rem;
        }
        .writing-card-title {
          margin-top: 0.6rem;
          font-size: clamp(1.125rem, 1.4vw, 1.3125rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.25;
          color: var(--fg);
          transition: color 0.3s ease;
        }
        .writing-card:hover .writing-card-title {
          color: var(--secondary);
        }
        .writing-card-excerpt {
          margin-top: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .writing-card-read {
          margin-top: auto;
          padding-top: 0.9rem;
          font-size: 0.8125rem;
          letter-spacing: 0.02em;
          color: var(--secondary);
          transition: transform 0.3s ease;
        }
        .writing-card:hover .writing-card-read {
          transform: translateX(4px);
        }
        .writing-card:focus-visible {
          outline: 2px solid var(--secondary);
          outline-offset: 4px;
          border-radius: 0.75rem;
        }
        @media (max-width: 1100px) {
          .writing-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .writing-cards { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .writing-card-media img,
          .writing-card-title,
          .writing-card-read {
            transition: none;
          }
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
