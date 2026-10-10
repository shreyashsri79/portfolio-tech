import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollEffects from "@/components/ScrollEffects";
import { Route, Scatter } from "@/components/Doodles";

// Clutter in the side gutters, only shown when the window is wide enough to have gutters.
const gutter = [
  ["sitcat", "-12%", "1.5%", 62, -6],
  ["bird", "104%", "3%", 50, 8, "pop"],
  ["yarn", "-11%", "13%", 54, -10, "pop"],
  ["tail", "104%", "17%", 34, 14],
  ["catface", "-12%", "24%", 56, -8],
  ["here be bugs", "102%", "29%", 0, 82],
  ["mouse", "-14%", "36%", 66, -14, "pop"],
  ["grump", "104%", "43%", 54, 10],
  ["fish", "-13%", "50%", 62, 20, "pop"],
  ["paw", "105%", "56%", 34, 14],
  ["loaf", "-15%", "63%", 80, -6],
  ["bowl", "104%", "69%", 52, 8, "pop"],
  ["peek", "-13%", "76%", 66, 4],
  ["bird", "-11%", "85%", 46, -10, "pop"],
  ["sitcat", "105%", "88%", 50, 8],
  ["yarn", "-10%", "94%", 46, 0],
];

const afterWork = [
  ["loaf", "4%", 46, 96, -4, ""],
  ["paw", "24%", 20, 30, 16, "pop"],
  ["ok. tools next", "34%", 54, 0, -3],
  ["arrow", "56%", 46, 70, 30, "wide"],
  ["mouse", "70%", 20, 60, 6, "pop wide"],
  ["catface", "86%", 56, 50, 10, "wide"],
];

const afterSkills = [
  ["fish", "15%", 76, 64, 8, "pop wide"],
  ["sitcat", "4%", 16, 50, -6, ""],
  ["who made all this?", "44%", 62, 0, 3],
  ["arrow", "72%", 50, 64, 62, "wide"],
  ["yarn", "86%", 20, 44, -10, "pop wide"],
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="sheet">
        <Route />
        <Scatter className="gutter" items={gutter} />
        <Hero />
        <Work />
        <Scatter className="interlude" items={afterWork} />
        <Skills />
        <Scatter className="interlude" items={afterSkills} />
        <About />
        <Contact />
      </main>
      <ScrollEffects />
    </>
  );
}
