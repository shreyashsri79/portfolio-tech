"use client"
import React, { useState, useEffect, useRef } from 'react'
import WorkCards from './WorkCards'

const Work = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Trigger header animation on mount
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

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

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const workData = [
    {
      colorA: "bg-red-900",
      colorB: "bg-red-700", 
      header: "February 2025",
      companyName: "LOCALLOOP",
      image: "/LocalLoop.png",
      footer: "PROTOTYPE"
    },
    {
      colorA: "bg-blue-900",
      colorB: "bg-blue-700",
      header: "April 2025", 
      companyName: "SCROLLANA",
      image: "/Scrollana.png",
      footer: "HACKATHON"
    }
  ];

  return (
    <>
      <header 
        id='work' 
        ref={headerRef}
        className="border-y border-black bg-[#fafafa] overflow-hidden"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif">
          <div className={`text-2xl font-bold underline underline-offset-[6px] transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            work
          </div>
          
          <div className='flex gap-3'>
            {[
              { text: "internships", delay: "200ms" },
              { text: "/", delay: "300ms" },
              { text: "hackathons", delay: "400ms" },
              { text: "/", delay: "500ms" },
              { text: "innovations", delay: "600ms" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  item.text === "/" 
                    ? "text-xl font-bold" 
                    : "text-lg font-light underline underline-offset-[6px] hover:text-gray-600 cursor-pointer"
                } ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                }`}
                style={{
                  transitionDelay: headerVisible ? item.delay : '0ms'
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
        className='py-40 px-50 flex gap-20 justify-center'
      >
        {workData.map((card, index) => (
          <div
            key={card.companyName}
            className={`transition-all duration-800 ${
              cardsVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
            style={{
              transitionDelay: cardsVisible ? `${index * 200}ms` : '0ms'
            }}
          >
            <WorkCards 
              colorA={card.colorA}
              colorB={card.colorB}
              header={card.header}
              companyName={card.companyName}
              image={card.image}
              footer={card.footer}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .hover\\:text-gray-600:hover {
          transition: color 0.3s ease;
        }
      `}</style>
    </>
  )
}

export default Work