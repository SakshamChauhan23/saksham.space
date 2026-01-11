"use client";

import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function FinalCTA() {
    return (
        <Section className="bg-card border-t border-border">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-bold mb-6" style={{ fontSize: "var(--fluid-h2)" }}>
                    Let&apos;s Build Something Meaningful
                </h2>

                <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
                    Whether you&apos;re hiring a Product Manager, exploring co-founder partnerships,
                    or need strategic product thinking for a critical decision, I&apos;d like to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button href="#contact" size="lg">
                        Book a Call
                    </Button>

                </div>

                <div className="flex items-center justify-center gap-2 text-muted">
                    <span>Or connect with me on:</span>
                    <div className="flex gap-4 ml-2">
                        <Link href="https://www.linkedin.com/in/sakshamchauhan/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">LinkedIn ↗</Link>
                        <Link href="https://indianproductguy.substack.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">Substack ↗</Link>
                        <Link href="https://x.com/SakshamCh2302" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">X (Twitter) ↗</Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}
