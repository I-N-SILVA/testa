"use client";
import { motion } from "motion/react";
import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function LoadingSpinner({ 
  size = "md", 
  color = "emerald-600" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        variants={spinVariants}
        animate="animate"
        className={`${sizeClasses[size]} border-2 border-${color} border-t-transparent rounded-full`}
      />
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className={`absolute ${sizeClasses[size]} bg-${color} rounded-full opacity-20`}
      />
    </div>
  );
}

// Alternative loading animation - Dots
export function LoadingDots({ color = "emerald-600" }: { color?: string }) {
  const dotVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          custom={index}
          variants={dotVariants}
          animate="animate"
          className={`w-2 h-2 bg-${color} rounded-full`}
        />
      ))}
    </div>
  );
}

// Skeleton loading animation
export function SkeletonLoader({ 
  width = "w-full", 
  height = "h-4",
  className = ""
}: { 
  width?: string; 
  height?: string;
  className?: string;
}) {
  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className={`${width} ${height} bg-gray-200 rounded overflow-hidden relative ${className}`}>
      <motion.div
        variants={shimmerVariants}
        animate="animate"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
      />
    </div>
  );
}