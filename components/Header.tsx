"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/background" },
    { name: "Blog", href: "/blog" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        // Force light mode
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
                : "bg-transparent"
                }`}
        >
            <nav className="site-container flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
                {/* Logo */}
                <Link href="/" className="relative z-10" aria-label="saksham.space - Go to homepage">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="relative w-40 h-10 md:w-48 md:h-12"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Saksham Chauhan - Product Builder & 0-to-1 Specialist"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="relative text-sm font-medium text-muted hover:text-foreground transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA - Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href="https://calendar.app.google/66rqVeepUyMsziNfA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 text-sm font-medium rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
                        >
                            Let&apos;s Talk
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative z-10 md:hidden p-2"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-foreground origin-left transition-colors"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-0.5 bg-foreground transition-colors"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-foreground origin-left transition-colors"
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-background backdrop-blur-lg border-b border-border"
                    >
                        <ul className="site-container py-6 space-y-4">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-lg font-medium text-muted hover:text-foreground transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                className="pt-4 flex justify-center"
                            >
                                <a
                                    href="https://calendar.app.google/66rqVeepUyMsziNfA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-block px-6 py-3 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
                                >
                                    Let&apos;s Talk
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
