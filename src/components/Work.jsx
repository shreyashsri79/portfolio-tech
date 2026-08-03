


// Dear Future Shreyash,
// I have found the cause of the underline bug.
// It's because I am passing a 'url' to the WorkCards component,
// which redirects correctly but also underlines the text.
// I’ve tried removing the 'url' and it does NOT work correctly,
// because the magnetic property of the card interferes.
// I believe in the future GPT’s skills that he’ll fix it.
// Until then, I am at a loss and am pushing this code to prod
// despite the issue, as I value my sanity—and I hope you do too.




"use client";
import React, { useState, useEffect, useRef } from "react";
import WorkCards from "./WorkCards";
import { Gabriela } from "next/font/google";

const titleFont = Gabriela({ subsets: ["latin"], weight: "400" });

const Work = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Trigger header animation
    const timer = setTimeout(() => setHeaderVisible(true), 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === cardsRef.current && entry.isIntersecting) {
            setCardsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const workData = [
    {
      colorA: "bg-blue-900",
      colorB: "bg-blue-400",
      header: "July 2026 - Present",
      companyName: "OPENAIR",
      image: "/openair.png",
      footer: "PROJECT",
      url: "https://github.com/shreyashsri79/OpenAir",
      description: `A device continuity platform in Go, GPL-3.0. Files, clipboard, notifications, remote filesystem, screen mirror and remote input all ride one QUIC connection per peer across Linux, Windows, macOS and Android. No cloud in the data path and no certificate authority: Ed25519 device keys pin TLS 1.3 directly, and pairing is confirmed by six digits both humans compare. Runs on a vendored quic-go fork carrying BBRv1 and a Windows USO send path. A 1,255-line normative wire specification, a threat model and an append-only decision log came before the implementation.`
    },
    {
      colorA: "bg-red-900",
      colorB: "bg-red-700",
      header: "May 2026 - July 2026",
      companyName: "ESIM",
      image: "/esim.png",
      footer: "FOSSEE FELLOWSHIP",
      url: "https://github.com/FOSSEE/eSim.git",
      description: `Summer fellowship at FOSSEE, IIT Bombay, on eSim on Cloud. Migrated the schematic editor off the unmaintained mxGraph engine onto a custom React and SVG canvas, preserving the legacy XML save format and the API contracts of 25 downstream modules behind a facade. Replaced its netlist generation with a coordinate-keyed DSU connectivity compiler, shipped a Verilog, SystemVerilog and VHDL simulation service on Django and Celery, and led the production PostgreSQL 13 to 18 upgrade.`
    },
    {
      colorA: "bg-emerald-900",
      colorB: "bg-emerald-400",
      header: "April 2026 - May 2026",
      companyName: "OABLT",
      image: "/openair.png",
      footer: "PROJECT",
      url: "https://github.com/shreyashsri79/oablt",
      description: `Bulk local file transfer over parallel TCP, Go on the receiver and Kotlin on Android, GPL-3.0. A control connection negotiates the transfer, then N worker connections stream chunks sized from the measured bandwidth-delay product, reassembled by positional writes so they can land in any order. Found six structural bottlenecks by reading the byte path rather than profiling, including a mutex needlessly serialising concurrent pwrite(2), and took throughput from 15 Mb/s to 148 Mb/s on WiFi and 477 Mb/s on a direct hotspot.`
    },
    {
      colorA: "bg-yellow-900",
      colorB: "bg-yellow-200",
      header: "Sept 2025 - Nov 2025",
      companyName: "SHOPCARDD",
      image: "/ShopCardd.png",
      footer: "INTERNSHIP",
      bigWidth: true,
      description: `SDE intern. Built a concurrent Node.js and Express microservices backend with custom PostgreSQL and Redis connection pooling and stream processing, sustaining 2,000+ requests per second at peak. Shipped a React Native checkout and catalog app, cutting UI thread latency 35% by optimising serialization across the JS to native bridge. Reduced post-production runtime errors 40% with CI/CD and a Jest suite at 85%+ coverage.`,
    },
  ];

  return (
    <>
      <header
        id="work"
        ref={headerRef}
        className="border-y border-black bg-[#fafafa] overflow-hidden items-center"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif">
          <div
            className={`${titleFont.className} text-2xl font-bold underline underline-offset-[6px] transition-all duration-800 ${
              headerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            work
          </div>

          <div className="flex gap-2 lg:gap-3">
            {[
              { text: "internships", delay: "200ms" },
              { text: "/", delay: "300ms" },
              { text: "projects", delay: "400ms" },
            ].map((item, index) => (
              <div
                key={index}
                className={`${titleFont.className} transition-all duration-700 ${
                  item.text === "/" ? "text-xl font-bold" : "text-lg font-light underline-offset-[6px]"
                } ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
                style={{
                  transitionDelay: headerVisible ? item.delay : "0ms",
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </nav>
      </header>

      <div
        ref={cardsRef}
        className="py-40 px-10 flex flex-wrap gap-20 justify-center"
      >
        {workData.map((card, index) => (
          <a
            key={card.companyName}
            href={card.url}
            className={`block no-underline transition-all duration-800 ${
              cardsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
            }`}
            style={{
              transitionDelay: cardsVisible ? `${index * 200}ms` : "0ms",
            }}
          >
            <WorkCards
              colorA={card.colorA}
              colorB={card.colorB}
              header={card.header}
              companyName={card.companyName}
              image={card.image}
              footer={card.footer}
              bigWidth={card.bigWidth}
              description={card.description} // ✅ description included
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Work;
