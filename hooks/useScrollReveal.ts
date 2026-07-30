"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]); // Only re-run if options change, avoid object dependency

  return ref;
}
