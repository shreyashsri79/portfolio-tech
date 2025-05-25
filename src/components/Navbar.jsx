import React from "react";

export default function Navbar() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black bg-[#fafafa]">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif">
          <div className="text-2xl font-bold underline underline-offset-[6px]">
            shreyash neeraj
          </div>
  
          <ul className="flex space-x-8 text-lg font-semibold">
            {['work', 'skills', 'about', 'resume', 'contact'].map((item) => (
              <li key={item} className="underline underline-offset-[6px]">
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  