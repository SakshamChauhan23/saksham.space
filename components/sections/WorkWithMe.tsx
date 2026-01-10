"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";
import Button from "@/components/Button";

const workOptions = [
    {
        title: "Hire Me",
        description: "Looking for a PM with execution depth? I bring product strategy, technical fluency, and cross-functional leadership.",
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        cta: "View Resume",
        href: "/resume.pdf",
        color: "from-blue-500/10 to-cyan-500/10",
    },
    {
        title: "Partner With Me",
        description: "Have a vision but need a co-pilot? I partner with founders to co-build products from ideation to launch.",
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        cta: "Get in Touch",
        href: "#contact",
        color: "from-purple-500/10 to-pink-500/10",
    },
    {
        title: "Build Your Product",
        description: "Got an idea? I'll turn it into a working MVP in 30-45 days using AI, no-code, and pragmatic engineering.",
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        cta: "View Services",
        href: "/services",
        color: "from-accent/10 to-violet-500/10",
        featured: true,
    },
];

export default function WorkWithMe() {
    return (
        <Section id="work-with-me" className="bg-card/50">
            <SectionHeader
                eyebrow="Collaboration"
                title="Work With Me"
                description="Multiple ways to engage based on your needs. Whether you're hiring, partnering, or building—let's talk."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {workOptions.map((option, index) => (
                    <motion.div
                        key={option.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        className={`relative p-8 rounded-2xl border transition-all duration-300 group ${option.featured
                            ? "bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30 hover:border-accent"
                            : "bg-card border-border hover:border-accent/30"
                            }`}
                    >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        {/* Featured Badge */}
                        {option.featured && (
                            <div className="absolute -top-3 right-6 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                                Popular
                            </div>
                        )}

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className={`mb-6 ${option.featured ? "text-accent" : "text-muted group-hover:text-accent"} transition-colors`}>
                                {option.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-semibold text-foreground mb-3">
                                {option.title}
                            </h3>
                            <p className="text-muted mb-8 leading-relaxed">
                                {option.description}
                            </p>

                            {/* CTA */}
                            <Button
                                href={option.href}
                                variant={option.featured ? "primary" : "secondary"}
                                size="sm"
                            >
                                {option.cta}
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
