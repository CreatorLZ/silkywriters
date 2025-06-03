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

  // More dramatic and faster transform values
  const skewX = useTransform(
    scrollYProgressSpring,
    [0, 0.15, 0.35, 0.6, 0.8], // Compressed range
    [0, -2, -6, -10, -15] // Reduced skew values
  );

  const skewY = useTransform(
    scrollYProgressSpring,
    [0, 0.15, 0.35, 0.6, 0.8],
    [0, 1, 3, 5, 7] // Reduced tilt values
  );

  const rotateY = useTransform(
    scrollYProgressSpring,
    [0, 0.1, 0.3, 0.5, 0.7],
    [0, 3, 8, 15, 20] // Reduced rotation values
  );

  const rotateX = useTransform(
    scrollYProgressSpring,
    [0, 0.15, 0.35, 0.6, 0.8],
    [0, 1, 3, 6, 8] // Reduced rotation values
  );

  const translateZ = useTransform(
    scrollYProgressSpring,
    [0, 0.15, 0.35, 0.6, 0.8],
    [0, -30, -80, -150, -200]
  );

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
      className="text-white h-[100vh] min-h-[900px] w-screen relative overflow-hidden px-36 pt-16 pb-0 flex flex-col gap-12 "
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
          skewX,
          skewY,
          rotateY,
          rotateX,
          translateZ,
          scale,
          opacity: opacityHeading,
          y: yHeading,
          transformOrigin: "center center",
        }}
        className="font-extrabold text-8xl leading-tight uppercase w-full will-change-transform"
      >
        WE SHAPE IDEAS WITH PRECISION
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="show"
        variants={paragraphVariants}
        style={{
          skewX: useTransform(skewX, (value) => value * 0.6),
          skewY: useTransform(skewY, (value) => value * 0.6),
          rotateY: useTransform(rotateY, (value) => value * 0.7),
          rotateX: useTransform(rotateX, (value) => value * 0.5),
          translateZ: useTransform(translateZ, (value) => value * 0.5),
          scale: useTransform(scale, (value) => 1 - (1 - value) * 0.3),
          opacity: opacityParagraph,
          y: yParagraph,
          transformOrigin: "center center",
        }}
        className="text-xl font-light will-change-transform"
      >
        Your trusted partner for{" "}
        <span className="underline decoration-1 underline-offset-4 font-bold">
          academic writing,
        </span>{" "}
        <span className="underline decoration-1 underline-offset-4 font-bold">
          research,
        </span>{" "}
        and{" "}
        <span className="underline decoration-1 underline-offset-4 font-bold">
          Youtube scripts.
        </span>{" "}
        We deliver precision, depth, and creativity to bring your ideas to life.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={buttonsVariants}
        style={{
          skewX: useTransform(skewX, (value) => value * 0.4),
          skewY: useTransform(skewY, (value) => value * 0.4),
          rotateY: useTransform(rotateY, (value) => value * 0.5),
          rotateX: useTransform(rotateX, (value) => value * 0.3),
          translateZ: useTransform(translateZ, (value) => value * 0.3),
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
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
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
          className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
        >
          Learn More
        </motion.a>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={sliderVariants}
        style={{
          skewX: useTransform(skewX, (value) => value * 0.2),
          skewY: useTransform(skewY, (value) => value * 0.2),
          rotateY: useTransform(rotateY, (value) => value * 0.3),
          rotateX: useTransform(rotateX, (value) => value * 0.2),
          translateZ: useTransform(translateZ, (value) => value * 0.1),
          scale: useTransform(
            scrollYProgressSpring,
            [0, 0.3, 0.6, 1],
            [1, 1.2, 1.4, 1.6]
          ),
          opacity: useTransform(
            scrollYProgressSpring,
            [0, 0.2, 0.6, 0.9, 1],
            [1, 1, 0.9, 0.6, 0.2]
          ),
          y: ySlider,
          transformOrigin: "center center",
        }}
        className="absolute bottom-[260px] right-[-200px] w-[150%] transform-gpu rotate-[-12deg] will-change-transform"
      >
        <div className="relative">
          <InfiniteSlider
            duration={35}
            durationOnHover={100}
            className="py-4 ml-[0px]"
          >
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
