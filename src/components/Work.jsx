


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
      colorA: "bg-red-900",
      colorB: "bg-red-700",
      header: "February 2025",
      companyName: "LOCALLOOP",
      image: "/LocalLoop.png",
      footer: "PROTOTYPE",
      url: "https://github.com/shreyashsri79/LocalLoop",
      description: `LocalLoop is a sleek and intuitive platform designed for local communities to buy, sell, and exchange items with ease. Whether you're decluttering your space or hunting for great deals, LocalLoop bridges the gap between neighbors through trusted, location-based commerce.`
    },
    {
      colorA: "bg-blue-900",
      colorB: "bg-blue-700",
      header: "April 2025",
      companyName: "SCROLLANA",
      image: "/Scrollana.png",
      footer: "HACKATHON",
      url: "https://github.com/Sk-Sahil-Islam/SageTech",
      description : "scrollana is a unique mobile application designed to help you become more mindful of your scrolling habits on social media and other apps. Instead of completely blocking your access to your favorite applications, SageTech takes a more gradual approach to help you develop healthier digital habits."
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
