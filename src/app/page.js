import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <About />
    </div>
  );
}
