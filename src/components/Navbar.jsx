"use client"
import React, { useState } from "react";
import { Style_Script } from "next/font/google";

const title = Style_Script({ subsets: ["latin"], weight: ["400", "400"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuIcon = (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );

  const closeIcon = (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black bg-[#fafafa]">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif">
        <div className="text-2xl font-bold underline underline-offset-[6px]">
          shreyash neeraj
        </div>

        {/* Hamburger Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-black focus:outline-none"
        >
          {isOpen ? closeIcon : menuIcon}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-row justify-around border-y lg:border-y-0 absolute lg:static top-16 left-0 right-0 bg-[#fafafa] lg:bg-transparent z-40 lg:z-auto space-y-4 lg:space-y-0 lg:space-x-8 text-lg font-semibold px-6 py-4 lg:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          {["work", "skills", "about", "resume", "contact"].map((item) => (
            <li
              key={item}
              className="underline hover:text-red-600 underline-offset-[6px]"
            >
              <a
                href={item === "resume" ? "/resume.pdf" : `#${item}`}
                onClick={() => setIsOpen(false)} // close menu on link click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
