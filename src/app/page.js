import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
    </div>
  );
}
