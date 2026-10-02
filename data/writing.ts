export type WritingSource = "site" | "substack";

export const topics = ["AI", "Product", "GTM", "Operations", "Automation"] as const;

export type Topic = (typeof topics)[number];
export type TopicFilter = "All" | Topic;
export type SourceFilter = "all" | WritingSource;

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  tags: Topic[];
  href: string;
  source: WritingSource;
  /** ISO timestamp. The essay stays off the archive until this time. */
  publishAt?: string;
};

export const posts: Post[] = [
  {
    id: "coca-cola-ai",
    title: "The Real Reason Coca-Cola's AI Works (And a Framework Any Team Can Use)",
    excerpt:
      "AI did not create the consistency. It enforced a consistency already chosen.",
    date: "2026-10-02",
    tags: ["AI", "Product"],
    href: "https://sakshamspace.substack.com/p/the-real-reason-coca-colas-ai-works",
    source: "substack",
  },
  {
    id: "build-the-shortcut",
    title: "Build the Shortcut. Just Do Not Sell It as the Highway.",
    excerpt:
      "Two days before an industry expo, the platform would not be ready. A shortcut can deliver the visitor experience. It cannot be sold as the product.",
    date: "2026-09-16",
    tags: ["Product", "GTM"],
    href: "https://sakshamspace.substack.com/p/build-the-shortcut-just-do-not-sell",
    source: "substack",
  },
  {
    id: "buying-a-tool",
    title: "Why Buying a Tool Does Not Change How Your Team Works",
    excerpt:
      "Buying software is a transaction. Changing how a team works is not. Why most tools fail to stick, and the order that actually fixes it.",
    date: "2026-07-27",
    readTime: "6 min",
    tags: ["Product", "Operations"],
    href: "/blog/why-buying-a-tool-does-not-change-how-your-team-works",
    source: "site",
  },
  {
    id: "beyond-the-hype",
    title: "Beyond the Hype: What Actually Separates AI Winners From Everyone Else in 2026",
    excerpt:
      "Eighty eight percent of companies use AI. Six percent see real profit from it. The gap is strategy and workflow design, not the model.",
    date: "2026-07-12",
    readTime: "10 min",
    tags: ["AI"],
    href: "/blog/beyond-the-hype-agentic-transformation-2026",
    source: "site",
  },
  {
    id: "using-ai-not-benefiting",
    title: "Your Company Is Using AI. It Is Not Benefiting From It.",
    excerpt:
      "Here is a number worth sitting with: 88% of organisations are actively experimenting with AI.",
    date: "2026-06-29",
    tags: ["AI"],
    href: "https://sakshamspace.substack.com/p/your-company-is-using-ai-it-is-not",
    source: "substack",
  },
  {
    id: "the-room-decides",
    title: "The room decides without you",
    excerpt: "Why most GTM motions are built for the wrong person.",
    date: "2026-06-09",
    tags: ["GTM"],
    href: "https://sakshamspace.substack.com/p/the-room-decides-without-you",
    source: "substack",
  },
  {
    id: "ground-truth-001",
    title: "Everyone Is Building With AI. Nobody Is Talking About What Happens Next.",
    excerpt: "Open any feed right now and you will find someone launching something.",
    date: "2026-03-31",
    tags: ["AI"],
    href: "https://sakshamspace.substack.com/p/ground-truth-issue-001-everyone-is",
    source: "substack",
  },
  {
    id: "apis-as-products",
    title: 'Why I Stopped Treating APIs as "Just Engineering Work"',
    excerpt:
      "How do you design a system that lets software components talk to each other without exposing sensitive data or collapsing under high traffic?",
    date: "2026-01-01",
    tags: ["Product"],
    href: "https://sakshamspace.substack.com/p/why-i-stopped-treating-apis-as-just",
    source: "substack",
  },
  {
    id: "eight-hours",
    title: "Here's how I automated 8 hours of daily work in one weekend",
    excerpt:
      "While everyone is talking about ChatGPT, this is about Claude MCPs and eight hours of daily work.",
    date: "2026-01-01",
    tags: ["Automation", "AI"],
    href: "https://sakshamspace.substack.com/p/heres-how-i-automated-8-hours-of",
    source: "substack",
  },
];

export function publishedPosts(now = Date.now()): Post[] {
  return posts.filter((post) => {
    if (!post.publishAt) return true;
    const at = Date.parse(post.publishAt);
    return Number.isNaN(at) || at <= now;
  });
}

export function filterPosts(
  list: readonly Post[],
  query: string,
  topic: TopicFilter,
  source: SourceFilter,
): Post[] {
  const q = query.trim().toLowerCase();
  return list.filter((post) => {
    const matchesQuery =
      q.length === 0 ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.toLowerCase().includes(q));
    const matchesTopic = topic === "All" || post.tags.includes(topic);
    const matchesSource = source === "all" || post.source === source;
    return matchesQuery && matchesTopic && matchesSource;
  });
}
