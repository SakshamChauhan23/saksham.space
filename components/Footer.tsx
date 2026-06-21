"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "2rem 0",
      }}
    >
      <div
        className="site-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p className="small-text">
          &copy; {new Date().getFullYear()} Saksham Chauhan
        </p>
        <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { label: "Work", href: "#work" },
            { label: "Writing", href: "#writing" },
            { label: "About", href: "/about" },
            { label: "Connect", href: "#connect" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="underline-link small-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
