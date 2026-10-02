import { MetadataRoute } from "next";
import { posts, publishedPosts } from "@/data/writing";

const BASE = "https://saksham.space";
const NOW  = new Date("2026-06-21");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/about`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/resume`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/work/adaptive-assessment`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/work/admissions-at-scale`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/work/socialripple`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/work/recruitment-automation`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(publishedPosts()[0]?.date ?? NOW),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts
      .filter((post) => post.source === "site")
      .map((post) => ({
        url: `${BASE}${post.href}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      })),
  ];
}
