import SectionHead from "./SectionHead";
import { FishBone, Scatter } from "./Doodles";

const clutter = [
  ["cross", "7%", "40%", 40, 6, "pop thick wide"],
  ["X marks the spot", "2%", "54%", 0, -6, "wide"],
  ["catface", "84%", "6%", 58, 10, "wide"],
  ["yarn", "12%", "72%", 50, 0, "pop wide"],
  ["bowl", "76%", "46%", 46, -6, "wide"],
];

const email = "shreyashn.dev@gmail.com";

const links = [
  { label: "github", href: "https://github.com/shreyashsri79" },
  { label: "linkedin", href: "https://www.linkedin.com/in/shreyashneeraj" },
  { label: "instagram", href: "https://www.instagram.com/they.call.me.zoro/" },
  { label: "resume (pdf)", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section aria-labelledby="contact">
      <SectionHead id="contact" title="contact" aside="write to me" />

      <div className="contact" data-reveal>
        <Scatter items={clutter} />
        <a href={`mailto:${email}?subject=Contact%20from%20Portfolio`} className="contact-mail">
          {email}
        </a>
        <ul className="contact-links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="link">
                {label} ↗︎
              </a>
            </li>
          ))}
        </ul>
        <p className="hand treat">
          <FishBone />
          for the cat
        </p>
      </div>

      <footer className="foot mono">
        © 2026 Shreyash Neeraj. The cat is drawn in ink; the rest is Next.js.
      </footer>
    </section>
  );
}
