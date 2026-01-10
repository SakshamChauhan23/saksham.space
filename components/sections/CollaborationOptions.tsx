"use client";

import Section, { SectionHeader } from "@/components/Section";
import Button from "@/components/Button";

const options = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Hire Me as Product Manager",
        description: "For high-growth tech companies building AI or B2B SaaS products.",
        points: [
            "Product strategy & roadmap ownership",
            "Cross-functional leadership",
            "Technical fluency & execution depth",
            "Strong business acumen"
        ],
        cta: "View Full Background",
        href: "/about"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: "Strategic Product Consulting",
        description: "Fixed-scope engagements for critical product decisions.",
        points: [
            "Market opportunity assessment",
            "Strategic roadmap development",
            "Go-to-market planning",
            "Product-market fit measurement"
        ],
        cta: "Discuss Your Product Challenge",
        href: "#contact"
    }
];

export default function CollaborationOptions() {
    return (
        <Section className="bg-card/30">
            <SectionHeader
                eyebrow="Collaboration"
                title="How We Work Together"
                description="Two ways to engage, depending on what you need."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                {options.map((option, index) => (
                    <div key={index} className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-accent/40 transition-colors flex flex-col h-full group">
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-300">
                            {option.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                        <p className="text-base text-muted mb-8">{option.description}</p>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {option.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 text-left">
                                    <span className="text-accent mt-1">✓</span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <Button href={option.href} variant="outline" className="w-full justify-center">
                            {option.cta}
                        </Button>
                    </div>
                ))}
            </div>
        </Section>
    );
}
