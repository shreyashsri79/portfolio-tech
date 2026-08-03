'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Gabriela } from 'next/font/google';

const desc = Gabriela({ subsets: ["latin"], weight: ["400", "400"] })

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const items = ["text1", "text2"];

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
        className='w-screen flex flex-wrap gap-10 px-10 py-20 justify-center'
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`w-[30rem] flex items-center shadow-2xl p-8 hover:scale-105 bg-white rounded-md relative overflow-hidden group cursor-pointer ${getItemAnimation(idx)}`}
            style={{
              transformOrigin: 'center',
              animationDelay: `${idx * 150}ms`
            }}
          >
            {/* Content */}
            <p className={`${desc.className} font-bold relative z-10 text-lg leading-relaxed transition-colors duration-300`}>
              {item === "text1" ? (
                <>
                  I build the layer most people never look at. Right now that means
                  <span className="text-red-600 font-bold"> QUIC transports</span>,
                  <span className="text-red-600 font-bold"> wire formats</span>, and the kind of
                  kernel I/O bug that costs you a syscall on every twelve bytes. I write the
                  specification before the code, log every design decision with its reasoning,
                  and keep the ones I got wrong in the file rather than quietly deleting them.
                </>
              ) : (
                <>
                  My favourite kind of work is the sort where you read the byte path end to end
                  and find six things nobody profiled for. Everything I build runs
                  <span className="text-red-600 font-bold"> peer to peer</span>, on
                  <span className="text-red-600 font-bold"> hardware you already own</span>, with
                  no server in the middle taking a cut. Because technology should not just exist
                  for those who could afford it.
                </>
              )}
            </p>

            {/* Animated border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r rounded-md transition-all duration-300"></div>

            {/* Scale and lift effect */}
            <div className="absolute inset-0 rounded-md transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-2"></div>
          </div>
        ))}
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