"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: string;
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn" | "staggerChildren";
  triggerOnView?: boolean;
  staggerDelay?: number;
}

export default function AnimatedDiv({
  children,
  className = "",
  delay = 0,
  duration = "0.6s",
  animation = "fadeInUp",
  triggerOnView = true,
  staggerDelay = 0.1
}: AnimatedDivProps) {
  const [isVisible, setIsVisible] = useState(!triggerOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView, delay]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (animation) {
      case "fadeIn":
        return "animate-fade-in";
      case "fadeInUp":
        return "animate-fade-in-up";
      case "slideInLeft":
        return "animate-slide-in-left";
      case "slideInRight":
        return "animate-slide-in-right";
      case "scaleIn":
        return "animate-scale-in";
      case "staggerChildren":
        return "animate-stagger-children";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        getAnimationClass(),
        className
      )}
      style={{
        animationDuration: duration,
        animationFillMode: "both",
        animationDelay: triggerOnView ? "0s" : `${delay}s`
      }}
    >
      {children}
    </div>
  );
}