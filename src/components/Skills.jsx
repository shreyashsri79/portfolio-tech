import SectionHead from "./SectionHead";
import { CoffeeRing } from "./Doodles";

const tones = ["sticky", "corners", "pin", "", "sticky pin", "corners"];

const skills = [
  {
    title: "Languages",
    items: ["Java", "C++", "Go", "Python", "Kotlin", "TypeScript", "JavaScript", "SQL", "Dart"],
  },
  {
    title: "CS fundamentals",
    items: [
      "Data structures & algorithms (graphs, union-find, MST, hashing, trees)",
      "Object-oriented design",
      "Concurrency",
      "Networking (TCP/UDP, QUIC, TLS 1.3)",
      "Operating systems I/O",
    ],
  },
  {
    title: "Back end & data",
    items: [
      "RESTful APIs",
      "Django",
      "Celery",
      "Express.js",
      "Gin",
      "PostgreSQL",
      "Redis",
      "MySQL",
      "MongoDB",
      "Schema migrations",
      "Connection pooling",
    ],
  },
  {
    title: "Front end & mobile",
    items: ["React", "Next.js", "React Native", "Flutter", "Jetpack Compose"],
  },
  {
    title: "Quality & tooling",
    items: [
      "JUnit",
      "Jest",
      "Go testing",
      "End-to-end test harnesses",
      "CI/CD",
      "Docker (multi-stage builds)",
      "Linux",
      "Git",
      "Benchmarking & profiling",
    ],
  },
];

export default function Skills() {
  return (
    <section aria-labelledby="skills">
      <SectionHead id="skills" title="skills" aside="what i reach for" right />

      <div className="skills" data-reveal>
        <CoffeeRing />
        {skills.map((group, i) => (
          <div key={group.title} className={`skill scrap ${tones[i % tones.length]}`}>
            <h3 className="hand">{group.title.toLowerCase()}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
