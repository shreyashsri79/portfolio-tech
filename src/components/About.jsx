import SectionHead from "./SectionHead";
import { TicTacToe, Heart, PawTrail } from "./Doodles";

const certifications = [
  {
    name: "Inclusive Open Source Community Orientation (LFC102)",
    by: "Linux Foundation, 2026",
    href: "/lfc102-certificate.pdf",
  },
  { name: "Open Source Software", by: "VITyarthi, 2026" },
  {
    name: "Cloud Computing, Elite",
    by: "NPTEL, IIT Kharagpur, 2025",
    href: "/nptel-cloud-computing-certificate.pdf",
  },
  { name: "Fundamentals of AI and ML", by: "VITyarthi, 2025" },
];

export default function About() {
  return (
    <section aria-labelledby="about">
      <SectionHead id="about" before="a little" title="about" aside="me :)" />

      <div className="about" data-reveal>
        <PawTrail />
        <div className="about-text">
          <p>
            I build the layer most people never look at. Right now that means{" "}
            <mark>QUIC transports</mark>, <mark>wire formats</mark>, and the kind of kernel I/O bug
            that costs you a syscall on every twelve bytes. I write the specification before the
            code, log every design decision with its reasoning, and keep the ones I got wrong in the
            file rather than quietly deleting them.
          </p>
          <p>
            My favourite kind of work is the sort where you read the byte path end to end and find
            six things nobody profiled for. Everything I build runs <mark>peer to peer</mark>, on{" "}
            <mark>hardware you already own</mark>, with no server in the middle taking a cut.
          </p>
          <p className="about-quote">
            Because technology should not just exist for those who could afford it. <Heart />
          </p>
        </div>

        <div>
          <div className="facts scrap sticky">
            <div>
              <h3 className="hand">education</h3>
              <ul>
                <li>
                  B.Tech, Computer Science and Engineering
                  <small>
                    Vellore Institute of Technology, Bhopal · Sep 2024 – Jun 2028 (expected)
                  </small>
                </li>
                <li>
                  <small>
                    Coursework: Data Structures & Algorithms, OOP in C++, Java and Advanced Java,
                    DBMS, Theory of Computation, Cloud Computing, Internet & Web Programming
                  </small>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="hand">certifications</h3>
              <ul>
                {certifications.map(({ name, by, href }) => (
                  <li key={name}>
                    {href ? (
                      <a href={href} className="link">
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                    <small>{by}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <TicTacToe />
        </div>
      </div>
    </section>
  );
}
