import type { Metadata } from "next";
import { SITE_URL, ogImage, personRef } from "@/lib/seo";
import { publishedPosts } from "@/data/writing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
    title: "Writing",
    description:
        "Every Ground Truth essay. Building with AI, getting products adopted, and the judgment calls in between.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Writing — Ground Truth",
        description:
            "Every essay from the work. Building with AI, getting products adopted, and the judgment calls in between.",
        url: "https://saksham.space/blog",
        images: [ogImage],
    },
    twitter: {
        card: "summary_large_image",
        title: "Writing — Ground Truth",
        description:
            "Every essay from the work. Building with AI, getting products adopted, and the judgment calls in between.",
        images: [ogImage.url],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Ground Truth",
    description:
        "Every Ground Truth essay. Building with AI, getting products adopted, and the judgment calls in between.",
    url: `${SITE_URL}/blog`,
    inLanguage: "en",
    author: personRef,
    publisher: personRef,
    blogPost: publishedPosts().map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: post.href.startsWith("/") ? `${SITE_URL}${post.href}` : post.href,
        datePublished: post.date,
        author: personRef,
        ...(post.cover && { image: `${SITE_URL}${post.cover}` }),
    })),
};

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main style={{ background: "var(--bg)", paddingTop: "6rem" }}>
                <BlogContent />
            </main>
            <Footer />
        </>
    );
}
