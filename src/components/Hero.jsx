import Cat from "./Cat";
import { PawTrail, Bit, Scatter } from "./Doodles";

const clutter = [
  ["bird", "50%", "4%", 46, -8, ""],
  ["mouse", "56%", "86%", 62, -6, "wide"],
  ["yarn", "-3%", "84%", 50, 12, "pop wide"],
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <PawTrail />
      <Scatter items={clutter} />
      <div>
        <p className="hand rise">hi, i am</p>
        <h1 className="hero-name rise" style={{ "--i": 1 }}>
          Shreyash <em>Neeraj</em>
          <svg
            className="squiggle"
            viewBox="0 0 300 12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path pathLength="1" d="M2 8C40 2 70 11 110 6s80-3 120 1 50-2 68-1" />
          </svg>
        </h1>
        <p className="hero-role rise" style={{ "--i": 2 }}>
          Software engineer
          <Bit shape="loop" tone="pop thick" />
        </p>
        <p className="hero-lead rise" style={{ "--i": 3 }}>
          I build reliable, well-tested systems in Java, C++, Go, Python and Kotlin.
        </p>
        <p className="hero-rest rise" style={{ "--i": 4 }}>
          Strong in data structures and algorithms. I measure performance before changing it, write
          the specification first, and keep the decisions I got wrong in the log instead of{" "}
          <s>deleting them</s>. Available Summer 2027, on-site in India.
        </p>
        <p className="hero-links rise" style={{ "--i": 5 }}>
          <a href="#work" className="link">
            read the work ↓
          </a>
          <a href="/resume.pdf" className="link">
            resume (pdf) ↗︎
          </a>
        </p>
        <p className="hand hero-edu rise" style={{ "--i": 6 }}>
          b.tech cse, vit bhopal, class of 2028
        </p>
      </div>

      <div className="rise" style={{ "--i": 6 }}>
        <Cat />
      </div>
    </section>
  );
}
