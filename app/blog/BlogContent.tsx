"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  filterPosts,
  posts,
  publishedPosts,
  topics,
  type Post,
  type SourceFilter,
  type TopicFilter,
} from "@/data/writing";
import GroundTruthCta from "@/components/GroundTruthCta";

const SOURCES: { id: SourceFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "site", label: "On this site" },
  { id: "substack", label: "Substack" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

function readLabel(post: Post) {
  if (post.source === "site") return post.readTime ? `Read essay · ${post.readTime}` : "Read essay";
  return "Read on Substack";
}

function PostLink({
  post,
  className,
  children,
}: {
  post: Post;
  className: string;
  children: ReactNode;
}) {
  if (post.source === "substack") {
    return (
      <a href={post.href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={post.href} className={className}>
      {children}
    </Link>
  );
}

export default function BlogContent() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<TopicFilter>("All");
  const [source, setSource] = useState<SourceFilter>("all");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const current = Date.now();
    const due = posts.some((post) => {
      if (!post.publishAt) return false;
      const at = Date.parse(post.publishAt);
      return at <= current && at > now;
    });
    if (due) {
      setNow(current);
      return;
    }
    const upcoming = posts
      .map((post) => (post.publishAt ? Date.parse(post.publishAt) : Number.NaN))
      .filter((at) => at > current);
    if (upcoming.length === 0) return;
    const id = window.setTimeout(
      () => setNow(Date.now()),
      Math.min(...upcoming) - current + 1000,
    );
    return () => window.clearTimeout(id);
  }, [now]);

  const published = useMemo(() => publishedPosts(now), [now]);
  const filtered = useMemo(
    () => filterPosts(published, query, topic, source),
    [published, query, topic, source],
  );

  const filtering = query.trim().length > 0 || topic !== "All" || source !== "all";
  const featured = filtering ? undefined : filtered[0];
  const list = featured ? filtered.slice(1) : filtered;

  function reset() {
    setQuery("");
    setTopic("All");
    setSource("all");
  }

  return (
    <div className="blog-page">
      <style>{css}</style>

      <section className="blog-hero">
        <div className="site-container">
          <p className="section-label" style={{ marginBottom: "1.25rem" }}>
            Writing
          </p>
          <div className="blog-hero-grid">
            <h1 className="blog-title">Ground Truth</h1>
            <div className="blog-hero-copy">
              <p className="body-text">
                Every essay from the work. Building with AI, getting products adopted, and the judgment calls in between.
              </p>
              <GroundTruthCta variant="actions" />
            </div>
          </div>
        </div>
      </section>

      <div className="blog-controls">
        <div className="site-container">
          <div className="blog-search-row">
            <form
              className="blog-search-form"
              role="search"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="blog-search">
                <span className="sr-only">Search essays</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M16 16.5L20 20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search essays"
                  autoComplete="off"
                />
                {query && (
                  <button
                    type="button"
                    className="blog-search-clear"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </label>
            </form>
            <p className="small-text blog-count" aria-live="polite">
              {filtering ? `${filtered.length} of ${published.length}` : `${published.length} essays`}
            </p>
            {filtering && (
              <button type="button" className="blog-clear" onClick={reset}>
                Clear
              </button>
            )}
          </div>

          <div className="blog-filters">
            <div className="blog-filter-group">
              <span className="section-label">Show</span>
              <div className="blog-chips" role="group" aria-label="Filter by source">
                {SOURCES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="blog-chip"
                    aria-pressed={source === item.id}
                    onClick={() => setSource(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="blog-filter-group">
              <span className="section-label">Topic</span>
              <div className="blog-chips" role="group" aria-label="Filter by topic">
                <button
                  type="button"
                  className="blog-chip"
                  aria-pressed={topic === "All"}
                  onClick={() => setTopic("All")}
                >
                  All
                </button>
                {topics.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="blog-chip"
                    aria-pressed={topic === item}
                    onClick={() => setTopic(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog-results">
        <div className="site-container">
          {filtered.length === 0 ? (
            <div className="blog-empty">
              <p className="body-text">
                {query.trim()
                  ? `No essays match “${query.trim()}”.`
                  : "No essays match these filters."}
              </p>
              <button type="button" className="btn-ghost" onClick={reset}>
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {featured && (
                <PostLink post={featured} className="blog-featured">
                  <div className="blog-featured-kicker">
                    <span className="section-label">Latest</span>
                    <span className="section-label">{formatDate(featured.date)}</span>
                  </div>
                  <h2 className="blog-featured-title">{featured.title}</h2>
                  <p className="blog-featured-excerpt">{featured.excerpt}</p>
                  <div className="blog-row-foot">
                    <div className="blog-tags">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="section-label">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="blog-read">{readLabel(featured)} →</span>
                  </div>
                </PostLink>
              )}

              {list.length > 0 && (
                <div className="blog-list">
                  {list.map((post, index) => {
                    const number = String((featured ? index + 2 : index + 1)).padStart(2, "0");
                    return (
                      <PostLink key={post.id} post={post} className="blog-row">
                        <div className="blog-row-index">
                          <span className="section-label">{number}</span>
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>
                        <div>
                          <h2 className="blog-row-title">{post.title}</h2>
                          <p className="blog-row-excerpt">{post.excerpt}</p>
                          <div className="blog-row-foot">
                            <div className="blog-tags">
                              {post.tags.map((tag) => (
                                <span key={tag} className="section-label">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <span className="blog-read">{readLabel(post)} →</span>
                          </div>
                        </div>
                        <span className="blog-row-line" aria-hidden="true" />
                      </PostLink>
                    );
                  })}
                </div>
              )}
            </>
          )}

          <div className="blog-footnote">
            <GroundTruthCta />
          </div>
        </div>
      </section>
    </div>
  );
}

const css = `
  .blog-hero {
    padding: clamp(2.5rem, 7vh, 5.5rem) 0 clamp(2rem, 4vh, 3rem);
  }
  .blog-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(16rem, 0.8fr);
    gap: clamp(2rem, 6vw, 6rem);
    align-items: end;
  }
  .blog-title {
    font-size: clamp(3rem, 7vw, 6.25rem);
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 0.92;
    color: var(--fg);
  }
  .blog-hero-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding-bottom: 0.4rem;
  }
  .blog-hero-copy .body-text {
    max-width: 36ch;
  }

  .blog-controls {
    position: relative;
    z-index: 1;
    background: var(--bg);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 0.9rem 0 1rem;
  }
  .blog-search-row {
    display: flex;
    align-items: center;
    gap: 0.85rem 1rem;
    flex-wrap: wrap;
  }
  .blog-search-form {
    flex: 1 1 16rem;
    min-width: 0;
  }
  .blog-search {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0.65rem 1rem;
    background: #fff;
    color: var(--fg-muted);
  }
  .blog-search:focus-within {
    border-color: var(--secondary);
    color: var(--fg);
  }
  .blog-search input {
    border: 0;
    outline: 0;
    width: 100%;
    min-width: 0;
    font: inherit;
    font-size: 0.9375rem;
    background: transparent;
    color: var(--fg);
  }
  .blog-search input::-webkit-search-cancel-button {
    display: none;
  }
  .blog-search input::placeholder {
    color: var(--fg-muted);
  }
  .blog-search-clear {
    border: 0;
    background: transparent;
    color: var(--fg-muted);
    font: inherit;
    font-size: 1.15rem;
    line-height: 1;
    padding: 0 0.15rem;
  }
  .blog-count {
    white-space: nowrap;
  }
  .blog-clear {
    border: 0;
    background: transparent;
    color: var(--secondary);
    font: inherit;
    font-size: 0.8125rem;
    letter-spacing: 0.04em;
    padding: 0;
  }
  .blog-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.75rem;
    margin-top: 0.85rem;
  }
  .blog-filter-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem 0.65rem;
    min-width: 0;
    max-width: 100%;
  }
  .blog-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    min-width: 0;
  }
  .blog-chip {
    flex: 0 0 auto;
    border: 1px solid var(--line);
    background: transparent;
    color: var(--fg-muted);
    border-radius: 999px;
    padding: 0.4rem 0.85rem;
    font: inherit;
    font-size: 0.8125rem;
    letter-spacing: 0.01em;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }
  .blog-chip:hover {
    border-color: var(--fg);
    color: var(--fg);
  }
  .blog-chip[aria-pressed="true"] {
    background: var(--secondary);
    border-color: var(--secondary);
    color: #fff;
  }
  .blog-chip:focus-visible,
  .blog-search input:focus-visible,
  .blog-clear:focus-visible,
  .blog-featured:focus-visible,
  .blog-row:focus-visible {
    outline: 2px solid var(--secondary);
    outline-offset: 3px;
  }

  .blog-results {
    padding: clamp(1.75rem, 4vh, 3rem) 0 clamp(4rem, 10vh, 7rem);
  }
  .blog-featured {
    display: block;
    text-decoration: none;
    color: inherit;
    background: linear-gradient(135deg, #e8f1ff 0%, #f7f4ef 58%, #f7f7f5 100%);
    border-radius: 1.25rem;
    padding: clamp(1.5rem, 4vw, 3.25rem);
    margin-bottom: clamp(1.5rem, 4vh, 2.75rem);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }
  .blog-featured:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
  }
  .blog-featured-kicker {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
  .blog-featured-title {
    font-size: clamp(1.85rem, 3.4vw, 3rem);
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.08;
    max-width: 18em;
    color: var(--fg);
    transition: color 0.3s ease;
  }
  .blog-featured:hover .blog-featured-title {
    color: var(--secondary);
  }
  .blog-featured-excerpt {
    margin-top: 1rem;
    max-width: 52ch;
    font-size: clamp(0.975rem, 1.2vw, 1.125rem);
    line-height: 1.65;
    color: var(--fg-muted);
  }
  .blog-list {
    display: flex;
    flex-direction: column;
  }
  .blog-row {
    position: relative;
    display: grid;
    grid-template-columns: 8.75rem minmax(0, 1fr);
    gap: 0.75rem 2rem;
    padding: clamp(1.35rem, 3vh, 2rem) 0;
    border-top: 1px solid var(--line);
    text-decoration: none;
    color: inherit;
  }
  .blog-list .blog-row:last-child {
    border-bottom: 1px solid var(--line);
  }
  .blog-row-index {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding-top: 0.35rem;
  }
  .blog-row-index time {
    font-size: 0.8125rem;
    color: var(--fg-muted);
  }
  .blog-row-title {
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    font-weight: 400;
    letter-spacing: -0.025em;
    line-height: 1.2;
    color: var(--fg);
    transition: color 0.3s ease;
  }
  .blog-row:hover .blog-row-title {
    color: var(--secondary);
  }
  .blog-row-excerpt {
    margin-top: 0.45rem;
    max-width: 62ch;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--fg-muted);
  }
  .blog-row-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .blog-tags {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .blog-read {
    font-size: 0.8125rem;
    letter-spacing: 0.02em;
    color: var(--secondary);
    white-space: nowrap;
    transition: transform 0.3s ease;
  }
  .blog-featured:hover .blog-read,
  .blog-row:hover .blog-read {
    transform: translateX(4px);
  }
  .blog-row-line {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0;
    background: var(--secondary);
    transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .blog-row:hover .blog-row-line {
    width: 100%;
  }
  .blog-empty {
    padding: clamp(3rem, 8vh, 5rem) 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .blog-footnote {
    margin-top: 2rem;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 760px) {
    .blog-hero-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    .blog-title {
      font-size: clamp(2.75rem, 14vw, 4rem);
    }
    .blog-row {
      grid-template-columns: 1fr;
      gap: 0.55rem;
    }
    .blog-row-index {
      flex-direction: row;
      align-items: baseline;
      gap: 0.75rem;
      padding-top: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .blog-featured,
    .blog-row-title,
    .blog-read,
    .blog-row-line,
    .blog-chip {
      transition: none;
    }
  }
`;
