// Pen doodles. Stroked ones carry pathLength="1" so CSS can sketch them in on reveal.

function Doodle({ name, viewBox, children }) {
  return (
    <svg className={`doodle d-${name}`} viewBox={viewBox} aria-hidden="true">
      {children}
    </svg>
  );
}

const Stroke = ({ d, ...rest }) => <path pathLength="1" d={d} {...rest} />;

const paw = (
  <>
    <path d="M20 21c-6 0-10 5-9 9 1 4 5 4 9 3 4 1 8 1 9-3 1-4-3-9-9-9z" />
    <ellipse cx="8.5" cy="17" rx="3" ry="4" transform="rotate(-20 8.5 17)" />
    <ellipse cx="15.5" cy="9.5" rx="3" ry="4.2" transform="rotate(-8 15.5 9.5)" />
    <ellipse cx="24.5" cy="9.5" rx="3" ry="4.2" transform="rotate(8 24.5 9.5)" />
    <ellipse cx="31.5" cy="17" rx="3" ry="4" transform="rotate(20 31.5 17)" />
  </>
);

export function PawTrail() {
  return (
    <Doodle name="paws" viewBox="0 0 120 190">
      <g transform="translate(6 4) rotate(152 20 20) scale(.8)">{paw}</g>
      <g transform="translate(44 44) rotate(168 20 20) scale(.8)">{paw}</g>
      <g transform="translate(18 92) rotate(150 20 20) scale(.8)">{paw}</g>
      <g transform="translate(60 136) rotate(166 20 20) scale(.8)">{paw}</g>
    </Doodle>
  );
}

export function TicTacToe() {
  return (
    <Doodle name="ttt" viewBox="0 0 70 70">
      <Stroke d="M24 6c1 20-1 40 1 58M46 5c-1 20 1 40 0 59M5 25c20-1 40 1 60-1M6 46c20 1 40-1 59 0" />
      <Stroke d="M9 10l10 9M19 10L9 19M30 31l10 9M40 31l-10 9M52 52l10 9M62 52l-10 9" />
      <Stroke d="M35 9c-6 0-7 10 0 11s7-11 0-11M14 52c-6 0-7 10 0 11s7-11 0-11" />
      <Stroke className="pop" d="M5 6l61 59" />
    </Doodle>
  );
}

export function Heart() {
  return (
    <Doodle name="heart" viewBox="0 0 30 28">
      <Stroke className="pop" d="M15 25C5 17 2 11 6 6c3-3 8-2 9 3 1-5 6-6 9-3 4 5 1 11-9 19z" />
    </Doodle>
  );
}

export function FishBone() {
  return (
    <Doodle name="fish" viewBox="0 0 92 36">
      <Stroke d="M14 18h52M14 18L3 8M14 18L3 28" />
      <Stroke d="M26 9l4 18M36 7l4 22M46 7l4 22M56 9l3 18" />
      <Stroke d="M66 18c2-10 16-10 22 0-6 10-20 10-22 0z" />
      <circle cx="79" cy="16" r="1.300" className="dot" />
    </Doodle>
  );
}

export function CoffeeRing() {
  return (
    <svg className="coffee" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="50" strokeDasharray="210 14 60 6 40" strokeWidth="5" />
      <circle cx="61" cy="59" r="46" strokeDasharray="90 30 140 40" strokeWidth="1.500" />
    </svg>
  );
}

// Scrapbook doodles: mostly cats, plus the things cats care about.
// Each entry: viewBox, then one or more path strings. "l.1.1" is a dot (eyes).
const shapes = {
  catface: [
    "0 0 60 54",
    "M10 22L8 5l13 8c6-2 12-2 18 0l13-8-2 17c4 14-4 27-20 27S6 36 10 22z",
    "M21 27l.1.1M39 27l.1.1",
    "M28 33h4l-2 3zM30 36c-1 4-6 4-7 1M30 36c1 4 6 4 7 1",
    "M14 32L2 30M14 36L3 39M46 32l12-2M46 36l11 3",
  ],
  sitcat: [
    "0 0 60 70",
    "M17 24L15 6l9 7c3-1 5-1 8 0l9-7-2 18c8 8 12 22 10 38H10C8 46 11 32 17 24z",
    "M23 20l.1.1M33 20l.1.1",
    "M26 25c1 2 3 2 4 0",
    "M46 60c9 1 11-10 4-13",
  ],
  loaf: [
    "0 0 82 46",
    "M6 40C2 28 8 18 14 16L13 5l9 7c3-1 6-1 9 0l8-7v11c18-4 38 4 36 24z",
    "M17 23c1 2 3 2 4 0M28 23c1 2 3 2 4 0",
    "M56 6h7l-7 8h7M69 1h5l-5 6h5",
  ],
  peek: [
    "0 0 70 40",
    "M10 38C8 24 12 16 14 14L12 2l11 8c8-2 16-2 24 0l11-8-2 12c4 6 6 14 4 24",
    "M26 24l.1.1M44 24l.1.1",
    "M33 29h4l-2 3z",
    "M4 38c0-6 10-6 10 0M56 38c0-6 10-6 10 0",
  ],
  grump: [
    "0 0 60 54",
    "M10 22L8 5l13 8c6-2 12-2 18 0l13-8-2 17c4 14-4 27-20 27S6 36 10 22z",
    "M17 23l8 3M43 23l-8 3M22 29l.1.1M38 29l.1.1",
    "M28 35h4l-2 3zM24 43c3-3 9-3 12 0",
  ],
  tail: ["0 0 40 70", "M30 68C34 48 6 44 10 24 12 12 26 8 30 16"],
  mouse: [
    "0 0 72 36",
    "M12 28c0-12 12-18 26-16s24 10 28 16z",
    "M42 13c-2-8 8-10 10-2",
    "M56 22l.1.1",
    "M12 28C4 28 2 20 8 16s4-10-2-10",
  ],
  fish: [
    "0 0 70 36",
    "M6 18c12-14 32-14 44 0-12 14-32 14-44 0zM50 18l14-10v20z",
    "M16 15l.1.1",
    "M26 10c3 5 3 11 0 16",
  ],
  yarn: [
    "0 0 62 56",
    "M26 8a22 22 0 100 44 22 22 0 100-44",
    "M10 20c12 2 24 10 30 24M8 32c10 0 20 6 26 16M18 10c10 4 20 14 24 26",
    "M44 44c8 6 10-4 16 4",
  ],
  bird: [
    "0 0 62 50",
    "M12 26c0-12 12-18 22-14 6-6 14-2 12 6l8 3-8 3c-2 12-14 18-26 14-6-2-8-6-8-12z",
    "M40 15l.1.1",
    "M20 26c6 6 14 6 18-2",
    "M24 39v8M32 39v8",
  ],
  bowl: ["0 0 60 34", "M6 12h48c0 12-8 18-24 18S6 24 6 12z", "M6 12c0-6 48-6 48 0"],
  paw: [
    "0 0 40 40",
    "M20 21c-6 0-10 5-9 9 1 4 5 4 9 3 4 1 8 1 9-3 1-4-3-9-9-9z",
    "M8 14v6M15 7v6M25 7v6M32 14v6",
  ],
  arrow: ["0 0 62 40", "M4 32C14 10 38 6 56 18", "M44 8l13 10-15 6"],
  loop: ["0 0 110 52", "M12 28C8 12 58 2 90 9s24 30-10 37S16 46 10 30C7 20 22 10 44 7"],
  cross: ["0 0 36 36", "M6 6l24 24M30 6L6 30"],
};

export function Bit({ shape, tone = "", style }) {
  const [viewBox, ...paths] = shapes[shape];
  return (
    <svg
      className={`doodle bit ${tone}`}
      viewBox={viewBox}
      preserveAspectRatio={shape === "loop" ? "none" : undefined}
      style={style}
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path key={d} pathLength="1" d={d} />
      ))}
    </svg>
  );
}

// Absolutely placed clutter. Item: [shape or text, left, top, width, degrees, tone].
export function Scatter({ items, className = "" }) {
  return (
    <div className={`scatter ${className}`} aria-hidden="true">
      {items.map(([what, left, top, width, turn = 0, tone = ""], i) =>
        shapes[what] ? (
          <Bit
            key={i}
            shape={what}
            tone={tone}
            style={{ left, top, width, rotate: `${turn}deg` }}
          />
        ) : (
          <span key={i} className={`hand ${tone}`} style={{ left, top, rotate: `${turn}deg` }}>
            {what}
          </span>
        ),
      )}
    </div>
  );
}

export function Route() {
  return (
    <svg className="route" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
      <path
        vectorEffect="non-scaling-stroke"
        d="M62 150c30 20 34 60 4 80S10 250 8 300s60 40 84 90-50 60-82 100 40 70 80 110-70 60-78 120 70 60 80 110-50 60-40 130"
      />
    </svg>
  );
}
