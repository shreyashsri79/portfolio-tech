export default function SectionHead({ id, title, before, aside, right = false }) {
  return (
    <header id={id} className={`head ${right ? "right" : ""}`}>
      {before && <p className="hand">{before}</p>}
      <h2>
        {title}
        <svg viewBox="0 0 180 20" preserveAspectRatio="none" aria-hidden="true">
          <path d="M3 7c30-6 58 7 88 0s52 5 84-3M14 16c44-6 86 4 150-3" />
        </svg>
      </h2>
      <p className="hand">{aside}</p>
    </header>
  );
}
