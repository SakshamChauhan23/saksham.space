import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata = {
    title: "About | Saksham - Product Builder",
    description: "My journey, philosophy, and the tools I use to build products fast.",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <AboutContent />
            </main>
            <Footer />
        </>
    );
}
