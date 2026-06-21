import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeBelt from "@/components/MarqueeBelt";
import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import SelectedWork from "@/components/sections/SelectedWork";
import Writing from "@/components/sections/Writing";
import Connect from "@/components/sections/Connect";
import { ThreeSceneClient as ThreeScene } from "@/components/ClientOnly";

export default function Home() {
  return (
    <>
      <ThreeScene />
      <Header />
      <main>
        <Hero />
        <Statement />
        <SelectedWork />
        <Writing />
        <Connect />
      </main>
      <MarqueeBelt />
      <Footer />
    </>
  );
}
