"use client";

import type React from "react";
import { useState, useEffect, useRef, createRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import students from "../assets/students.jpg";
import tech2 from "../assets/tech2.jpg";
import project3 from "../assets/project3.jpg";
import tech1 from "../assets/tech1.jpg";
import diary from "../assets/dairy.jpg";
import InfiniteSlider from "./InfiniteSLider";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://c37uf7lofs.ufs.sh/f/GSgiKERmD2ElS49Le4jaC4EgyF69hqUMi1L8uOGzeIfTodYr",
];

// Define the Project interface
interface Project {
  id: number;
  title: string;
  image: string;
  number: string;
  category: string;
  borderColor: string;
  fillColor: string;
}

// Define the component
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "TRUANCY",
      image: students,
      number: "01",
      category: "RESEARCH",
      borderColor: "#FF4C4C",
      fillColor: "#FF4C4C",
    },
    {
      id: 2,
      title: "TASKWISE",
      image: tech1,
      number: "02",
      category: "TECHNICAL WRITING",
      borderColor: "goldenrod",
      fillColor: "goldenrod",
    },
    {
      id: 3,
      title: "THE_FUTURE",
      image: tech2,
      number: "03",
      category: "DOCUMENTARY",
      borderColor: "#4C8BF5",
      fillColor: "#4C8BF5",
    },
    {
      id: 4,
      title: "VANGUARD",
      image: project3,
      number: "04",
      category: "DEVELOPMENT",
      borderColor: "#4CAF50",
      fillColor: "#4CAF50",
    },
    {
      id: 5,
      title: "LAMINE",
      image: diary,
      number: "05",
      category: "CULINARY",
      borderColor: "#FF9800",
      fillColor: "#FF9800",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scales, setScales] = useState<number[]>(projects.map(() => 1));
  const projectRefs = useRef(projects.map(() => createRef<HTMLDivElement>()));
  const featuredSectionRef = useRef<HTMLDivElement>(null);

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
    const x = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [50, 0, -50], {
      clamp: false,
    });
    return useSpring(x, { stiffness: 50, damping: 40 });
  });

  // Track scroll progress for the entire page
  const { scrollYProgress } = useScroll();

  // Transform x position for the "FEATURED WORK" div
  const xTransform = useTransform(
    scrollYProgress,
    [0.28, 0.282, 0.68, 0.69], // Scroll progress: 28% to 28.2% (slide in), 68% to 69% (slide out)
    [-230, 0, 0, -230] // Slide in from -230px (off-screen) to 0px, stay at 0px, then slide out to -230px
  );

  // Apply smooth animation to the x transform
  const xSpring = useSpring(xTransform, { stiffness: 100, damping: 20 });

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
      <div className="px-5 flex gap-5 items-center">
        <p className="text-[7.5vw] text-white font-medium outline-text4">
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
    <div className=" w-full h-full flex flex-col gap-64 pt-4 pb-10 relative overflow-scroll scroll-smooth">
      {/* statement*/}
      <div className="w-full h-[90vh] flex flex-col pt-0 relative items-center justify-center bg-gray-transparent m-0 gap-5">
        <motion.div
          className="absolute w-[0.5px] h-32 bg-gray-50 opacity-5 -top-0 left-[50%] z-20 hidden"
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 0.4, height: 128 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="absolute w-[100vw] h-[0.5px] bg-gray-50 top-10 left-0 z-20"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 0.1, width: "100vw" }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="absolute w-[100vw] h-[0.5px] bg-gray-50 opacity-5 bottom-10 left-0 z-20"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 0.1, width: "100vw" }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="absolute w-[0.5px] h-32 bg-gray-50  -bottom-0 left-[50%] z-20 hidden"
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 0.4, height: 128 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: false }}
        />

        <motion.h1
          className="text-4xl font-bold text-center text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: false }}
        >
          We're not new to this, <span className="outline-text4">but</span> we
          maybe new to you.
        </motion.h1>

        <motion.p
          className="mt-4 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4, // Slightly delayed after the heading
          }}
          viewport={{ once: false }}
        >
          Our work is a testament to our commitment to excellence and
          innovation.
        </motion.p>

        <InfiniteSlider
          duration={5}
          durationOnHover={100}
          className="py-4 ml-[0px] text-white w-[50%] flex items-center justify-center"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-8 mx-8 object-contain filter brightness-0 invert"
            />
          ))}
        </InfiniteSlider>
      </div>
      {/* statement end*/}

      {/* Featured Work Section text*/}
      <div ref={featuredSectionRef} className="relative">
        <Slide
          src={projects[0].image}
          direction="left"
          left="-40%"
          progress={scrollYProgress}
        />
        <Slide
          src={projects[1].image}
          direction="right"
          left="-25%"
          progress={scrollYProgress}
        />
        <Slide
          src={projects[2].image}
          direction="left"
          left="-75%"
          progress={scrollYProgress}
        />
        <div className="w-full h-[50vh] flex items-center justify-center mb-20">
          <motion.p
            className="text-2xl font-light text-center text-white/80 w-[50%] items-center justify-center tracking-normal"
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
          <div className="absolute left-[50%] -bottom-14 flex flex-col items-center">
            <motion.div
              className="w-[0.5px] h-32 bg-gray-50 opacity-5"
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 0.4, height: 128 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: false }}
            />
            <motion.div
              className="w-6 h-6 rotate-45 border-b-[0.7px] border-r-[0.7px] border-gray-50 -translate-y-1"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: false }}
            />
          </div>
        </div>
      </div>
      {/* Featured Work Section text end*/}

      {/* Featured Work Section */}

      <motion.div
        className="fixed bottom-0 left-0 w-[230px] h-[95px] z-50 flex items-center justify-center text-center bg-white text-black tracking-wide"
        style={{ x: xSpring }} // Apply smooth x animation
      >
        <h2>FEATURED WORK</h2>
      </motion.div>
      {projects.map((project, index) => {
        const x = xs[index];

        const mainBackgroundPosition = "center";
        const mainBackgroundSize = `${scales[index] * 100}%`;

        return (
          <div key={project.id} className="h-full pb-16">
            <motion.div
              ref={projectRefs.current[index]}
              className="relative w-[860px] h-[460px] flex items-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image || "/placeholder.svg"})`,
                backgroundSize: mainBackgroundSize,
                backgroundPosition: mainBackgroundPosition,
              }}
            >
              {/* Inverted text overlay */}
              <div
                className="inverted-text-overlay !flex"
                style={{
                  width: "860px",
                  height: "450px",
                  clipPath: "inset(0 0 0 0)",
                }}
              >
                <motion.h2
                  className="text-9xl text-left font-extrabold outline-text3 !flex"
                  style={{
                    position: "absolute",
                    top: "-5rem",
                    left: "12rem",
                    x, // Smooth x animation
                    translateX: "0%",
                    translateY: "0%",
                    ["--project-image" as string]: `url(${
                      project.image || "/placeholder.svg"
                    })`,
                    ["--project-bg-size" as string]: mainBackgroundSize,
                    ["--project-bg-position" as string]: mainBackgroundPosition,
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
                className="absolute -top-[5rem] left-[12rem] !flex"
                style={{
                  x, // Smooth x animation
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
                <h2 className="text-9xl text-left font-extrabold outline-text3 !flex">
                  {project.title}
                </h2>
              </motion.div>

              <div className="absolute top-42 left-[55rem]">
                <p className="text-gray-400 font-light text-[18px] tracking-[0.1em] rotate-90 whitespace-nowrap uppercase">
                  {project.category}
                </p>
              </div>

              {/* Circular text container */}
              <div
                className="circular-text-container mt-96 ml-[860px] min-w-36 min-h-36 z-10"
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
                      hoveredProject === project.id ? "scale-100" : "scale-0"
                    }`}
                    style={{ backgroundColor: project.fillColor }}
                  ></div>
                  <div
                    className={`relative w-full h-full z-10 cursor-pointer flex items-center justify-center overflow-visible ${
                      hoveredProject === project.id ? "scale-65" : "scale-100"
                    }`}
                  >
                    <span
                      className="tracking-[0.5em] text-sm font-medium whitespace-nowrap extended-text"
                      style={{
                        position: "absolute",
                        width: "200%",
                        textAlign: "center",
                      }}
                    >
                      VIEW PROJECT
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-[260px] absolute -top-[-5rem] right-[-32rem] font-extrabold outline-text2 tracking-widest rotate-90 transform -translate-y-2">
                  {project.number}
                </h1>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
