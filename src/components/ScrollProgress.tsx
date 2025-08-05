"use client";
import { motion, useScroll, useSpring } from "motion/react";
import React from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-emerald-600 transform-gpu origin-left"
      style={{ scaleX }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollYProgress }}
    />
  );
}