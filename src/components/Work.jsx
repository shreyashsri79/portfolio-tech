


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
      colorA: "bg-red-900",
      colorB: "bg-red-700",
      header: "May 2026 - July 2026",
      companyName: "ESIM",
      image: "/esim.png",
      footer: "FOSSEE FELLOWSHIP",
      url: "https://github.com/FOSSEE/eSim.git",
      description: `eSim is a government-funded, open-source EDA tool developed by IIT Bombay for circuit design, simulation, and PCB layout. Built on integrated FLOSS tools like KiCad and Ngspice, it provides a robust platform for electronic system design, bridging the gap between academic research and professional-grade hardware engineering and manufacturing.`
    },
    {
      colorA: "bg-yellow-900",
      colorB: "bg-yellow-200",
      header: "Sept 2025 – Nov 2025",
      companyName: "SHOPCARDD",
      image: "/ShopCardd.png",
      footer: "INTERNSHIP",
      bigWidth: true,
      description: `Built scalable microservices backend using Node.js, Express, AWS, Docker, Kafka, and Prometheus. Developed React Native app integrating APIs, optimizing performance, and cutting bugs by 40%. Delivered production-ready solutions through CI/CD, Jest testing, and cross-functional collaboration. Tech stack: Node.js, Express, React Native, AWS, Docker, Kafka, Nginx, Jest, CI/CD.`,
    },
    {
      colorA: "bg-blue-900",
      colorB: "bg-blue-400",
      header: "April 2026",
      companyName: "OPENAIR",
      image: "/openair.png",
      footer: "PROJECT",
      url: "https://github.com/shreyashsri79/OpenAir",
      description : "OpenAir is a GPL 3.0 liscensed FLOSS serverless, cross-platform P2P file-sharing system built for high-speed LAN transfers. Featuring a bi-directional architecture in both Go and Kotlin, every node acts as both sender and receiver. It prioritizes clean code and minimalist design, delivering a secure, decentralized solution for seamless, high-performance data exchange."
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
              { text: "hackathons", delay: "400ms" },
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
