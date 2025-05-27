'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import { Gabriela } from 'next/font/google';

const desc = Gabriela({ subsets: ["latin"], weight: ["400", "400"] })

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const items = [
    "/about1.jpeg",
    "text1",
    "/about2.jpeg",
    "/about7.jpeg",
    "/about4.jpeg",
    "/about10.jpeg",
    "text2",
    "/about9.jpeg"
  ];

  useEffect(() => {
    // Header animation
    const timer1 = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

    // Intersection Observer for container
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Stagger item animations
          items.forEach((_, index) => {
            setTimeout(() => {
              setItemsVisible(prev => [...prev, index]);
            }, index * 150 + 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timer1);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const getItemAnimation = (index) => {
    const isVisible = itemsVisible.includes(index);
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      return `${baseClasses} opacity-0 translate-y-10 scale-95`;
    }
    
    return `${baseClasses} opacity-100 translate-y-0 scale-100`;
  };

  const commonTransition = 'transition-all duration-700 ease-out';

  return (
    <>
      <header
        id='about'
        ref={headerRef}
        className="border-y border-black bg-[#fafafa] overflow-hidden relative"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
        
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif relative z-10">
          <div className={`text-2xl font-bold underline underline-offset-[6px] ${commonTransition} ${
            headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            about
          </div>
          <div className={`flex gap-3 text-xl tracking-wider ${commonTransition} ${
            headerVisible ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-10'
          }`}>
            <p className="relative">
              a little about me <span className='hover:text-red-600 duration-100'>:)</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
            </p>
          </div>
        </nav>
      </header>

      <div 
        ref={containerRef}
        className='w-screen flex flex-wrap gap-10 px-20 py-20 justify-center'
      >
        {items.map((item, idx) =>
          item === "text1" || item === "text2" ? (
            <div
              key={idx}
              className={`  md:h-60 w-[30rem] flex items-center shadow-2xl p-5 hover:scale-105 bg-white rounded-md relative overflow-hidden group cursor-pointer ${getItemAnimation(idx)}`}
              style={{ 
                transformOrigin: 'center',
                animationDelay: `${idx * 150}ms`
              }}
            >
              
              {/* Content */}
              <p className={`${desc.className} font-bold relative z-10 text-lg leading-relaxed transition-colors duration-300`}>
  {item === "text1" ? (
    <>
      I'm a full-stack developer who blends logic with imagination. Whether it's building 
      <span className="text-red-600 font-bold"> sleek android apps </span> 
      or crafting 
      <span className="text-red-600 font-bold"> responsive web experiences</span>, I treat every project like a digital canvas. 
      I believe clean code is poetry, and I aim to write verses that both humans and machines understand.
    </>
  ) : (
    <>
      Beyond the screen, I’m a curious learner, always chasing the next 
      <span className="text-red-600 font-bold"> "aha!" moment</span>—be it in tech, design, or life. 
      Fueled by 
      <span className="text-red-600 font-bold"> maggi and late-night ideas</span>, I thrive on turning complex problems into elegant solutions. 
      If innovation were a game, I’d be playing it in hard mode—just for the thrill.
    </>
  )}
</p>

              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r rounded-md transition-all duration-300"></div>
              
              {/* Scale and lift effect */}
              <div className="absolute inset-0 rounded-md transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-2"></div>
            </div>
          ) : (
            <div
              key={idx}
              className={`h-60 w-60 shadow-2xl rounded-md overflow-hidden group cursor-pointer relative ${getItemAnimation(idx)}`}
              style={{ 
                transformOrigin: 'center',
                animationDelay: `${idx * 150}ms`
              }}
            >
              {/* Image container with multiple hover effects */}
              <div className="relative w-full h-full transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-2">
                <Image
                  src={item}
                  width={240}
                  height={240}
                  quality={100}
                  alt="About image"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                />
                
                
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-md transition-all duration-300"></div>
              </div>
              
              {/* Floating shadow effect */}
              <div className="absolute inset-0 rounded-md transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 pointer-events-none"></div>
            </div>
          )
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  )
}

export default About;