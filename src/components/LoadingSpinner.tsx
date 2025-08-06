"use client";

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

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-2 border-${color} border-t-transparent rounded-full animate-spin`}
      />
      <div
        className={`absolute ${sizeClasses[size]} bg-${color} rounded-full opacity-20 animate-pulse`}
      />
    </div>
  );
}

// Alternative loading animation - Dots
export function LoadingDots({ color = "emerald-600" }: { color?: string }) {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-2 h-2 bg-${color} rounded-full animate-bounce`}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
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
  return (
    <div className={`${width} ${height} bg-gray-200 rounded overflow-hidden relative ${className}`}>
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"
      />
    </div>
  );
}