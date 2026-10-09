import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="sheet">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <ScrollEffects />
    </>
  );
}
