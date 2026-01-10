"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Contact() {
    return (
        <Section id="contact" className="relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Eyebrow */}
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent-muted text-accent">
                        Let&apos;s Connect
                    </span>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Ready to Build{" "}
                        <span className="gradient-text">Something Great</span>?
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted mb-10 max-w-xl mx-auto">
                        Whether you have a specific project in mind or just want to explore possibilities,
                        I&apos;d love to hear from you.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            href="mailto:hello@saksham.space"
                            size="lg"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send an Email
                        </Button>
                        <Button
                            href="https://cal.com"
                            variant="secondary"
                            size="lg"
                            external
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book a Call
                        </Button>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-12 border-t border-border"
                >
                    <p className="text-sm text-muted mb-6">Or find me on</p>
                    <div className="flex items-center justify-center gap-6">
                        {[
                            { name: "LinkedIn", href: "https://linkedin.com" },
                            { name: "GitHub", href: "https://github.com" },
                            { name: "Substack", href: "https://substack.com" },
                        ].map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                className="text-muted hover:text-foreground transition-colors font-medium"
                            >
                                {social.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
