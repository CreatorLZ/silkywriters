"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";
import InfiniteSlider from "./InfiniteSLider";

const Hero = () => {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Add subtle mouse tracking for extra smoothness
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // More refined scroll tracking with better offset
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Modify the spring configuration for quicker response
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 400, // Increased from 300
    damping: 40, // Decreased from 80
    mass: 0.5, // Decreased from 0.8
    restDelta: 0.001,
  });

  // Faster scale change
  const scale = useTransform(
    scrollYProgressSpring,
    [0, 0.2, 0.4, 0.6], // Shorter range
    [1, 0.95, 0.9, 0.8] // More dramatic scale
  );

  // Faster opacity transitions
  const opacityHeading = useTransform(
    scrollYProgressSpring,
    [0, 0.1, 0.2, 0.3, 0.4], // Much shorter range
    [1, 0.8, 0.5, 0.2, 0]
  );

  const opacityParagraph = useTransform(
    scrollYProgressSpring,
    [0, 0.08, 0.16, 0.24, 0.32],
    [1, 0.8, 0.5, 0.2, 0]
  );

  const opacityButtons = useTransform(
    scrollYProgressSpring,
    [0, 0.06, 0.12, 0.18, 0.24],
    [1, 0.8, 0.5, 0.2, 0]
  );

  // Enhanced parallax with more dramatic movement
  const yHeading = useTransform(scrollYProgressSpring, [0, 1], [0, -120]);
  const yParagraph = useTransform(scrollYProgressSpring, [0, 1], [0, -80]);
  const yButtons = useTransform(scrollYProgressSpring, [0, 1], [0, -50]);
  const ySlider = useTransform(scrollYProgressSpring, [0, 1], [0, 80]);

  const writingServices = [
    "Thesis Writing",
    "Dissertation Support",
    "Research Papers",
    "Academic Essays",
    "Ghost Writing",
    "Book Writing",
    "Literary Analysis",
    "YouTube Script Writing",
  ];

  // Natural reveal animations - just opacity and upward movement
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonsVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const sliderVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      ref={heroRef}
      className="hero-section text-white h-[100vh] min-h-[900px] w-screen relative overflow-hidden px-4 lg:px-36 pt-32 pb-0 flex flex-col gap-12 lg:gap-8 "
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.h2
        initial="hidden"
        animate="show"
        variants={headingVariants}
        style={{
          scale,
          opacity: opacityHeading,
          y: yHeading,
          transformOrigin: "center center",
        }}
        className="font-normal text-7xl lg:text-9xl leading-16 lg:leading-28 uppercase w-full will-change-transform tracking-wide"
      >
        WE SHAPE IDEAS WITH PRECISION
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="show"
        variants={paragraphVariants}
        style={{
          scale: useTransform(scale, (value) => 1 - (1 - value) * 0.3),
          opacity: opacityParagraph,
          y: yParagraph,
          transformOrigin: "center center",
        }}
        className="lg:text-base text-xs normal-text font-extralight will-change-transform tracking-wide leading-relaxed "
      >
        Your trusted partner for{" "}
        <span className="underline decoration-1 underline-offset-4 font-normal">
          academic writing,
        </span>{" "}
        <span className="underline decoration-1 underline-offset-4 font-normal">
          research,
        </span>{" "}
        and{" "}
        <span className="underline decoration-1 underline-offset-4 font-normal">
          Youtube scripts.
        </span>{" "}
        We deliver precision, depth, and creativity to bring your ideas to life.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={buttonsVariants}
        style={{
          scale: useTransform(scale, (value) => 1 - (1 - value) * 0.2),
          opacity: opacityButtons,
          y: yButtons,
          transformOrigin: "center center",
        }}
        className="flex gap-4 will-change-transform lg:mt-10 mt-8"
      >
        <div className="text-center">
          <button className="group relative bg-white text-black px-12 lg:px-10 py-2.5 lg:py-4 rounded-full font-normal text-lg transition-all duration-300  hover:shadow-lg hover:shadow-white/20 overflow-hidden">
            <span className="relative z-10">Get started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        <div className="text-center">
          <button className="group relative bg-transparent border border-white text-white px-12 lg:px-10 py-2.5 lg:py-4 rounded-full font-normal text-lg transition-all duration-300  hover:shadow-lg hover:shadow-white/20 overflow-hidden hover:bg-white hover:text-black">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </motion.div>

      {/* Bouncy Down Arrow */}
      <motion.div
        className="flex lg:hidden justify-center mt-0"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 18, 0], opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={sliderVariants}
        style={{
          scale: useTransform(
            scrollYProgressSpring,
            [0, 0.3, 0.6, 1],
            [1, 1.1, 1.2, 1.3]
          ),
          opacity: useTransform(
            scrollYProgressSpring,
            [0, 0.2, 0.6, 0.9, 1],
            [1, 1, 0.9, 0.6, 0.2]
          ),
          y: ySlider,
          transformOrigin: "center center",
        }}
        className="w-full will-change-transform mt-8"
      >
        <div className="relative">
          <InfiniteSlider duration={35} durationOnHover={100} className="py-4">
            {writingServices.map((service, index) => (
              <div
                key={index}
                className="min-w-fit px-8 flex items-center justify-center"
              >
                <span className="lg:text-xl text-base font-light whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {service}
                </span>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
