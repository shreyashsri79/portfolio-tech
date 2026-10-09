import Cat from "./Cat";
import { PawTrail, Sparkle } from "./Doodles";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <PawTrail />
      <div>
        <p className="hand rise">hi, i am</p>
        <h1 className="hero-name rise" style={{ "--i": 1 }}>
          Shreyash Neeraj
          <Sparkle />
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
          Backend &amp; systems
        </p>
        <p className="hero-lead rise" style={{ "--i": 3 }}>
          I work on the layer under the application: protocol design, QUIC and TCP transports, NAT
          traversal, and kernel I/O.
        </p>
        <p className="hero-rest rise" style={{ "--i": 4 }}>
          Currently building OpenAir, a peer to peer device continuity platform in Go. I write the
          specification first, measure before I claim anything, and keep the decisions I got wrong
          in the log instead of <s>deleting them</s>.
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
