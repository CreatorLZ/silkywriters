"use client";

import type React from "react";
import { useState, useEffect, useRef, createRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import woman2 from "../assets/woman2.jpg";
import nelson from "../assets/nelson.jpg";
import disabled from "../assets/disabled.jpg";
import trump from "../assets/trump.jpg";

import InfiniteSlider from "./InfiniteSLider";
import { Link } from "react-router-dom";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
];

// Define the Project interface
interface Project {
  id: number;
  title: string;
  continuation?: string;
  image: string;
  number: string;
  category: string;
  borderColor: string;
  fillColor: string;
}

const projectLinks: Record<string, string> = {
  "INTERNATIONAL RULE OF LAW": "/work/rule-of-law",
  "WOMEN SECLUSION": "/work/women-seclusion",
  "AFRICAN INDEPENDENCE": "/work/african-independence",
  "SOCIAL EXCLUSION": "/work/social-exclusion",
};

// Define the component
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "WOMEN SECLUSION",
      continuation: "IN CONTEMPORARY SOCIETY",
      image: woman2,
      number: "01",
      category: "RESEARCH",
      borderColor: "goldenrod",
      fillColor: "goldenrod",
    },
    {
      id: 2,
      title: "INTERNATIONAL RULE OF LAW",
      continuation: "THE DONALD TRUMP DEVIATION",
      image: trump,
      number: "02",
      category: "RESEARCH",
      borderColor: "#FF4C4C",
      fillColor: "#FF4C4C",
    },
    {
      id: 3,
      title: "AFRICAN INDEPENDENCE",
      continuation: "AND POLITICS",
      image: nelson,
      number: "03",
      category: "RESEARCH",
      borderColor: "#4C8BF5",
      fillColor: "#4C8BF5",
    },
    {
      id: 4,
      title: "SOCIAL EXCLUSION",
      continuation: "OF PERSONS WITH DISABILITY",
      image: disabled,
      number: "04",
      category: "RESEARCH",
      borderColor: "#4CAF50",
      fillColor: "#4CAF50",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scales, setScales] = useState<number[]>(projects.map(() => 1));
  const [isMobile, setIsMobile] = useState(false);
  const projectRefs = useRef(projects.map(() => createRef<HTMLDivElement>()));
  const featuredSectionRef = useRef<HTMLDivElement>(null);

  // Handle responsive state
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkIsMobile();

    // Add resize listener
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Create scroll tracking for each project section
  const scrollYProgresses = projects.map(
    (_, index) =>
      useScroll({
        target: projectRefs.current[index],
        offset: ["start end", "end start"],
      }).scrollYProgress
  );

  // Smooth x transformation for projects
  const xs = scrollYProgresses.map((scrollYProgress) => {
    const positions = isMobile ? [0, 0, 0] : [50, 0, -50];
    const x = useTransform(scrollYProgress, [0.2, 0.5, 0.8], positions, {
      clamp: false,
    });
    return useSpring(x, { stiffness: 50, damping: 40 });
  });

  // Track scroll progress for the entire page
  const { scrollYProgress } = useScroll();

  // Transform x position for the "FEATURED WORK" div
  const xTransform = useTransform(
    scrollYProgress,
    [0.26, 0.261, 0.62, 0.625], // Scroll progress: 28% to 28.2% (slide in), 68% to 69% (slide out)
    [-230, 0, 0, -230] // Slide in from -230px (off-screen) to 0px, stay at 0px, then slide out to -230px
  );

  // Apply smooth animation to the x transform
  const xSpring = useSpring(xTransform, { stiffness: 100, damping: 20 });

  // Transform x position for the "DISCUSS YOUR PROJECT" widget
  const xTransform2 = useTransform(
    scrollYProgress,
    [0.67, 0.671, 0.96, 0.965], // Start sliding in at 67%, fully visible at 67.1%, stay until 96%, then slide out at 96.5%
    [-400, 0, 0, -400] // Slide in from -300px (off-screen) to 0px, then stay at 0px
  );

  const xSpring2 = useSpring(xTransform2, { stiffness: 100, damping: 20 });

  // Handle background image scale
  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const projectRect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const scrollProgress = Math.min(
            Math.max((windowHeight - projectRect.top) / windowHeight, 0),
            1
          );
          const newScale = 1 + scrollProgress * 0.4;
          setScales((prev) =>
            prev.map((scale, i) => (i === index ? newScale : scale))
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax Slide component
  const Slide = ({
    src,
    direction,
    left,
    progress,
  }: {
    src: string;
    direction: "left" | "right";
    left: string;
    progress: any;
  }) => {
    const translateX = useTransform(
      progress,
      [0, 1],
      [
        300 * (direction === "left" ? -1 : 1),
        -300 * (direction === "left" ? -1 : 1),
      ]
    );
    return (
      <motion.div
        style={{ x: translateX, left }}
        className="relative flex whitespace-nowrap mb-8"
      >
        <Phrase src={src} />
        <Phrase src={src} />
        <Phrase src={src} />
      </motion.div>
    );
  };

  // Parallax Phrase component
  const Phrase = ({ src }: { src: string }) => {
    return (
      <div className="lg:px-5 px-2 flex gap-5 items-center">
        <p className="text-[7.5vw]  text-white font-medium outline-text4">
          Featured Work
        </p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <img
            src={src}
            alt="project image"
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        </span>
      </div>
    );
  };

  return (
    <div className=" w-full h-full flex flex-col lg:gap-64 gap-10 pt-4 pb-10 relative overflow-hidden scroll-smooth ">
      {/* statement*/}
      <motion.div
        className="absolute w-[100vw] h-[0.5px]  bg-gray-50 top-10 left-0 z-20"
        initial={{ opacity: 0.1, width: 0 }}
        whileInView={{ opacity: 0.1, width: "100vw" }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      />
      <div className="w-full md:h-[90vh] h-[65vh] flex flex-col pt-0 relative items-center justify-center bg-gray-transparent md:mb-0 mb-20 gap-5 lg:px-20 px-4">
        <motion.div
          className="absolute w-[100vw] h-[0.5px] bg-gray-50 opacity-5 bottom-10 left-0 z-20"
          initial={{ opacity: 0.1, width: 0 }}
          whileInView={{ opacity: 0.1, width: "100vw" }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        />

        <motion.h1
          className="hero-section text-3xl lg:text-5xl font-normal text-center text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4,
          }}
          viewport={{ once: false }}
        >
          We're not new to this, <span className="outline-text4">but</span> we
          maybe new to you.
        </motion.h1>

        <motion.p
          className="normal-text mt-4 text-center lg:text-sm text-sm text-gray-400 max-w-2xl relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4, // Slightly delayed after the heading
          }}
          viewport={{ once: false }}
        >
          <span className="relative">
            We have a rich history of delivering exceptional results for our
            clients across various industries. <br />
          </span>
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 opacity-40 blur-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.6 }}
          />
        </motion.p>

        <InfiniteSlider
          duration={10}
          durationOnHover={100}
          className="py-4 ml-[0px] text-white w-[100%] flex items-center justify-center lg:mt-14 mt-10"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="lg:h-8 h-6 lg:mx-8 mx-4 object-contain filter brightness-0 invert"
            />
          ))}
        </InfiniteSlider>
      </div>
      {/* statement end*/}

      {/* Featured Work Section text*/}
      <div ref={featuredSectionRef} className="relative hero-section ">
        <Slide
          src={projects[0].image}
          direction="left"
          left="-40%"
          progress={scrollYProgress}
        />
        <Slide
          src={projects[1].image}
          direction="right"
          left="-33%"
          progress={scrollYProgress}
        />
        <Slide
          src={projects[2].image}
          direction="left"
          left="-45%"
          progress={scrollYProgress}
        />
        <div className="w-full lg:h-[50vh] h-[60vh] flex items-center justify-center mb-20 lg:px-20 px-4 ">
          <motion.p
            className=" normal-text lg:text-xl text-base font-normal text-center text-white/80 lg:w-[50%] w-[100%] items-center justify-center tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1], // Smooth easing curve
              delay: 0.2,
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            We ask questions, listen and advise our clients so that-together-we
            can create the best custom solutions possible. Here are a few
            examples of fabulous results.
          </motion.p>
          <div className="absolute left-[50%] lg:-bottom-12 bottom-50 flex flex-col items-center">
            <motion.div
              className="w-[0.5px] h-32 bg-gray-50 opacity-5 hidden lg:flex"
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 0.5, height: 138 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            />
            <motion.div
              className="w-6 h-6 rotate-45 border-b-[0.7px] border-r-[0.7px] border-gray-50 -translate-y-1"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 0.2, delay: 1 }}
              viewport={{ once: false }}
            />
          </div>
        </div>
      </div>
      {/* Featured Work Section text end*/}

      {/* Featured Work Section */}

      <motion.div
        className="hero-section lg:fixed hidden bottom-0 left-0 lg:w-[230px] lg:h-[95px] w-[140px] h-[80px] z-50  items-center justify-center text-center bg-white text-black tracking-wide"
        style={{ x: xSpring }} // Apply smooth x animation
      >
        <h2>FEATURED WORK</h2>
      </motion.div>

      {/* Project Discussion Widget */}
      <motion.div
        className="fixed bottom-6 left-0 z-30 flex items-center gap-2.5 bg-white/20 backdrop-blur-sm rounded-r-full pr-4 py-2 shadow-lg"
        style={{ x: xSpring2 }}
      >
        {/* Avatar */}
        <div className="w-14 h-14 ml-2 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
            alt="silkywriter"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-sm tracking-wide uppercase normal-text">
            DISCUSS YOUR PROJECT
          </h3>
          <p className="text-gray-300 text-sm normal-text">
            Speak with us today
          </p>
        </div>
        <a href="mailto:hello@silkywriters.com">
          <button className="ml-4 w-12 h-12 bg-white hover:bg-black/70 !hover:text-white transition-colors duration-200 rounded-full flex items-center justify-center group cursor-pointer">
            <svg
              className="w-5 h-5 text-[#1B1B1B] group-hover:scale-110 group-hover:text-white transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </a>
      </motion.div>
      {projects.map((project, index) => {
        const x = xs[index];

        // For desktop: initial is "cover", then scale up with scroll. For mobile: always "cover".
        const backgroundSize = isMobile
          ? "cover"
          : scales[index] <= 1
          ? "cover"
          : `${scales[index] * 100}%`;

        return (
          <div key={project.id} className="h-full lg:pb-16 pb-40 relative">
            <h1 className="absolute !z-0 normal-text lg:text-[260px] text-[100px] lg:-top-[-5rem] lg:right-[-4.5rem] top-[-0.7em] right-[0.4em] font-bold outline-text2 tracking-wide lg:rotate-90 rotate-0 transform lg:-translate-y-2 translate-y-0">
              {project.number}
            </h1>
            <motion.div
              ref={projectRefs.current[index]}
              className="relative lg:w-[860px] lg:h-[460px] w-[80vw] h-[490px] flex items-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image || "/placeholder.svg"})`,
                backgroundSize, // dynamic!
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* subtle dark overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Inverted text overlay */}
              <div
                className="inverted-text-overlay !flex lg:w-[860px] lg:h-[460px] w-[80vw] h-[490px]"
                style={{
                  clipPath: "inset(0 0 0 0)",
                }}
              >
                <motion.h2
                  className="hero-section lg:-top-[2.5rem] -top-[1rem] lg:text-8xl lg:left-[2rem] left-2 text-4xl text-left font-normal outline-text3 !flex tracking-wide"
                  style={{
                    position: "absolute",
                    x: isMobile ? 0 : x, // Smooth x animation only on desktop
                    translateX: "0%",
                    translateY: "0%",
                    whiteSpace: "nowrap",
                    ["--project-image" as string]: `url(${
                      project.image || "/placeholder.svg"
                    })`,
                    ["--project-bg-size" as string]: backgroundSize,
                    ["--project-bg-position" as string]: "center",
                  }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { duration: 0.97, ease: "easeOut" },
                      opacity: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {project.title}
                </motion.h2>
              </div>

              {/* Original title (solid white text) */}
              <motion.div
                className="absolute lg:-top-[2.5rem] -top-[1rem] lg:left-[2rem] left-2 !flex"
                style={{
                  x: isMobile ? 0 : x, // Smooth x animation only on desktop
                  translateX: "0%",
                  translateY: "0%",
                }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { duration: 1, ease: "easeOut" },
                    opacity: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h2
                  className="hero-section lg:text-8xl text-4xl text-left font-normal outline-text3 !flex tracking-wide"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {project.title}
                </h2>
              </motion.div>
              {project.continuation && (
                <motion.h3
                  className="lg:text-3xl lg:left-[2rem]  left-[0.5rem] lg:top-[3.2rem] top-[1.2rem] text-left font-light  !flex"
                  style={{
                    position: "absolute",
                    x: isMobile ? 0 : x,
                    translateX: "0%",
                    translateY: "0%",
                    whiteSpace: "nowrap",
                    color: "rgba(255, 255, 255, 0.829)", // Slightly lighter for hierarchy
                  }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { duration: 0.97, ease: "easeOut", delay: 0.1 },
                      opacity: { duration: 0.6, ease: "easeOut", delay: 0.1 },
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {project.continuation}
                </motion.h3>
              )}

              <div className="absolute lg:top-42 top-35 lg:left-[55rem] left-[19rem]">
                <p className="normal-text text-gray-400 font-normal lg:text-[18px] text-xs tracking-[0.1em] rotate-90 whitespace-nowrap uppercase">
                  {project.category}
                </p>
              </div>

              {/* Circular text container */}
              <Link
                to={projectLinks[project.title]}
                key={index}
                className="no-underline"
              >
                <div
                  className="circular-text-container lg:mt-96 mt-75 lg:ml-[860px] ml-[calc(85vw-144px)] lg:min-w-36 lg:min-h-36 min-h-16 min-w-16 z-10"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  aria-label={`View ${project.title} Project`}
                >
                  <div
                    className="absolute inset-0 rounded-full !border-2 flex items-center justify-center transition-colors duration-500 ease-in-out overflow-visible"
                    style={{ borderColor: project.borderColor }}
                  >
                    <div
                      className={`circular-bg-expand ${
                        isMobile
                          ? "scale-100"
                          : hoveredProject === project.id
                          ? "scale-100"
                          : "scale-0"
                      }`}
                      style={{ backgroundColor: project.fillColor }}
                    ></div>
                    <div
                      className={`relative w-full h-full z-10 cursor-pointer flex items-center justify-center overflow-visible ${
                        hoveredProject === project.id ? "scale-65" : "scale-100"
                      }`}
                    >
                      <span
                        className="lg:tracking-[0.5em] tracking-normal lg:text-sm text-xs lg:w-[200%] w-[200%] font-medium whitespace-nowrap extended-text"
                        style={{
                          position: "absolute",
                          textAlign: "center",
                        }}
                      >
                        VIEW PROJECT
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
