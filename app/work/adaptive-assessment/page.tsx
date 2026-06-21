import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedImage from "@/components/FeaturedImage";

export const metadata = {
  title: "Adaptive Assessment System — Saksham Chauhan",
  description: "Real time difficulty that adapts to each learner. Built for NavGurukul, reaching 3,000+ learners with 85% adoption.",
};

export default function AdaptiveAssessment() {
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
                <span className="section-label">AI & Product · 2025</span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--fg)",
                marginBottom: "clamp(1.25rem, 3vh, 2rem)",
              }}>
                Real time difficulty that adapts to each learner.
              </h1>

              <p style={{
                fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                maxWidth: "56ch",
              }}>
                NavGurukul, March 2025 to present
              </p>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ padding: "clamp(2.5rem, 6vh, 4rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--line)" }} className="stats-grid">
              {[
                { stat: "3,000+", label: "Learners reached" },
                { stat: "85%",    label: "Adoption rate" },
                { stat: "35%",    label: "Mastery improvement" },
                { stat: "60%",    label: "Less eval time" },
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

        {/* Featured image 1 */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/zuvy-eval.png" alt="Zuvy adaptive evaluation interface" />
        </section>

        {/* Body */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              {/* Sticky label */}
              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Context</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  NavGurukul serves learners from low income and first generation backgrounds across India, including many neurodivergent learners, often on entry level devices and unreliable connections.
                </p>
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 7vh, 5rem)" }}>

                {/* Problem */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>The problem</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    A fixed difficulty test fails in two directions. Learners who are ahead disengage because questions are too easy to hold their attention. Learners who are behind hit a wall they cannot get past and stop trying.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    Multiple choice alone also cannot judge reasoning — only whether a final answer matches. This misses learners who think correctly but make a small execution error, and rewards learners who guess well.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                    The deeper constraint was infrastructural. Whatever was built had to run for users on 2G networks and low end devices, which ruled out any design that depended on a constant connection or heavy client side processing.
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>Decision and approach</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "2rem" }}>
                    The system needed to do three things at once: adapt difficulty within a handful of questions rather than after a full test cycle; evaluate multiple answer types on reasoning rather than only correctness; and keep working when the connection does not.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)", marginBottom: "2rem" }}>
                    {[
                      {
                        n: "Adaptive logic",
                        text: "Starts each learner at mid level difficulty, then moves up or down by one level per question based on performance. Topic rotation is enforced so the system doesn't over index on one area, and deduplication ensures no question repeats within a session. Difficulty correction happens within three questions.",
                      },
                      {
                        n: "Answer evaluation",
                        text: "Answers are routed by type. Multiple choice is scored instantly. Code submissions go through layered analysis covering syntax, logic, and efficiency rather than output matching alone. Open ended responses are evaluated against a rubric for conceptual understanding, using Gemini 2.5 Pro, with Perplexity Sonar validating generated content against live sources.",
                      },
                      {
                        n: "Offline first",
                        text: "Answers are stored locally and synced in the background when connectivity returns. The next few questions are prefetched and cached ahead of time, so a dropped connection does not interrupt the assessment itself.",
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

        {/* Featured image 2 */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/zuvy-eval2.png" alt="Zuvy evaluation detail view" />
        </section>

        {/* Build and proof + outcome */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Build & proof</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 7vh, 5rem)" }}>

                <div>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    The result is a system that evaluates answers in well under a second and returns feedback in under two seconds end to end, run on cloud infrastructure sized to serve thousands of concurrent learners at a cost proportionate to a nonprofit's budget rather than an enterprise one.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "2rem" }}>
                    Question generation, evaluation, and feedback synthesis are handled as separate, independently scaling components, so a spike in one does not degrade the others.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "var(--line)", marginBottom: "2.5rem" }} className="proof-grid">
                    {[
                      { n: "&lt;1s",    label: "Answer evaluation time" },
                      { n: "&lt;2s",    label: "End to end feedback" },
                      { n: "3,000+",   label: "Learners on Zuvy Finishing School" },
                      { n: "2026",     label: "India AI Impact Summit casebook" },
                    ].map(({ n, label }) => (
                      <div key={label} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                        <p style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.04em", color: "#1377ff", marginBottom: "0.2rem" }}
                          dangerouslySetInnerHTML={{ __html: n }} />
                        <p className="section-label">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing */}
                <blockquote style={{ borderLeft: "2px solid #1377ff", paddingLeft: "1.5rem", margin: 0 }}>
                  <p style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.5, color: "var(--fg)" }}>
                    &ldquo;Assessment stopped assuming a stable connection, a capable device, and a single right way to think through a problem. Built for the hardest case, it ended up working better for everyone it reached.&rdquo;
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
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Outcome</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  Work in progress. Prototype validated, development ongoing.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3.5rem)" }}>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  The prototype demonstrated that personalised difficulty can be delivered at scale without any manual configuration per learner. Difficulty routing adjusts automatically based on performance signals, removing the need for a curriculum team to pre-assign tiers or manually review individual learner paths.
                </p>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  Completion rates in testing improved as learners no longer hit difficulty walls that were calibrated for an average rather than for them. The AI handled tier based question routing end to end, which reduced the evaluator workload that previously came from reviewing submissions that were either too simple or too far out of reach to be meaningful.
                </p>
                <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", background: "#eef4ff", border: "1px solid rgba(19,119,255,0.15)" }}>
                  <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.1875rem)", lineHeight: 1.7, color: "var(--fg)" }}>
                    The system is still being developed. What the prototype confirmed is that the core premise holds: adaptive difficulty is achievable at the infrastructure constraints of the learners it is built for.
                  </p>
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
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proof-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
