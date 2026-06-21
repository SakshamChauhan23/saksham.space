"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const contacts = [
  {
    platform: "LinkedIn",
    description: "Professional background, experience, and work history.",
    action: "Connect",
    href: "https://www.linkedin.com/in/sakshamchauhan/",
    handle: "Saksham Chauhan",
  },
  {
    platform: "X",
    description: "Short notes on building, AI, and product thinking.",
    action: "Follow",
    href: "https://x.com/SakshamCh2302",
    handle: "@SakshamCh2302",
  },
  {
    platform: "Product Hunt",
    description: "Products I have built and launched, all in one place.",
    action: "View",
    href: "https://www.producthunt.com/@saksham_chauhan23",
    handle: "@saksham_chauhan23",
  },
  {
    platform: "Email",
    description: "For anything that warrants a proper conversation.",
    action: "Write",
    href: "mailto:sakshamchauhan23@gmail.com",
    handle: "sakshamchauhan23@gmail.com",
  },
];

export default function Connect() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="connect"
      ref={ref}
      style={{
        
        padding: "clamp(5rem, 14vh, 11rem) 0",
        overflow: "hidden",
      }}
    >
      <div className="site-container">
        {/* Top row: label + headline */}
        <motion.div style={{ y }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2.5vh, 1.5rem)",
              marginBottom: "clamp(3rem, 8vh, 6rem)",
            }}
          >
            <p className="section-label">Connect</p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--fg)",
                maxWidth: "20ch",
              }}
            >
              If this kind of thinking would help, I&apos;m easy to reach.
            </h2>
          </div>
        </motion.div>

        {/* Contact cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--line)",
          }}
          className="connect-grid"
        >
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-cursor-hover
              style={{
                textDecoration: "none",
                background: "var(--bg)",
                padding: "clamp(2rem, 4vw, 3rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "clamp(1.25rem, 2.5vh, 1.75rem)",
                transition: "background 0.3s ease",
                minHeight: "clamp(200px, 22vh, 260px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#eef4ff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg)";
              }}
            >
              {/* Top: platform + handle */}
              <div>
                <p
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {c.platform}
                </p>
                <p className="small-text" style={{ color: "#1377ff" }}>{c.handle}</p>
              </div>

              {/* Middle: description */}
              <p className="body-text" style={{ fontSize: "0.875rem" }}>
                {c.description}
              </p>

              {/* Bottom: circular action button */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#1377ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "#fff",
                    transition: "background 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#afd1ff";
                    el.style.color = "#1377ff";
                    el.style.transform = "scale(1.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#1377ff";
                    el.style.color = "#fff";
                    el.style.transform = "scale(1)";
                  }}
                >
                  {c.action}
                </div>
                {/* Arrow */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 16L16 4M16 4H8M16 4v8" stroke="var(--fg-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .connect-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1199px) {
          .connect-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
