"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";
import Card from "@/components/Card";

const projects = [
    {
        title: "Rouze.ai",
        tag: "Build in Public",
        description: "AI-powered employee advocacy platform enabling companies to amplify their brand through authentic employee voices on LinkedIn.",
        href: "/portfolio/rouze",
    },
    {
        title: "Internal CRM System",
        tag: "Operations",
        description: "Custom CRM built with Lovable + Supabase that reduced operational time by 65% and automated routine data management.",
        href: "/portfolio/crm",
    },
    {
        title: "Workflow Automation Platform",
        tag: "Automation",
        description: "End-to-end workflow automation solution that automated 60%+ of manual processes across multiple business functions.",
        href: "/portfolio/automation",
    },
    {
        title: "Learning & Admissions System",
        tag: "EdTech",
        description: "Comprehensive platform managing student admissions and learning pathways, serving 1,000+ users with intuitive interfaces.",
        href: "/portfolio/edtech",
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-card/50">
            <SectionHeader
                eyebrow="Portfolio"
                title="Products I've Built"
                description="Real products, real outcomes. Here's a selection of projects where I've taken ideas from concept to launch."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tag={project.tag}
                        href={project.href}
                        index={index}
                    />
                ))}
            </div>

            {/* View All CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12"
            >
                <a
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors group"
                >
                    View all case studies
                    <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                </a>
            </motion.div>
        </Section>
    );
}
