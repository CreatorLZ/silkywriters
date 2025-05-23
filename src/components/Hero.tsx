import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import InfiniteSlider from "./InfiniteSLider";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  // Track scroll progress within the hero section
  const { scrollYProgress } = useScroll({ target: heroRef });

  // Add spring easing for slightly faster transitions
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 80, // Faster response
    damping: 40, // Smooth with minimal oscillation
  });

  // Map scroll progress to skewX, rotateY, translateZ, opacity, and y
  const skewX = useTransform(
    scrollYProgressSpring,
    [0, 0.1, 0.5, 1],
    [0, -3, -5, -5]
  ); // Unchanged
  const rotateY = useTransform(
    scrollYProgressSpring,
    [0, 0.1, 0.5, 1],
    [0, 6, 10, 10]
  ); // Stronger 3D rotation
  const translateZ = useTransform(
    scrollYProgressSpring,
    [0, 0.1, 0.5, 1],
    [0, -30, -40, -40]
  ); // Stronger 3D depth
  const opacityHeading = useTransform(
    scrollYProgressSpring,
    [0, 0.4, 1],
    [1, 1, 0.3]
  ); // Unchanged
  const opacityParagraph = useTransform(
    scrollYProgressSpring,
    [0, 0.3, 1],
    [1, 1, 0.4]
  ); // Unchanged
  const opacityButtons = useTransform(
    scrollYProgressSpring,
    [0, 0.2, 1],
    [1, 1, 0.5]
  ); // Unchanged
  const opacitySlider = useTransform(
    scrollYProgressSpring,
    [0, 0.2, 1],
    [1, 1, 0.5]
  ); // Unchanged
  const yHeading = useTransform(scrollYProgressSpring, [0, 1], [0, -50]); // Unchanged parallax
  const yParagraph = useTransform(scrollYProgressSpring, [0, 1], [0, -30]); // Unchanged
  const yButtons = useTransform(scrollYProgressSpring, [0, 1], [0, -20]); // Unchanged
  const ySlider = useTransform(scrollYProgressSpring, [0, 1], [0, 50]); // Unchanged

  const writingServices = [
    "Thesis Writing",
    "Dissertation Support",
    "Research Papers",
    "Academic Essays",
    "Ghost Writing",
    "Creative Writing",
    "Technical Writing",
    "Blog Posts",
    "Content Strategy",
    "Book Writing",
    "Grant Writing",
    "White Papers",
    "Case Studies",
    "Literary Analysis",
    "Script Writing",
    "Web Content",
  ];

  // Main heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: 100, x: 40, rotate: 2, skewX: 1, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Paragraph animation
  const paragraphVariants = {
    hidden: { opacity: 0, y: 80, x: 30, rotate: 1, skewX: 1, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 80, x: 30, rotate: 1, skewX: 1, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const sliderVariants = {
    hidden: { opacity: 0, y: 200, rotateX: 45 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div
      ref={heroRef}
      className="text-white h-[100vh] min-h-[900px] w-screen relative overflow-scroll px-36 pt-28 pb-0  flex flex-col gap-12"
      style={{ perspective: "1000px" }}
    >
      <motion.h2
        initial="hidden"
        animate="show"
        variants={headingVariants}
        style={{
          skewX,
          rotateY,
          translateZ,
          opacity: opacityHeading,
          y: yHeading,
        }}
        className="font-extrabold text-8xl leading-28 uppercase w-full"
      >
        We craft stories that matter
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="show"
        variants={paragraphVariants}
        style={{
          skewX,
          rotateY,
          translateZ,
          opacity: opacityParagraph,
          y: yParagraph,
        }}
        className="text-xl font-light"
      >
        Your one-stop solution for
        <span className="underline decoration-1 underline-offset-4 font-bold">
          {" "}
          all your writing needs.
        </span>{" "}
        Whether you need captivating content, engaging blog posts, or polished
        academic papers, we've got you covered. We bring your ideas to life with
        flair and precision.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={buttonsVariants}
        style={{
          skewX,
          rotateY,
          translateZ,
          opacity: opacityButtons,
          y: yButtons,
        }}
        className="flex gap-4"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
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
          skewX,
          rotateY,
          translateZ,
          opacity: opacitySlider,
          y: ySlider,
        }}
        className="absolute bottom-[260px] right-[-200px] w-[150%] transform-gpu rotate-[-12deg] perspective-1000"
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
                <span className="text-2xl font-light whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
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
