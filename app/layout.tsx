import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://saksham.space/#website",
      url: "https://saksham.space",
      name: "saksham.space",
      description:
        "Product manager with a builder's background. I help organisations decide what to build and make sure it gets used.",
      publisher: { "@id": "https://saksham.space/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://saksham.space/#person",
      name: "Saksham Chauhan",
      url: "https://saksham.space",
      jobTitle: "Product Manager",
      description:
        "Product manager with a builder's background. I help organisations decide what to build and make sure it gets used, increasingly using AI to remove real work.",
      sameAs: [
        "https://www.linkedin.com/in/sakshamchauhan/",
        "https://x.com/SakshamCh2302",
        "https://substack.com/@sakshamchauhan",
      ],
    },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Saksham Chauhan — AI Product Manager & Builder",
    template: "%s | Saksham Chauhan",
  },
  description:
    "Saksham Chauhan is an AI product manager and builder who turns complex problems into practical software that gets used. Working at the intersection of AI, automation, and zero-to-one product development.",
  keywords: [
    "Saksham Chauhan",
    "AI Product Manager",
    "Product Builder",
    "Product Manager India",
    "AI Product Management",
    "Zero to One Product",
    "Product Manager Builder",
    "AI Automation Product",
    "EdTech Product Manager",
    "Ground Truth Substack",
    "Management Consultancy",
    "Product Strategy",
  ],
  authors: [{ name: "Saksham Chauhan", url: "https://saksham.space" }],
  creator: "Saksham Chauhan",
  publisher: "Saksham Chauhan",
  metadataBase: new URL("https://saksham.space"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/saksham.png", type: "image/png" },
    ],
    apple: "/saksham.png",
    shortcut: "/saksham.png",
  },
  openGraph: {
    title: "Saksham Chauhan — AI Product Manager & Builder",
    description:
      "Building practical software that gets used. AI product manager with a builder's background working at the intersection of AI, automation, and zero-to-one product development.",
    url: "https://saksham.space",
    siteName: "saksham.space",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saksham Chauhan — AI Product Manager & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Chauhan — AI Product Manager & Builder",
    description:
      "Building practical software that gets used. AI product manager working at the intersection of AI, automation, and zero-to-one product development.",
    creator: "@SakshamCh2302",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
