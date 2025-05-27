"use client"
import React, { useState, useEffect, useRef } from 'react'
import WorkCards from './WorkCards'
import { Gabriela } from 'next/font/google'
import { Style_Script } from 'next/font/google'

const title = Gabriela({ subsets: ["latin"], weight: ["400", "400"] })
const desc = Style_Script({ subsets: ["latin"], weight: ["400", "400"] })
const Skills = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [visibleStats, setVisibleStats] = useState(false);
  const sectionRefs = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const skillsData = [
    {
      title: "Languages",
      items: ["Java", "Kotlin", "C++", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frameworks & Libraries", 
      items: ["Jetpack Compose", "React", "Next.js", "Express", "Node.js", "Tailwind CSS", "Vite", "Spring Boot"]
    },
    {
      title: "Tools & Platforms",
      items: ["Android Studio", "VS Code", "Git", "Postman", "GitHub",]
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "Room DB", "Firebase"]
    }
  ];

  return (
    <>
      {/* Animated Header */}
      <header id='skills' className="border-y border-black bg-[#fafafa] overflow-hidden">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif">
          <div className="text-2xl font-bold underline underline-offset-[6px] animate-slide-in-left">
            skills
          </div>
          <div className="text-lg font-light animate-slide-in-right">
            in order of proficiency
          </div>
        </nav>
      </header>

      {/* Skills Sections with Staggered Animation */}
      <div className="py-30 space-y-15">
        {skillsData.map((section, sectionIndex) => (
          <div 
            key={section.title} 
            ref={el => sectionRefs.current[sectionIndex] = el}
            data-index={sectionIndex}
            className={`flex flex-col lg:flex-row gap-10 lg:gap-50 items-center w-screen justify-center transition-all duration-700 ${
              visibleSections.has(sectionIndex) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className={`${title.className} text-2xl font-extrabold text-center w-32 shrink-0`}>{section.title}</h2>
            <div className="flex flex-wrap gap-3 p-3 md:w-150 justify-center">
              {section.items.map((item, itemIndex) => (
                <div
                  key={item}
                  className={`${title.className} border border-black px-3 py-1 font-bold transition-all duration-500  hover:bg-red-600 hover:text-white cursor-pointer ${
                    visibleSections.has(sectionIndex)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className='py-5 bg-[#fafafa]' />

      {/* GitHub Stats with Entrance Animation */}
      <div className='bg-[#fafafa]' ref={statsRef}>
        <div className={`w-screen flex justify-center transition-all duration-800 ${
          visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className={`${title.className} text-3xl lg:text-5xl font-bold `}>My Github Stats</h2>
        </div>
        
        <div className={`w-screen flex justify-center py-15 transition-all duration-1000 delay-200 ${
          visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className='flex flex-wrap w-300 justify-center gap-10 p-10'>
            {[
              "repos-per-language",
              "most-commit-language", 
              "productive-time",
              "stats",
              "profile-details"
            ].map((cardType, index) => (
              <div
                key={cardType}
                className={`transition-all duration-300 hover:scale-103 ${
                  visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <img
                  src={`http://github-profile-summary-cards.vercel.app/api/cards/${cardType}?username=shreyashsri79&theme=graywhite${cardType === 'productive-time' ? '&utcOffset=8' : ''}`}
                  alt="GitHub Stats"
                  className="border transition-transform duration-100 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s both;
        }
      `}</style>
    </>
  )
}

export default Skills