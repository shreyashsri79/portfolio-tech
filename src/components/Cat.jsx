"use client";
import { useState } from "react";
import Image from "next/image";

export default function Cat() {
  const [petted, setPetted] = useState(false);

  return (
    <figure className={`cat ${petted ? "is-petted" : ""}`}>
      <figcaption className="hand cat-note" aria-hidden="true">
        <span>do not pet.</span>
        <span>…fine. once.</span>
      </figcaption>
      <svg className="cat-arrow" viewBox="0 0 46 34" aria-hidden="true">
        <path d="M3 5c14-4 30 3 37 22" />
        <path d="M31 22l9 6 3-11" />
      </svg>
      <button
        type="button"
        className="cat-btn"
        aria-label="Pet the cat"
        aria-pressed={petted}
        onMouseEnter={() => setPetted(true)}
        onMouseLeave={() => setPetted(false)}
        onClick={() => setPetted((value) => !value)}
      >
        <Image
          src="/cat.svg"
          alt="Ink drawing of a stern cat in a tuxedo with a red rose on its lapel"
          width={902}
          height={1380}
          priority
          className="cat-img cat-calm"
        />
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
