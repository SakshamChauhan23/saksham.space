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
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Saksham Chauhan — Product Manager",
    template: "%s | Saksham Chauhan",
  },
  description:
    "Product manager with a builder's background. I help organisations decide what to build and make sure it gets used, increasingly using AI to remove real work. Writing Ground Truth on building, adoption, and product judgment.",
  keywords: [
    "Product Manager",
    "AI Product",
    "Management Consultancy",
    "Product Strategy",
    "Zero to One",
    "Saksham Chauhan",
  ],
  authors: [{ name: "Saksham Chauhan" }],
  creator: "Saksham Chauhan",
  metadataBase: new URL("https://saksham.space"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Saksham Chauhan — Product Manager",
    description:
      "Product manager with a builder's background. I help organisations decide what to build and make sure it gets used.",
    url: "https://saksham.space",
    siteName: "saksham.space",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Chauhan — Product Manager",
    description:
      "Product manager with a builder's background. I help organisations decide what to build and make sure it gets used.",
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
