"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";

// Real Substack posts
const allPosts = [
    {
        id: "1",
        title: "Why I stopped treating APIs as just technical details",
        excerpt: "Understanding APIs as products themselves changed how I approach integration and platform strategy.",
        date: "2024-12-15",
        readTime: "Substack",
        tags: ["Product Strategy", "Technical PM", "API"],
        substackUrl: "https://indianproductguy.substack.com/p/why-i-stopped-treating-apis-as-just",
        featured: true,
    },
    {
        id: "2",
        title: "Here's How I Automated 8 Hours of Recruiter Busywork",
        excerpt: "A practical breakdown of building an end-to-end automation suite for agency recruiters using No-Code tools.",
        date: "2024-11-28",
        readTime: "Substack",
        tags: ["Automation", "No-code", "Operations"],
        substackUrl: "https://indianproductguy.substack.com/p/heres-how-i-automated-8-hours-of",
        featured: true,
    }
];

const allTags = ["All", "Product Strategy", "Technical PM", "API", "Automation", "No-code", "Operations", "Startup", "GTM"];

export default function BlogContent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");

    // Filter posts
    const filteredPosts = useMemo(() => {
        return allPosts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag]);

    return (
        <>
            {/* Hero */}
            <Section className="pt-16 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent-muted text-accent">
                        Insights
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Thoughts & <span className="gradient-text">Learnings</span>
                    </h1>
                    <p className="text-lg text-muted max-w-2xl">
                        Deep dives into product strategy, technical execution, and the lessons learned from building.
                        Read full articles on my Substack.
                    </p>
                </motion.div>
            </Section>

            {/* Search & Filter */}
            <Section className="py-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                        />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {allTags.slice(0, 5).map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${selectedTag === tag
                                    ? "bg-accent text-white"
                                    : "bg-card border border-border text-muted hover:border-accent/50 hover:text-foreground"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Posts Grid */}
            <Section className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredPosts.map((post, index) => (
                            <motion.a
                                key={post.id}
                                href={post.substackUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group block p-8 bg-card rounded-3xl border border-border hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded bg-accent/5 text-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-3">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                                    <span className="text-xs font-medium text-muted-foreground">
                                        {post.readTime}
                                    </span>
                                    <div className="flex items-center gap-1 text-xs font-bold text-foreground group-hover:translate-x-1 transition-transform">
                                        Read on Substack →
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-muted">No posts found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedTag("All"); }}
                            className="text-accent font-medium mt-2 hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </Section>
        </>
    );
}
