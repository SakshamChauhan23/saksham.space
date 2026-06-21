import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedImage from "@/components/FeaturedImage";

export const metadata = {
  title: "SocialRipple — Saksham Chauhan",
  description: "How Saksham Chauhan helped validate and build SocialRipple, an early stage employee advocacy platform — from competitor analysis and user interviews through to ICP definition, lead generation, and feature scoping.",
  openGraph: {
    title: "SocialRipple: Validating and Building an Employee Advocacy Platform",
    description: "Product validation, growth marketing, and product management for an early stage B2B SaaS. Testing demand before building, defining the first audience, and turning validated direction into a scoped product.",
    url: "https://saksham.space/work/socialripple",
  },
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
                <Link href="/#work" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "0.75rem", color: "var(--fg-muted)", textDecoration: "none",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Work
                </Link>
                <span style={{ color: "var(--line)", fontSize: "0.75rem" }}>/</span>
                <span className="section-label">Strategy · 2024–2025</span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--fg)",
                marginBottom: "clamp(1.25rem, 3vh, 2rem)",
              }}>
                Validating and building an employee advocacy platform.
              </h1>

              <p style={{
                fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                maxWidth: "56ch",
              }}>
                A side quest, built with the founder alongside my day job. Product validation, growth marketing, and product management for SocialRipple — an early stage B2B SaaS employee advocacy platform.
              </p>
            </div>
          </div>
        </section>

        {/* Featured image — dashboard */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/sr-dashboard.png" alt="SocialRipple admin dashboard" />
        </section>

        {/* Stats */}
        <section style={{ padding: "clamp(2.5rem, 6vh, 4rem) 0" }}>
          <div className="site-container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--line)",
            }} className="stats-grid">
              {[
                { stat: "3", label: "Working clients acquired" },
                { stat: "Active", label: "BD outreach" },
                { stat: "2026", label: "PMF target" },
              ].map(({ stat, label }) => (
                <div key={label} style={{ background: "var(--bg)", padding: "clamp(1.5rem, 4vw, 3rem)" }}>
                  <p style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, letterSpacing: "-0.04em", color: "#1377ff", marginBottom: "0.25rem" }}>
                    {stat}
                  </p>
                  <p className="section-label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What it is */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Context</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  A two-person effort at the stage where the foundational decisions are still open.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3rem)" }}>
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>What SocialRipple is</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    SocialRipple is an early stage employee advocacy platform — software that helps a company&apos;s own employees share and amplify its content, turning an internal team into a trusted distribution channel.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                    I work on it as a side quest outside my main role, alongside its founder{" "}
                    <a href="https://www.linkedin.com/in/tivary/" target="_blank" rel="noopener noreferrer" style={{ color: "#1377ff", textDecoration: "none", borderBottom: "1px solid rgba(19,119,255,0.3)" }}>
                      Mayank Tivary
                    </a>
                    . It is a deliberately small, two-person effort at the stage where the foundational decisions are still open — which is exactly why being close to the work is valuable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0", borderTop: "1px solid var(--line)" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>The problem</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3rem)" }}>
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>Building the wrong thing with conviction</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    Before a product has real users, the risk is not poor execution. It is building the wrong thing with conviction. An early B2B SaaS idea can look promising on paper and still fail because the demand was assumed rather than tested, the first audience was too broad to serve well, or the team built features before knowing which ones mattered.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                    SocialRipple needed answers to three questions before committing serious time and code.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)" }}>
                  {[
                    { n: "01", q: "Is the market demand real?" },
                    { n: "02", q: "Who is the platform actually for first?" },
                    { n: "03", q: "What is worth building before anything else?" },
                  ].map(({ n, q }) => (
                    <div key={n} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)", display: "flex", gap: "1.5rem", alignItems: "baseline" }}>
                      <span className="section-label" style={{ color: "#1377ff", flexShrink: 0 }}>{n}</span>
                      <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.7, color: "var(--fg)" }}>{q}</p>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  My work has been about answering those questions with evidence rather than assumption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product validation */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0", borderTop: "1px solid var(--line)" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Product validation</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  Testing the opportunity before building.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3rem)" }}>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  The first job was to find out whether the opportunity was real and where the platform could genuinely differentiate. The purpose throughout was to replace conviction with evidence, so that what got built next rested on what the market actually wanted, not on what we hoped it wanted.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)" }}>
                  {[
                    {
                      n: "Competitor analysis",
                      text: "Mapped how existing employee advocacy tools position themselves and where the gaps were — finding the space a new entrant could own rather than where it would be competing on features alone.",
                    },
                    {
                      n: "User interviews",
                      text: "Talked to target buyers — typically HR and marketing decision-makers — to understand how they actually think about employee advocacy and what they find missing in current options. Not what they said they wanted, but what the friction in their current workflows revealed.",
                    },
                    {
                      n: "Market study",
                      text: "Sized the opportunity and pressure-tested whether the demand was strong enough to justify building. A market that looks large can still be wrong if the buyers are hard to reach or the problem is not felt sharply enough to drive purchase decisions.",
                    },
                  ].map(({ n, text }) => (
                    <div key={n} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--fg)", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>{n}</p>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline image */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/sr-timeline.png" alt="SocialRipple product timeline" />
        </section>

        {/* Growth marketing */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0", borderTop: "1px solid var(--line)" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Growth marketing</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  Making the first users real.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3rem)" }}>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  Validation only counts if it comes from real market response, so the second area of work was growth. Instead of guessing whether the positioning resonated, we could watch how real prospects responded to it.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)" }}>
                  {[
                    {
                      n: "ICP definition",
                      text: "Narrowed the first audience to a segment specific enough to be reached and served well, rather than a broad description that could justify building almost anything. A specific first audience is a forcing function — it makes the product decisions clearer and the marketing more efficient.",
                    },
                    {
                      n: "Lead generation and campaigns",
                      text: "Set up and ran early lead generation, putting the proposition in front of real prospects so that the signal we learned from came from the market rather than from internal opinion. This made the validation concrete.",
                    },
                  ].map(({ n, text }) => (
                    <div key={n} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--fg)", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>{n}</p>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product management */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0", borderTop: "1px solid var(--line)" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Product management</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  Turning decisions into something buildable.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3rem)" }}>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  The third area was translating validated direction into a buildable product. I worked on defining the feature set — deciding what belonged in the first version and what should wait until there was real signal to justify it.
                </p>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  I worked directly with the developers to turn those decisions into something that could actually be built. At two people, there is no layer between deciding what to build and building it, which keeps the loop between learning and shipping short.
                </p>

                <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", background: "#eef4ff", border: "1px solid rgba(19,119,255,0.15)" }}>
                  <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.1875rem)", lineHeight: 1.7, color: "var(--fg)", fontStyle: "italic" }}>
                    &ldquo;At two people, there is no layer between deciding what to build and building it. That is a constraint and an advantage at the same time.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where it stands */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0", borderTop: "1px solid var(--line)" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">
              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Where it stands</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  Bootstrapped. Ongoing. Target: product market fit by end of 2026.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3.5rem)" }}>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  SocialRipple is ongoing rather than finished. The work so far has turned an open opportunity into a tested, defined direction: a validated sense of demand, a specific first audience, a positioning that has been put in front of real prospects, and a scoped set of features being built against it.
                </p>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  The goal we are working toward this quarter is reaching product market fit — the point where the platform is solving a real problem well enough that the right customers adopt and stay. It is an ambition we are actively building toward, not a claim of arrival.
                </p>

                <blockquote style={{ borderLeft: "2px solid #1377ff", paddingLeft: "1.5rem", margin: 0 }}>
                  <p style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.5, color: "var(--fg)" }}>
                    &ldquo;The work so far has turned an open opportunity into a tested, defined direction. Three working clients. Active BD. Building toward PMF.&rdquo;
                  </p>
                </blockquote>

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

                <a
                  href="https://www.socialripple.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    fontSize: "0.8125rem", fontWeight: 500, color: "#1377ff",
                    textDecoration: "none", letterSpacing: "0.04em",
                    borderBottom: "1px solid rgba(19,119,255,0.3)",
                    paddingBottom: "0.125rem", width: "fit-content",
                  }}
                >
                  See SocialRipple
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
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
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
