"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Style_Script, Gabriela } from 'next/font/google'

const title = Style_Script({ subsets: ["latin"], weight: ["400", "400"] })
const desc = Gabriela({ subsets: ["latin"], weight: ["400", "400"] })

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex h-screen w-screen justify-center items-center gap-20 bg-[#fafafa] overflow-hidden'>
      {/* Text Content */}
      <div className='flex flex-col gap-15'>
        <div className='flex flex-col gap-5'>
          {/* Name Animation */}
          <p className={`${title.className} tracking- text-8xl flex gap-10`}>
            <span className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
            >
              Shreyash
            </span>
            <span className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
            >
              Neeraj
            </span>
          </p>
          
          {/* Developer Title */}
          <p className={`${title.className} text-4xl transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: '600ms' }}
          >
            Developer
          </p>
        </div>
        
        {/* Description with Typing Effect */}
        <div className={`transition-all duration-1200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: '800ms' }}
        >
          <p className={`${desc.className} max-w-150`}>
            —hi iam <span className='text-red-700 font-extrabold animate-pulse'>shreyash,</span> <br />
            a full-stack developer, problem solver, android enthusiast, web tinkerer,
            backend builder, design admirer, tech explorer — and a second-year
            engineering student shaping thoughtful digital experiences.
          </p>
        </div>
      </div>

      {/* Image with Enhanced Animations */}
      <div className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-0 translate-x-10 scale-95'
      }`}
      style={{ transitionDelay: '1000ms' }}
      >
        <div
          className="relative w-50 h-80 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Normal Image */}
          <Image
            src="/hero_img.png"
            alt="default"
            fill
            className={`transition-all duration-300 ease-in-out  ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Hover Image with Bounce Effect */}
          <Image
            src="/hero_img_frustrated.png"
            alt="hover"
            fill
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isHovered 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          />
          
          {/* Floating Animation on Image Container */}
          <div className="absolute inset-0 animate-float pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-red {
          0%, 100% {
            color: rgb(185, 28, 28);
          }
          50% {
            color: rgb(239, 68, 68);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse-red 2s ease-in-out infinite;
        }

        /* Subtle background animation */
        .bg-\\[\\#fafafa\\] {
          background: linear-gradient(-45deg, #fafafa, #f5f5f5, #f0f0f0, #fafafa);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero