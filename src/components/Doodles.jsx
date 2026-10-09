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

export function Sparkle() {
  return (
    <Doodle name="sparkle" viewBox="0 0 50 50">
      <Stroke d="M22 8c1 10 3 14 13 16-10 2-12 6-13 16-1-10-3-14-13-16 10-2 12-6 13-16z" />
      <Stroke d="M41 5v9M36.5 9.500h9" />
      <Stroke d="M43 36v6M40 39h6" />
    </Doodle>
  );
}

export function PaperPlane() {
  return (
    <Doodle name="plane" viewBox="0 0 96 60">
      <path className="dotted" d="M4 50c14 6 22-8 14-14s-16 8-4 14 26-1 38-13" />
      <Stroke d="M52 23L92 5 73 42 64 30z" />
      <Stroke d="M64 30L92 5M64 30l-2 13 6-8" />
    </Doodle>
  );
}

export function Resistor() {
  return (
    <Doodle name="resistor" viewBox="0 0 96 50">
      <Stroke d="M3 18h16l4-10 8 20 8-20 8 20 8-20 4 10h18" />
      <Stroke d="M77 18v16M67 34h20M71 39h12M75 44h4" />
      <Stroke d="M3 18m-2 0a2 2 0 104 0 2 2 0 10-4 0" />
    </Doodle>
  );
}

export function Bolt() {
  return (
    <Doodle name="bolt" viewBox="0 0 70 50">
      <Stroke d="M44 3L27 25h11l-6 21 20-27H40z" />
      <Stroke d="M4 14h14M9 25h10M3 36h15" />
    </Doodle>
  );
}

export function Cart() {
  return (
    <Doodle name="cart" viewBox="0 0 70 50">
      <Stroke d="M4 8h9l7 24h26l6-17H16" />
      <Stroke d="M24 38a3.500 3.500 0 100 7 3.500 3.500 0 100-7M43 38a3.500 3.500 0 100 7 3.500 3.500 0 100-7" />
      <Stroke d="M58 4l2 5M64 9l-4 3" />
    </Doodle>
  );
}

export function TicTacToe() {
  return (
    <Doodle name="ttt" viewBox="0 0 70 70">
      <Stroke d="M24 6c1 20-1 40 1 58M46 5c-1 20 1 40 0 59M5 25c20-1 40 1 60-1M6 46c20 1 40-1 59 0" />
      <Stroke d="M9 10l10 9M19 10L9 19M30 31l10 9M40 31l-10 9M52 52l10 9M62 52l-10 9" />
      <Stroke d="M35 9c-6 0-7 10 0 11s7-11 0-11M14 52c-6 0-7 10 0 11s7-11 0-11" />
      <Stroke className="red" d="M5 6l61 59" />
    </Doodle>
  );
}

export function Heart() {
  return (
    <Doodle name="heart" viewBox="0 0 30 28">
      <Stroke className="red" d="M15 25C5 17 2 11 6 6c3-3 8-2 9 3 1-5 6-6 9-3 4 5 1 11-9 19z" />
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
