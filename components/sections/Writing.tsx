"use client";

import Link from "next/link";
import Section, { SectionHeader } from "@/components/Section";
import Button from "@/components/Button";

const articles = [
    {
        title: "Why I stopped treating APIs as just technical details",
        description: "Understanding APIs as products themselves changed how I approach integration and platform strategy.",
        meta: "Substack",
        tags: ["Product Strategy", "Technical PM", "API"],
        href: "https://indianproductguy.substack.com/p/why-i-stopped-treating-apis-as-just"
    },
    {
        title: "Here's How I Automated 8 Hours of Recruiter Busywork",
        description: "A practical breakdown of building an end-to-end automation suite for agency recruiters using No-Code tools.",
        meta: "Substack",
        tags: ["Automation", "No-code", "Operations"],
        href: "https://indianproductguy.substack.com/p/heres-how-i-automated-8-hours-of"
    }
];

export default function Writing() {
    return (
        <Section>
            <SectionHeader
                eyebrow="Insights"
                title="Thoughts & Learnings"
                description="Deep dives into product strategy, technical execution, and the lessons learned from building."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
                {articles.map((article, index) => (
                    <Link
                        key={index}
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-card border border-border rounded-3xl p-8 hover:border-accent/40 transition-all hover:-translate-y-1 h-full flex flex-col"
                    >
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {article.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-accent/5 text-accent">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                            {article.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                            <span className="text-xs font-medium text-muted-foreground">{article.meta}</span>
                            <span className="text-xs font-bold text-foreground group-hover:translate-x-1 transition-transform">
                                Read on Substack →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center">
                <Button href="/blog" variant="secondary">
                    View All
                </Button>
            </div>
        </Section>
    );
}
