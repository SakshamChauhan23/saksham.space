"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";
import Button from "@/components/Button";
import { projects } from "@/data/projects";

export default function SelectedWork() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <Section className="bg-card/30">
            <SectionHeader
                eyebrow="Selected Work"
                title="From Opportunity to Impact"
                description="A deep dive into how I identify problems, formulate strategy, and ship products that solve them."
            />

            <div className="space-y-8 mt-16 max-w-5xl mx-auto">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 ${expandedId === project.id
                            ? "border-accent/50 shadow-2xl scale-[1.01]"
                            : "hover:border-accent/30 hover:shadow-lg"
                            }`}
                    >
                        {/* Card Header (Always Visible) */}
                        <div
                            className="p-8 md:p-10 cursor-pointer group"
                            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-accent/10 text-accent border border-accent/20">
                                            {project.tag}
                                        </span>
                                        <span className="text-xs font-medium text-muted">{project.hook}</span>
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors" style={{ fontSize: "var(--fluid-h3)" }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-muted font-medium">{project.subtitle}</p>
                                </div>

                                <div className="shrink-0">
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className={`pointer-events-none ${expandedId === project.id ? "bg-accent text-foreground border-accent" : ""}`}
                                    >
                                        {expandedId === project.id ? "View Less" : "View Case Study"}
                                    </Button>
                                </div>
                            </div>

                            {/* High Level Summary Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-border">
                                <div>
                                    <h4 className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> The Problem
                                    </h4>
                                    <p className="text-sm text-foreground/80 leading-relaxed">{project.summary.problem}</p>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> The Solution
                                    </h4>
                                    <p className="text-sm text-foreground/80 leading-relaxed">{project.summary.solution}</p>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> The Impact
                                    </h4>
                                    <p className="text-sm font-medium text-accent leading-relaxed">{project.summary.impact}</p>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                            {expandedId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-accent/5"
                                >
                                    <div className="p-8 md:p-10 border-t border-accent/10">
                                        {/* Row 1: Strategy & Execution */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                                            {/* Left Col: Strategy */}
                                            <div className="bg-background/80 p-8 rounded-2xl border border-border/50 h-full">
                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-accent/20 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                    Strategic Discovery
                                                </h4>
                                                <div className="space-y-6">
                                                    <div>
                                                        <span className="text-xs font-bold text-muted block mb-1">Context</span>
                                                        <p className="text-sm text-foreground/90 leading-relaxed">{project.details.context}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-muted block mb-1">The Opportunity</span>
                                                        <p className="text-sm text-foreground/90 leading-relaxed">{project.details.opportunity}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-accent block mb-1">The Strategic Bet</span>
                                                        <p className="text-sm text-foreground font-medium leading-relaxed">{project.details.bet}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Col: Execution */}
                                            <div className="bg-background/80 p-8 rounded-2xl border border-border/50 h-full">
                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-accent/20 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                    Execution & Delivery
                                                </h4>
                                                <div className="space-y-6">
                                                    <div>
                                                        <span className="text-xs font-bold text-muted block mb-2">Key Decisions</span>
                                                        <ul className="space-y-2">
                                                            {project.details.decisions.map((decision, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/90 leading-relaxed">
                                                                    <span className="text-accent mt-1.5 text-[10px]">●</span>
                                                                    {decision}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="pt-4 border-t border-border/50 mt-auto">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <span className="text-xs font-bold text-muted block mb-1">Tech Stack</span>
                                                                <p className="text-sm text-foreground/90">{project.details.stack}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs font-bold text-muted block mb-1">Primary Metric</span>
                                                                <p className="text-sm text-foreground/90">{project.details.metrics}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 2: Impact & Learnings (Full Width) */}
                                        <div className="bg-background/80 p-8 rounded-2xl border border-border/50">
                                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-accent/20 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                Impact & Learnings
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <div>
                                                    <span className="text-xs font-bold text-muted block mb-3">Business Results</span>
                                                    <ul className="space-y-2">
                                                        {project.impactDetails.results.map((res, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/90 leading-relaxed">
                                                                <span className="text-green-500 mt-1.5 text-[10px]">●</span>
                                                                {res}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-muted block mb-3">Product-Market Fit Signal</span>
                                                    <p className="text-sm text-foreground/90 leading-relaxed border-l-2 border-accent/30 pl-4 italic">
                                                        "{project.impactDetails.pmf}"
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-muted block mb-3">What I Learned</span>
                                                    <p className="text-sm text-foreground/90 leading-relaxed">
                                                        {project.impactDetails.learnings}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
