"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface CustomScrollbarProps {
  sections?: string[];
  barColor?: string;
  thumbColor?: string;
  hoverColor?: string;
  activeColor?: string;
}

export default function CustomScrollbar({
  sections = [],
  barColor = "rgba(255, 255, 255, 0.1)",
  thumbColor = "rgba(255, 255, 255, 0.5)",
  hoverColor = "rgba(255, 255, 255, 0.8)",
  activeColor = "white",
}: CustomScrollbarProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Get scroll progress
  const { scrollYProgress } = useScroll();

  // Create a smoother version of the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to thumb position
  const thumbHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Calculate document height for dragging
  const [documentHeight, setDocumentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Update dimensions on mount and resize
    const updateDimensions = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
      setViewportHeight(window.innerHeight);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Track active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjusted threshold
      const sectionIds = [
        "home",
        "work",
        "services",
        "testimonials",
        "contact",
        "faq",
      ];

      // Get all sections by their IDs
      const sectionElements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      sectionElements.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle drag interactions
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (event: React.PointerEvent) => {
    if (!isDragging || !scrollbarRef.current) return;

    // Get mouse/touch position
    const clientY = event.clientY;

    // Get scrollbar position and dimensions
    const { top, height } = scrollbarRef.current.getBoundingClientRect();

    // Calculate new scroll position
    const percentY = Math.min(Math.max((clientY - top) / height, 0), 1);
    const scrollTarget = percentY * (documentHeight - viewportHeight);

    // Scroll to position
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  // Handle click on scrollbar (jump to position)
  const handleBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollbarRef.current || isDragging) return;

    // Ignore clicks on the thumb
    if (thumbRef.current && thumbRef.current.contains(event.target as Node)) {
      return;
    }

    // Get click position
    const { top, height } = scrollbarRef.current.getBoundingClientRect();
    const percentY = (event.clientY - top) / height;

    // Calculate new scroll position
    const scrollTarget = percentY * (documentHeight - viewportHeight);

    // Scroll to position
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  // Handle section indicator click
  const handleSectionClick = (index: number) => {
    // Map section indices to their corresponding IDs
    const sectionIds = [
      "home",
      "work",
      "services",
      "testimonials",
      "contact",
      "faq",
    ];
    const targetId = sectionIds[index];

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const sectionTop =
          targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Custom scrollbar */}
      <motion.div
        ref={scrollbarRef}
        className="fixed right-6 top-1/2 h-1/2 w-1 -translate-y-1/2 rounded-full z-50"
        style={{ backgroundColor: barColor }}
        onClick={handleBarClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        animate={{ opacity: isHovering || isDragging ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          ref={thumbRef}
          className="absolute left-0 w-full rounded-full cursor-pointer"
          style={{
            top: 0,
            height: thumbHeight,
            backgroundColor: isDragging
              ? activeColor
              : isHovering
              ? hoverColor
              : thumbColor,
            scale: isDragging ? 1.5 : isHovering ? 1.2 : 1,
          }}
          onPointerDown={handleDragStart}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
          onPointerMove={handleDrag}
        />
      </motion.div>

      {/* Section indicators */}
      {sections.length > 0 && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
          {sections.map((section, index) => (
            <motion.button
              key={index}
              className="w-3 h-3 rounded-full relative group"
              style={{
                backgroundColor:
                  activeSection === index ? activeColor : barColor,
                scale: activeSection === index ? 1.1 : 0.8,
              }}
              whileHover={{ scale: 1.5 }}
              onClick={() => handleSectionClick(index)}
            >
              <motion.span
                className="absolute left-0 top-0 w-full h-full rounded-full"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={
                  activeSection === index
                    ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }
                    : {}
                }
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                }}
                style={{ backgroundColor: activeColor }}
              />

              {/* Tooltip */}
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {section}
              </span>
            </motion.button>
          ))}
        </div>
      )}

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-white to-[goldenrod] z-50"
        style={{
          scaleX: smoothProgress,
          transformOrigin: "0%",
          width: "100%",
        }}
      />
    </>
  );
}
