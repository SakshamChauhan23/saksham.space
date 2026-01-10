"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";

const steps = [
    {
        number: "01",
        title: "Scope & Strategy",
        duration: "Week 1",
        items: [
            "Problem framing & validation",
            "MVP definition & prioritization",
            "Tech + no-code stack decisions",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Build & Iterate",
        duration: "Weeks 2–4",
        items: [
            "Rapid prototyping",
            "Weekly demos & reviews",
            "Feedback-driven iteration",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Launch & Handoff",
        duration: "Weeks 5–6",
        items: [
            "Production deployment",
            "Documentation & guides",
            "Analytics + roadmap planning",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
];

export default function Process() {
    return (
        <Section id="process">
            <SectionHeader
                eyebrow="Methodology"
                title="How I Work"
                description="A structured, transparent process designed to reduce risk and maximize speed. You're never in the dark."
            />

            <div className="relative">
                {/* Connecting Line - Desktop */}
                <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Step Card */}
                            <div className="relative p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-colors group">
                                {/* Number Badge */}
                                <div className="absolute -top-4 left-6 px-3 py-1 bg-accent text-white text-sm font-bold rounded-full">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="mt-4 mb-6 text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-foreground mb-1">
                                        {step.title}
                                    </h3>
                                    <span className="text-sm text-accent font-medium">
                                        {step.duration}
                                    </span>
                                </div>

                                {/* Items */}
                                <ul className="space-y-2">
                                    {step.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + itemIndex * 0.1 }}
                                            className="flex items-start gap-2 text-muted text-sm"
                                        >
                                            <svg
                                                className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline Arrow - Mobile */}
                <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-border to-accent/50" />
            </div>
        </Section>
    );
}
