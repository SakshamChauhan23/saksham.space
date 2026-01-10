import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundContent from "./BackgroundContent";

export const metadata = {
    title: "Background | Saksham - Experience & Education",
    description: "My professional journey, detailed work experience, and educational background.",
};

export default function BackgroundPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <BackgroundContent />
            </main>
            <Footer />
        </>
    );
}
