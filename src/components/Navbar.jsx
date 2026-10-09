const links = [
  { label: "work", href: "#work" },
  { label: "skills", href: "#skills" },
  { label: "about", href: "#about" },
  { label: "resume", href: "/resume.pdf" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <nav className="nav-inner" aria-label="Main">
        <a href="#top" className="nav-name link">
          shreyash<span> neeraj</span>
        </a>
        <ul className="nav-links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
