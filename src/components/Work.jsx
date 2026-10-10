import SectionHead from "./SectionHead";
import Image from "next/image";
import { Bit } from "./Doodles";

const work = [
  {
    name: "eSim on Cloud",
    when: "May – Jul 2026",
    kind: "Software engineering fellow",
    note: "25 modules never noticed",
    tone: "pin",
    stamp: "FOSSEE · IIT Bombay",
    aside: "60+ tests holding it",
    bits: [
      ["loaf", 78, 4, ""],
      ["paw", 30, -14, "pop"],
    ],
    foot: ["mouse", 60, -6],
    stack: "FOSSEE, IIT Bombay · React + SVG · Python · Django · Celery · Docker · PostgreSQL",
    url: "https://github.com/FOSSEE/eSim",
    linkLabel: "FOSSEE/eSim on github ↗︎",
    more: {
      label: "my fellowship report (pdf) ↗︎",
      href: "https://static.fossee.in/fossee/reports-2026/Fellowship-2026/eSim/Shreyash%20Neeraj.pdf",
    },
    photos: [
      {
        src: "/esim/chalkboard.jpg",
        width: 900,
        height: 1200,
        alt: "Shreyash looking at a chalkboard with e-Sim Cloud written on it beside a chalk cartoon holding a bat",
      },
      {
        src: "/esim/iitb-emblem.jpg",
        width: 900,
        height: 976,
        alt: "Shreyash, arms crossed, standing beside the brass IIT Bombay emblem",
      },
      {
        src: "/esim/iitb-wall.jpg",
        width: 900,
        height: 862,
        alt: "The IIT Bombay emblem painted in blue on a white stone wall",
      },
      {
        src: "/esim/campus-cat.jpg",
        width: 900,
        height: 849,
        alt: "A ginger and white cat asleep on a brown leather chair",
      },
    ],
    text: [
      "Rebuilt the schematic editor of eSim on Cloud, IIT Bombay's browser-based circuit-simulation platform, moving it off an unmaintained library (mxGraph) onto a custom React and SVG canvas over an immutable JSON store. Migrated in place without breaking the save format or API contracts of 25 downstream modules.",
      "Replaced reference-based netlist generation with a coordinate-keyed union-find connectivity compiler with electrical rule checks, and built a KiCad import pipeline using minimum spanning trees and Manhattan auto-routing.",
      "Shipped a server-side HDL simulation service for Verilog, SystemVerilog and VHDL on Django and Celery queues, and led the production PostgreSQL upgrade, verified by a live harness and 22 end-to-end tests against deployed containers.",
    ],
    caption: "three things replaced",
    figure: (
      <>
        <p className="fix">
          <s>mxGraph library</s>
          <b>React + SVG canvas</b>
        </p>
        <p className="fix">
          <s>reference-based netlist</s>
          <b>coordinate-keyed union-find</b>
        </p>
        <p className="fix">
          <s>PostgreSQL 13</s>
          <b>PostgreSQL 18</b>
        </p>
      </>
    ),
  },
  {
    name: "ShopCardd",
    when: "Sep – Nov 2025",
    kind: "SDE intern",
    note: "measure, then claim",
    tone: "corners",
    stamp: "2,000+ req/s",
    aside: "peak load, held",
    bits: [
      ["catface", 52, -8, ""],
      ["bowl", 50, 6, "pop"],
    ],
    foot: ["bird", 46, 0],
    stack: "Node.js · Express · PostgreSQL · Redis · React Native · Jest",
    text: [
      "Built a concurrent e-commerce microservices back end in Node.js and Express with custom PostgreSQL and Redis connection pooling. Developed the customer-facing React Native app for checkout and catalog browsing, optimising JSON serialization across the JS-to-native bridge and adding local state caching. Added CI/CD pipelines with Jest unit and integration tests.",
    ],
    caption: "measured, not guessed",
    figure: (
      <dl className="tally">
        <dt>2,000+</dt>
        <dd>requests per second at peak</dd>
        <dt>−35%</dt>
        <dd>UI thread latency</dd>
        <dt>−40%</dt>
        <dd>critical production runtime errors</dd>
        <dt>85%+</dt>
        <dd>test coverage</dd>
      </dl>
    ),
  },
  {
    name: "OABLT",
    when: "2026",
    kind: "Project",
    note: "traced the byte path.",
    tone: "sticky corners",
    stamp: "15 → 148 Mb/s",
    aside: "10x. on wifi!",
    bits: [
      ["grump", 52, 8, ""],
      ["yarn", 44, -10, "pop"],
    ],
    foot: ["tail", 30, 10],
    stack: "Go · Kotlin · Jetpack Compose · TCP · mDNS",
    url: "https://github.com/shreyashsri79/oablt",
    linkLabel: "source on github ↗︎",
    text: [
      "Peer-to-peer bulk file transfer. A control/data split over TCP: one connection negotiates a JSON handshake, N parallel workers stream chunks, and the receiver rebuilds the file by positional write. Shipped as a CLI, a desktop GUI and an Android app with mDNS discovery and cross-compiled releases for Linux, Windows and macOS.",
      "Found and fixed six structural performance bugs by tracing the byte path: a mutex serializing all parallel disk writes, a 4 KB read buffer causing a syscall storm, a file channel shared across workers.",
      "Ran a worker-scaling study under emulated loss (180 ms delay, 8% loss): throughput peaks at 10 workers and falls off beyond, so the right worker count depends on RTT and loss. Methodology and raw data are published.",
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
            148 Mb/s on WiFi (10x)
            <i style={{ "--v": "31%" }} />
          </p>
          <p>
            477 Mb/s on a direct link (31x)
            <i style={{ "--v": "100%" }} />
          </p>
        </div>
        <p>under 8% loss: peaks at 10 workers, 192 Mb/s</p>
      </>
    ),
  },
  {
    name: "OpenAir",
    when: "2026",
    kind: "Project",
    note: "spec first. always.",
    tone: "",
    stamp: "48 runs",
    aside: "no root needed",
    bits: [
      ["peek", 70, -4, ""],
      ["fish", 54, 10, "pop"],
    ],
    foot: ["sitcat", 46, 6],
    stack: "Go · QUIC · TLS 1.3 · Ed25519 · BBRv1",
    url: "https://github.com/shreyashsri79/OpenAir",
    linkLabel: "source on github ↗︎",
    text: [
      "Secure peer-to-peer device continuity. A QUIC transport with Ed25519-pinned TLS 1.3 and a vendored BBRv1 congestion controller, specified first in a 1,255-line wire spec and an append-only decision log.",
      "Built oabench, a cross-platform measurement harness: six shaped network profiles run in an unprivileged user namespace, with per-OS CPU accounting and JSON Lines output. Used it to benchmark QUIC against TCP over 48 runs.",
    ],
    caption: "same speed, 30x the cpu",
    figure: (
      <>
        <div className="bars">
          <p>
            QUIC, 185 Mb/s over WiFi
            <i style={{ "--v": "97.9%" }} />
          </p>
          <p>
            TCP, 189 Mb/s over WiFi
            <i style={{ "--v": "100%" }} />
          </p>
        </div>
        <p>QUIC: about 30x the sender CPU per GiB</p>
        <p className="fix">
          <s>certificate authority</s>
          <b>pinned Ed25519 keys</b>
        </p>
      </>
    ),
  },
];

