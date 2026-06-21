import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedImage from "@/components/FeaturedImage";

export const metadata = {
  title: "SocialRipple — Saksham Chauhan",
  description: "A side project. Working directly with the founder, just the two of us, across design, product, and growth.",
};

export default function SocialRipple() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "6rem" }}>

        {/* Hero */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}>
                <Link href="/#work" className="cs-back-link">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Work
                </Link>
                <span style={{ color: "var(--line)", fontSize: "0.75rem" }}>/</span>
                <span className="section-label">Strategy · 2024</span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--fg)",
                marginBottom: "clamp(1.25rem, 3vh, 2rem)",
              }}>
                Working directly with the founder, just the two of us, across design, product, and growth.
              </h1>

              <p style={{
                fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                maxWidth: "56ch",
              }}>
                SocialRipple — Early stage employee advocacy platform
              </p>
            </div>
          </div>
        </section>

        {/* Featured image — dashboard */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/sr-dashboard.png" alt="SocialRipple admin dashboard" />
        </section>

        {/* Body */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Context</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  SocialRipple is an early-stage employee advocacy platform. No team between us and no layer between deciding something and building it.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 7vh, 5rem)" }}>

                {/* Problem */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>The problem</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    At this size there is no design team, no product team, no growth team — there is just the founder and me, and between us we have to hold all three at once or they drift out of sync.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                    A positioning decision that does not show up in the design confuses the first users. A product decision made without thinking about growth builds something nobody finds. Someone has to keep the thread between all three, and at two people, that someone is whoever is in the room.
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>Decision and approach</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "2rem" }}>
                    Rather than wait for the company to be big enough to separate design, product, and growth into different people's jobs, the two of us worked across all three directly — because at this stage that was simply faster and more coherent than pretending the work could be neatly divided.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)" }}>
                    {[
                      {
                        n: "Product",
                        text: "Defining who the platform was actually for in its first version — narrow enough to be testable, before scope could widen into something unfocused.",
                      },
                      {
                        n: "Design",
                        text: "Shaping how that positioning actually showed up in what a first user would see and judge the product by.",
                      },
                      {
                        n: "Growth",
                        text: "Thinking from day one about how the right first users would actually find and trust the platform, rather than treating that as a problem for later.",
                      },
                    ].map(({ n, text }) => (
                      <div key={n} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                        <p style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1rem)", fontWeight: 500, color: "var(--fg)", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>{n}</p>
                        <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Timeline image */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/sr-timeline.png" alt="SocialRipple timeline" />
        </section>

        {/* Build and proof + outcome */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Build & proof</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2.5rem, 6vh, 4rem)" }}>

                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  The output of this stretch was not a single shipped feature — it was a coherent starting point across all three: a defined first audience and positioning, the early design decisions that reflected it, and a growth approach built into the product thinking from the start rather than added afterward.
                </p>

                <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", background: "#eef4ff", border: "1px solid rgba(19,119,255,0.15)" }}>
                  <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.1875rem)", lineHeight: 1.7, color: "var(--fg)", fontStyle: "italic" }}>
                    &ldquo;At two people, that coherence is the actual deliverable. Three good decisions made separately and never reconciled would have cost more to untangle later than the time spent keeping them aligned now.&rdquo;
                  </p>
                </div>

                <blockquote style={{ borderLeft: "2px solid #1377ff", paddingLeft: "1.5rem", margin: 0 }}>
                  <p style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.5, color: "var(--fg)" }}>
                    &ldquo;SocialRipple moved from an open set of possibilities to a defined starting point, with design, product, and the path to its first users all pointed the same direction.&rdquo;
                  </p>
                </blockquote>

              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">
              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Where it stands</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  Bootstrapped. In progress. Target: product market fit by end of 2026.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3.5rem)" }}>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  SocialRipple is a bootstrapped startup. With external development support, the product moved from concept into early build. Business development outreach is underway and the company has acquired three working clients, validating the core value proposition before committing to a larger build.
                </p>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  The goal for the remainder of 2026 is to reach product market fit: a defined audience, a repeatable acquisition channel, and a product experience that earns retention without needing manual intervention. The work now shifts from strategy and structure to iteration on what the first clients are actually using and where they stop.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--line)" }}>
                  {[
                    { n: "3", label: "Working clients" },
                    { n: "Active", label: "BD outreach" },
                    { n: "2026", label: "PMF target" },
                  ].map(({ n, label }) => (
                    <div key={label} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                      <p style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.04em", color: "#1377ff", marginBottom: "0.2rem" }}>{n}</p>
                      <p className="section-label">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back nav */}
        <section style={{ padding: "clamp(3rem, 6vh, 4rem) 0" }}>
          <div className="site-container">
            <Link href="/#work" className="cs-back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M2 7l4.5-4.5M2 7l4.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All work
            </Link>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .cs-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.8125rem;
          color: var(--fg-muted);
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .cs-back-link:hover { color: #1377ff; }
        @media (max-width: 767px) {
          .case-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
