"use client";

import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/background" },
    { name: "Blog", href: "/blog" },
];

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sakshamchauhan/" },
    { name: "Substack", href: "https://indianproductguy.substack.com/" },
    { name: "X (Twitter)", href: "https://x.com/SakshamCh2302" },
    { name: "Email", href: "mailto:sakshamchauhan23@gmail.com" },
];

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8" role="contentinfo">
            <div className="site-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Left Column */}
                    <div>
                        <Link href="/" className="text-xl font-bold gradient-text inline-block mb-4" aria-label="saksham.space - Go to homepage">
                            saksham.space
                        </Link>
                        <p className="text-muted leading-relaxed max-w-xs">
                            Building 0-to-1 products for high-impact opportunities. From market analysis to measurable business outcomes.
                        </p>
                    </div>

                    {/* Middle Column */}
                    <nav aria-label="Footer navigation">
                        <h4 className="font-bold text-foreground mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-muted hover:text-accent transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Column */}
                    <div>
                        <h4 className="font-bold text-foreground mb-6">Connect</h4>
                        <ul className="space-y-3">
                            {socialLinks.map((item) => (
                                <li key={item.name}>
                                    {item.href.startsWith("http") ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted hover:text-accent transition-colors"
                                        >
                                            {item.name} <span aria-hidden="true">↗</span>
                                        </a>
                                    ) : (
                                        <Link href={item.href} className="text-muted hover:text-accent transition-colors">
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
                    <p>&copy; {new Date().getFullYear()} Saksham Chauhan. Product Manager building products that matter.</p>
                </div>
            </div>
        </footer>
    );
}
