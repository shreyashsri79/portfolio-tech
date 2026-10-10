"use client";
import { useEffect } from "react";

// Hides [data-reveal] elements that start below the fold, then shows each one as it scrolls in.
// Hiding is opt-in per element (.will-reveal), so anything this never touched, or that React
// re-creates later, stays visible.
export default function ScrollEffects() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("will-reveal");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    const waiting = [];
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("will-reveal");
      observer.observe(el);
      waiting.push(el);
    });

    return () => {
      observer.disconnect();
      waiting.forEach((el) => el.classList.remove("will-reveal"));
    };
  }, []);

  return null;
}
