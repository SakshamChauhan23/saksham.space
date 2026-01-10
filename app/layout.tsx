import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Saksham | Product Builder & 0-to-1 Specialist",
    template: "%s | Saksham",
  },
  description: "Product Manager specializing in rapid MVP development using AI and no-code tools. From idea to working product in 30-45 days.",
  keywords: ["Product Manager", "MVP Development", "AI", "No-code", "Startup", "Early-stage", "Product Builder", "Founder"],
  authors: [{ name: "Saksham" }],
  creator: "Saksham",
  metadataBase: new URL("https://saksham.space"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saksham | Product Builder & 0-to-1 Specialist",
    description: "I build 0-to-1 products for early-stage founders - fast.",
    url: "https://saksham.space",
    siteName: "saksham.space",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saksham - Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham | Product Builder & 0-to-1 Specialist",
    description: "I build 0-to-1 products for early-stage founders - fast.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <CursorFollower />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
