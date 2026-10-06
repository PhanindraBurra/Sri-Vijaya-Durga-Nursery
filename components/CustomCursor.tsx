"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleInteractiveHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove", handleInteractiveHover);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousemove", handleInteractiveHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (reducedMotion || !isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Leaf Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-500/50 bg-emerald-400/10 backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "rgba(212, 175, 55, 0.8)" : "rgba(16, 185, 129, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      />
      {/* Tiny Leaf Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-500"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
    </div>
  );
}
