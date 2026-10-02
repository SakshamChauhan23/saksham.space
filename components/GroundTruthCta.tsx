import Link from "next/link";

const SUBSTACK = "https://sakshamspace.substack.com/";

export default function GroundTruthCta({
  variant = "band",
  essaysLink = false,
}: {
  variant?: "band" | "actions";
  essaysLink?: boolean;
}) {
  const readings = essaysLink ? (
    <Link href="/blog" className="btn-primary">
      All Readings
    </Link>
  ) : null;

  const subscribe = (
    <a
      className={essaysLink ? "btn-ghost" : "btn-primary"}
      href={SUBSTACK}
      target="_blank"
      rel="noopener noreferrer"
    >
      Subscribe to Ground Truth
    </a>
  );

  const actions = (
    <div className="gt-cta-actions">
      {readings}
      {subscribe}
    </div>
  );

  return (
    <>
      {variant === "band" ? (
        <div className="gt-cta">
          <div className="gt-cta-copy">
            <p className="section-label">Ground Truth</p>
            <p className="gt-cta-line">
              Notes from the work, including the parts that do not go as planned.
            </p>
          </div>
          {actions}
        </div>
      ) : (
        actions
      )}
      <style>{`
        .gt-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem 2.5rem;
          border-top: 1px solid var(--line);
          padding-top: clamp(1.75rem, 4vh, 2.75rem);
        }
        .gt-cta-copy { max-width: 34ch; }
        .gt-cta-line {
          margin-top: 0.75rem;
          font-size: clamp(1.25rem, 2vw, 1.7rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.25;
          color: var(--fg);
        }
        .gt-cta-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem 1rem;
        }
      `}</style>
    </>
  );
}
