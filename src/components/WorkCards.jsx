"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import { Noto_Sans_Georgian } from 'next/font/google';

const title = Noto_Sans_Georgian({ subsets: ["latin"], weight: ["400", "400"] })

export default function WorkCards({colorA, colorB, header, companyName, image, footer}) {
  const cardRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const foreground = foregroundRef.current;
    
    if (!card || !foreground) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate magnetic effect (adjust strength by changing divisor)
      const magneticX = x * 0.1;
      const magneticY = y * 0.1;
      
      foreground.style.transform = `translate(${magneticX}px, ${magneticY}px)`;
    };

    const handleMouseLeave = () => {
      // Smooth return to original position
      foreground.style.transform = 'translate(0px, 0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative w-70 font-mono cursor-pointer">
      {/* Background offset layer */}
      <div className={`absolute bottom-5 right-5 w-full h-full ${colorA} border border-black z-0`} />
      
      {/* Foreground card */}
      <div 
        ref={foregroundRef}
        className="relative bg-white border border-black z-10 transition-transform duration-200 ease-out"
      >
        {/* Header */}
        <div className="p-3 border-b border-black">
          <p className="text-sm tracking-wide">{header}</p>
        </div>
        
        {/* Company Name */}
        <div className={`${title.className} p-3 border-b border-black font-mono`}>
          <h2 className="text-3xl font-extrabold">{companyName}</h2>
        </div>
        
        <div className={`${colorB} flex justify-center`}>
          {/* Image */}
          <Image
            src={image}
            height={200}
            width={150}
            alt={companyName}
            className='border-black p-5 object-fill h-50 w-50'
          />
        </div>
        
        {/* Footer */}
        <div className="p-3 border-y border-black">
          <p className="text-md font-semibold">{footer}</p>
        </div>
      </div>
    </div>
  );
}