export default function Work() {
  return (
    <section aria-labelledby="work">
      <SectionHead id="work" title="work" aside="experience / projects" />

      {work.map((item, i) => (
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
              <div className="entry-links">
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">
                    {item.linkLabel}
                  </a>
                )}
                {item.more && (
                  <a href={item.more.href} target="_blank" rel="noopener noreferrer" className="link">
                    {item.more.label}
                  </a>
                )}
              </div>
              <Bit
                shape={item.foot[0]}
                style={{ width: item.foot[1], rotate: `${item.foot[2]}deg` }}
              />
            </div>
          </div>

          <figure className="fig">
            <div className={`fig-card scrap mono ${item.tone}`}>{item.figure}</div>
            <figcaption className="hand">{item.caption}</figcaption>
            <div className="cluster" aria-hidden="true">
              <span className={`stamp ${i % 2 ? "dark" : ""}`}>{item.stamp}</span>
              {item.bits.map(([shape, width, turn, tone]) => (
                <Bit
                  key={shape}
                  shape={shape}
                  tone={tone}
                  style={{ width, rotate: `${turn}deg` }}
                />
              ))}
              <span className="hand">{item.aside}</span>
            </div>
          </figure>

          {item.photos && (
            <div className="snaps">
              {item.photos.map((photo, n) => (
                <figure key={photo.src} className={`snap scrap ${n % 2 ? "pin" : ""}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="340px"
                  />
                </figure>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
