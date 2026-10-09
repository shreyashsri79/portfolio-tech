import SectionHead from "./SectionHead";
import { CoffeeRing } from "./Doodles";

const skills = [
  {
    title: "Languages",
    items: ["Go", "Kotlin", "TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: "Systems",
    items: [
      "QUIC (quic-go)",
      "TCP/UDP sockets",
      "BBR / congestion control",
      "Wire protocol design",
      "NAT traversal (STUN)",
      "mDNS / Zeroconf",
      "pwrite / writev",
      "Goroutines & channels",
    ],
  },
  {
    title: "Security",
    items: [
      "Ed25519",
      "TLS 1.3 with pinned keys",
      "SHA-256 integrity",
      "Argon2id",
      "Threat modelling",
    ],
  },
  {
    title: "Frameworks",
    items: [
      "Gin",
      "Django",
      "Celery",
      "Jetpack Compose",
      "React Native",
      "Express.js",
      "Next.js",
      "Node.js",
    ],
  },
  {
    title: "Data & tools",
    items: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "MySQL",
      "Docker",
      "Git",
      "Postman",
      "Android Studio",
    ],
  },
  {
    title: "Backend",
    items: [
      "Microservices architecture",
      "Connection pooling",
      "REST API design",
      "Concurrency & lock-free patterns",
      "Performance measurement",
      "CI/CD pipelines",
    ],
  },
];

export default function Skills() {
  return (
    <section aria-labelledby="skills">
      <SectionHead id="skills" title="skills" aside="in order of proficiency" right />

      <div className="skills" data-reveal>
        <CoffeeRing />
        {skills.map((group) => (
          <div key={group.title} className="skill scrap">
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
