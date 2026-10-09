import SectionHead from "./SectionHead";
import { PaperPlane, Resistor, Bolt, Cart } from "./Doodles";

const work = [
  {
    name: "OpenAir",
    when: "Jul 2026 – now",
    kind: "Project",
    note: "spec first. always.",
    doodle: <PaperPlane />,
    stack: "Go · QUIC (vendored quic-go + BBR) · Ed25519 · Protobuf · mDNS · STUN · Kotlin",
    url: "https://github.com/shreyashsri79/OpenAir",
    linkLabel: "source on github ↗︎",
    text: [
      "A device continuity platform, GPL-3.0. Files, clipboard, notifications, remote filesystem, screen mirror and remote input all ride one QUIC connection per peer across Linux, Windows, macOS and Android.",
      "No cloud in the data path and no certificate authority: Ed25519 device keys pin TLS 1.3 directly, and pairing is confirmed by six digits both humans compare. A 1,255-line normative wire specification, a threat model and an append-only decision log came before the implementation.",
    ],
    caption: "8 bytes, every message",
    figure: (
      <>
        <div
          className="bytes"
          role="img"
          aria-label="Envelope fields: ver, capID, msgType, length, then a protobuf payload"
        >
          <span>ver</span>
          <span>capID</span>
          <span>msgType</span>
          <span>length</span>
        </div>
        <div className="bytes" aria-hidden="true">
          <span className="open">protobuf payload …</span>
        </div>
        <p className="fix">
          <s>certificate authority</s>
          <b>pinned Ed25519 keys</b>
        </p>
      </>
    ),
  },
  {
    name: "eSim on Cloud",
    when: "May – Jul 2026",
    kind: "Fellowship",
    note: "25 modules never noticed",
    doodle: <Resistor />,
    stack: "FOSSEE, IIT Bombay · React + SVG · Django · Celery · Docker · PostgreSQL",
    url: "https://github.com/FOSSEE/eSim",
    linkLabel: "FOSSEE/eSim on github ↗︎",
    text: [
      "Summer fellowship. Migrated the schematic editor off the unmaintained mxGraph engine onto a custom React and SVG canvas, preserving the legacy XML save format and the API contracts of 25 downstream modules behind a facade.",
      "Replaced its netlist generation with a coordinate-keyed DSU connectivity compiler, shipped a Verilog, SystemVerilog and VHDL simulation service on Django and Celery, and led the production PostgreSQL upgrade.",
    ],
    caption: "three things replaced",
    figure: (
      <>
        <p className="fix">
          <s>mxGraph engine</s>
          <b>React + SVG canvas</b>
        </p>
        <p className="fix">
          <s>DFS over terminals</s>
          <b>coordinate-keyed DSU</b>
        </p>
        <p className="fix">
          <s>PostgreSQL 13</s>
          <b>PostgreSQL 18</b>
        </p>
      </>
    ),
  },
  {
    name: "OABLT",
    when: "Apr – May 2026",
    kind: "Project",
    note: "no profiler. just reading.",
    doodle: <Bolt />,
    stack: "Go · Kotlin / Jetpack Compose · TCP sockets · mDNS / NSD · pwrite / writev",
    url: "https://github.com/shreyashsri79/oablt",
    linkLabel: "source on github ↗︎",
    text: [
      "Bulk local file transfer over parallel TCP, Go on the receiver and Kotlin on Android, GPL-3.0. A control connection negotiates the transfer, then N worker connections stream chunks sized from the measured bandwidth-delay product, reassembled by positional writes so they can land in any order.",
      "Found six structural bottlenecks by reading the byte path rather than profiling, including a mutex needlessly serialising concurrent pwrite(2).",
    ],
    caption: "same link, six fixes later",
    figure: (
      <>
        <div className="bars">
          <p className="was">
            <s>15 Mb/s</s> before
            <i style={{ "--v": "3.1%" }} />
          </p>
          <p>
            148 Mb/s on 5 GHz WiFi
            <i style={{ "--v": "31%" }} />
          </p>
          <p>
            477 Mb/s on a direct hotspot
            <i style={{ "--v": "100%" }} />
          </p>
        </div>
        <div
          className="bytes"
          role="img"
          aria-label="12-byte chunk header: offset as u64, size as u32, then the chunk"
        >
          <span style={{ "--w": 8 }}>offset u64</span>
          <span style={{ "--w": 4 }}>size u32</span>
        </div>
      </>
    ),
  },
  {
    name: "ShopCardd",
    when: "Sep – Nov 2025",
    kind: "Internship",
    note: "measure, then claim",
    doodle: <Cart />,
    stack: "Node.js · Express · PostgreSQL · Redis · React Native · Jest",
    text: [
      "SDE intern. Built a concurrent Node.js and Express microservices backend with custom PostgreSQL and Redis connection pooling and stream processing. Shipped a React Native checkout and catalog app, optimising serialization across the JS to native bridge, and put CI/CD and a Jest suite in front of production.",
    ],
    caption: "measured, not guessed",
    figure: (
      <dl className="tally">
        <dt>2,000+</dt>
        <dd>requests per second at peak</dd>
        <dt>−35%</dt>
        <dd>UI thread latency</dd>
        <dt>−40%</dt>
        <dd>post-production runtime errors</dd>
        <dt>85%+</dt>
        <dd>test coverage</dd>
      </dl>
    ),
  },
];

export default function Work() {
  return (
    <section aria-labelledby="work">
      <SectionHead id="work" title="work" aside="internships / projects" />

      {work.map((item) => (
        <article key={item.name} className="entry" data-reveal>
          <div className="entry-text">
            <p className="hand when">
              {item.when}, {item.kind.toLowerCase()}
            </p>
            <h3>{item.name}</h3>
            <p className="hand note">{item.note}</p>
            <p className="mono entry-stack">{item.stack}</p>
            {item.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="entry-foot">
              {item.url && (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">
                  {item.linkLabel}
                </a>
              )}
              {item.doodle}
            </div>
          </div>

          <figure className="fig">
            <div className="fig-card scrap mono">{item.figure}</div>
            <figcaption className="hand">{item.caption}</figcaption>
          </figure>
        </article>
      ))}
    </section>
  );
}
