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

  // Enhanced animation variants
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 150,
      x: 80,
      rotate: 4,
      skewX: 3,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 120,
      x: 60,
      rotate: 3,
      skewX: 2,
      scale: 0.92,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.6,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonsVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      x: 40,
      rotate: 2,
      skewX: 1.5,
      scale: 0.94,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const sliderVariants = {
    hidden: {
      opacity: 0,
      y: 200,
      rotateX: 35,
      scale: 0.85,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 2,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div
      ref={heroRef}
      className="hero-section text-white h-[100vh] min-h-[900px] w-screen relative overflow-hidden px-36 pt-28 pb-0 flex flex-col gap-8 "
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
        className="font-normal text-9xl leading-28 uppercase w-full will-change-transform tracking-wide"
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
        className="text-xl font-extralight will-change-transform tracking-wide leading-relaxed "
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
        className="flex gap-4 will-change-transform"
      >
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-normal hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="border border-white px-6 py-3 rounded-full font-normal hover:bg-white hover:text-black transition duration-300"
        >
          Learn More
        </motion.a>
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
                <span className="text-xl font-light whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-300">
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
