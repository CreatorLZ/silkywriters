"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState("0%");

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updatePercentage = () => {
      smoothProgress.onChange((val) => {
        setProgressPercentage(`${Math.round(val * 100)}%`);
      });
    };

    updatePercentage();
  }, [smoothProgress]);

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Track scrolling state
    const handleScrollStart = () => setIsScrolling(true);
    const handleScrollEnd = () => {
      // Small delay to prevent flickering
      setTimeout(() => setIsScrolling(false), 100);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScrollStart);
    window.addEventListener("scrollend", handleScrollEnd);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScrollStart);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 lg:flex hidden"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        scale: isScrolling ? 1.5 : 0.1,
        opacity: isScrolling ? 1 : 0.7,
      }}
      transition={{ duration: 0.2 }}
    >
      {isScrolling && (
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Progress circle */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="251.2"
              style={{
                strokeDashoffset: 251.2,
              }}
              animate={{
                strokeDashoffset: 251.2 * (1 - smoothProgress.get()),
              }}
              transition={{ duration: 0.2 }}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>

          {/* Percentage text */}
          <motion.div className="absolute inset-0 flex items-center justify-center text-[8px] font-medium text-white">
            {progressPercentage}
          </motion.div>
        </div>
      )}

      {!isScrolling && (
        <div className="w-6 h-6 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      )}
    </motion.div>
  );
}
