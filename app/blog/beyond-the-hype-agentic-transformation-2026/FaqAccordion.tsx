"use client";

import { useState } from "react";

export default function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)" }}>
      {faqs.map(({ q, a }, i) => {
        const open = openIndex === i;
        return (
          <div key={q} style={{ background: "var(--bg)" }}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "clamp(1.25rem, 3vw, 2rem)",
                background: "none",
                border: "none",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--fg)", letterSpacing: "-0.01em" }}>
                {q}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{
                  flexShrink: 0,
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M3 5.5L7 9.5L11 5.5" stroke="#1377ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: open ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "rgba(0, 0, 0, 0.72)",
                    padding: "0 clamp(1.25rem, 3vw, 2rem) clamp(1.25rem, 3vw, 2rem)",
                  }}
                >
                  {a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
