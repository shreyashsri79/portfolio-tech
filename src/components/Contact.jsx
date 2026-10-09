import SectionHead from "./SectionHead";
import { FishBone } from "./Doodles";

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
