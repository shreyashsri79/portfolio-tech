"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { eyeLeft, eyeRight } from "./catParts";

// All coordinates below are in the cat drawing's own units (viewBox 1804 x 2760).
const VIEW = { w: 1804, h: 2760 };
const EYES = [
  { id: "cat-eye-left", clip: eyeLeft, x: 736, y: 492 },
  { id: "cat-eye-right", clip: eyeRight, x: 1094, y: 478 },
];
const REACH = { x: 48, y: 22 }; // how far a pupil may drift from the middle of its eye
const NEAR = 150; // px around the cat where it starts to worry
const DROP = "M0-44C20-12 28 6 28 22a28 28 0 11-56 0C-28 6-20-12 0-44z";

const notes = {
  calm: "do not pet.",
  nervous: "…don't.",
  flustered: "…fine. once.",
};

export default function Cat() {
  const [mood, setMood] = useState("calm");
  const box = useRef(null);
  const pupils = useRef([]);
  const touch = useRef(false);

  useEffect(() => {
    let frame = 0;

    const track = (event) => {
      if (event.pointerType !== "mouse" || !box.current) return;
      const { clientX, clientY } = event;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = box.current.getBoundingClientRect();
        const scale = VIEW.w / rect.width;
        const x = (clientX - rect.left) * scale;
        const y = (clientY - rect.top) * scale;

        EYES.forEach((eye, i) => {
          const dx = x - eye.x;
          const dy = y - eye.y;
          const pull = Math.min(1, Math.hypot(dx, dy) / 500);
          const angle = Math.atan2(dy, dx);
          pupils.current[i]?.setAttribute(
            "transform",
            `translate(${Math.cos(angle) * REACH.x * pull} ${Math.sin(angle) * REACH.y * pull})`,
          );
        });

        const outside = Math.max(
          rect.left - clientX,
          clientX - rect.right,
          rect.top - clientY,
          clientY - rect.bottom,
        );
        setMood(outside <= 0 ? "flustered" : outside < NEAR ? "nervous" : "calm");
      });
    };

    window.addEventListener("pointermove", track);
    return () => {
      window.removeEventListener("pointermove", track);
      cancelAnimationFrame(frame);
    };
  }, []);

  // No cursor on a touch screen, so a tap is a pet.
  const tap = () => {
    if (!touch.current) return;
    setMood("flustered");
    setTimeout(() => setMood("calm"), 1400);
  };

  return (
    <figure className={`cat is-${mood}`}>
      <figcaption className="hand cat-note" aria-hidden="true">
        {notes[mood]}
      </figcaption>
      <svg className="cat-arrow" viewBox="0 0 46 34" aria-hidden="true">
        <path d="M3 5c14-4 30 3 37 22" />
        <path d="M31 22l9 6 3-11" />
      </svg>
      <button
        ref={box}
        type="button"
        className="cat-btn"
        aria-label="Pet the cat"
        onPointerDown={(event) => (touch.current = event.pointerType !== "mouse")}
        onClick={tap}
      >
        <Image
          src="/cat.svg"
          alt="Ink drawing of a stern cat in a tuxedo with a red rose on its lapel"
          width={902}
          height={1380}
          priority
          className="cat-img cat-front"
        />
        <svg className="cat-img cat-front" viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} aria-hidden="true">
          {EYES.map((eye, i) => (
            <g key={eye.id}>
              <clipPath id={eye.id}>
                <path transform={`translate(0 ${VIEW.h}) scale(1 -1)`} d={eye.clip} />
              </clipPath>
              <g clipPath={`url(#${eye.id})`}>
                <circle
                  ref={(node) => (pupils.current[i] = node)}
                  className="cat-pupil"
                  cx={eye.x}
                  cy={eye.y}
                  r={mood === "nervous" ? 17 : 29}
                />
              </g>
            </g>
          ))}
          <g className="cat-sweat">
            <path transform="translate(1462 400) rotate(18)" d={DROP} />
            <path transform="translate(1516 560) rotate(24) scale(.62)" d={DROP} />
            <path transform="translate(318 470) rotate(-20) scale(.72)" d={DROP} />
          </g>
        </svg>
        <Image
          src="/cat-flustered.svg"
          alt=""
          width={902}
          height={1380}
          className="cat-img cat-flustered"
        />
      </button>
    </figure>
  );
}
