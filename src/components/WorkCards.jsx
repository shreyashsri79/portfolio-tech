"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Gabriela } from "next/font/google";
import clsx from "clsx";

const titleFont = Gabriela({ subsets: ["latin"], weight: "400" });

export default function WorkCards({
  colorA,
  colorB,
  header,
  companyName,
  image,
  description,
  footer,
  bigWidth = false,
  link,
}) {
  const cardRef = useRef(null);
  const foregroundRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const foreground = foregroundRef.current;
    if (!card || !foreground) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      foreground.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const handleMouseLeave = () => {
      foreground.style.transform = "translate(0px, 0px)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const truncateDescription = (text, wordLimit = 20) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length <= wordLimit
      ? text
      : words.slice(0, wordLimit).join(" ") + "...";
  };

  const handleClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={cardRef}
      className={clsx(
        "relative font-mono",
        bigWidth ? "w-[360px]" : "w-[280px]"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background layer */}
      <div
        className={clsx(
          "absolute bottom-5 right-5 w-full h-full border border-black z-0",
          colorA
        )}
      />

      {/* Foreground (clickable) */}
      <div
        ref={foregroundRef}
        onClick={handleClick}
        className="relative bg-white border border-black z-10 cursor-pointer transition-transform duration-200 ease-out will-change-transform"
        style={{ pointerEvents: "auto" }}
      >
        {/* Header */}
        <div className="p-3 border-b border-black">
          <p className="text-sm tracking-wide">{header}</p>
        </div>

        {/* Company Name */}
        <div className={clsx(`${titleFont.className} p-3 border-b border-black`)}>
          <h2 className="text-3xl font-extrabold">{companyName}</h2>
        </div>

        {/* Image */}
        <div className={clsx("flex justify-center", colorB)}>
          <Image
            src={image}
            alt={companyName}
            width={bigWidth ? 300 : 180}
            height={200}
            className="border-black p-5 object-contain pointer-events-none"
          />
        </div>

        {/* Description */}
        {description && (
          <div className="p-3 border-b border-black space-y-2 overflow-hidden transition-all duration-300 ease-in-out">
            <p className={`${titleFont.className} text-sm`}>
              {hovered ? description : truncateDescription(description, 20)}
            </p>
          </div>
        )}
        

        {/* Footer */}
        <div className={clsx(`${titleFont.className} p-3 border-y border-black`)}>
          <p className="text-md font-semibold">{footer}</p>
        </div>
      </div>
    </div>
  );
}
