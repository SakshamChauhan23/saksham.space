"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Left Column */}
                    <div>
                        <Link href="/" className="text-xl font-bold gradient-text inline-block mb-4">
                            saksham.space
                        </Link>
                        <p className="text-muted leading-relaxed max-w-xs">
                            Building 0-to-1 products for high-impact opportunities. From market analysis to measurable business outcomes.
                        </p>
                    </div>

                    {/* Middle Column */}
                    <div>
                        <h4 className="font-bold text-foreground mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Portfolio", href: "/portfolio" },
                                { name: "Services", href: "/services" },
                                { name: "About", href: "/about" },
                                { name: "Blog", href: "/blog" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-muted hover:text-accent transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h4 className="font-bold text-foreground mb-6">Connect</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "LinkedIn ↗", href: "https://www.linkedin.com/in/sakshamchauhan/" },
                                { name: "Substack ↗", href: "https://indianproductguy.substack.com/" },
                                { name: "X (Twitter) ↗", href: "https://x.com/SakshamCh2302" },
                                { name: "Email", href: "mailto:sakshamchauhan23@gmail.com" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-muted hover:text-accent transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
                    <p>© 2026 Saksham Singh. Product Manager building products that matter.</p>
                </div>
            </div>
        </footer>
    );
}
