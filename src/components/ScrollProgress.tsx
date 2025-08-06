"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.pageYOffset;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress(Math.round((currentProgress / scrollHeight) * 100));
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-emerald-600 transform-gpu origin-left transition-transform duration-150"
      style={{ 
        transform: `scaleX(${scrollProgress / 100})`,
        transformOrigin: "left"
      }}
    />
  );
}