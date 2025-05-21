"use client";

import type React from "react";

import { useState, useEffect, useRef, createRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import students from "../assets/students.jpg";
import tech2 from "../assets/tech2.jpg";
import project3 from "../assets/project3.jpg";
import tech1 from "../assets/tech1.jpg";

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
      title: "TECHNOLOGY",
      image: tech1,
      number: "02",
      category: "TECHNICAL WRITING",
      borderColor: "#f2f54c",
      fillColor: "#f2f54c",
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
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scales, setScales] = useState<number[]>(projects.map(() => 1));
  const projectRefs = useRef(projects.map(() => createRef<HTMLDivElement>()));
  const titleRefs = useRef<(HTMLDivElement | null)[]>(projects.map(() => null));
  const scrollYProgresses = projects.map(() => useScroll().scrollYProgress);
  const xs = scrollYProgresses.map((scrollYProgress) =>
    useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50], {
      clamp: false,
    })
  );

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
          const newScale = 1 + scrollProgress * 0.2;
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

  return (
    <div className="w-full h-full flex flex-col gap-64 pt-72 relative overflow-scroll">
      {projects.map((project, index) => {
        const x = xs[index];

        // Background properties for the main project div
        const mainBackgroundPosition = "center";
        const mainBackgroundSize = `${scales[index] * 100}%`;

        return (
          <div key={project.id} className="h-full pb-16">
            <motion.div
              ref={projectRefs.current[index]}
              className="relative w-[870px] h-[450px] flex items-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image || "/placeholder.svg"})`,
                backgroundSize: mainBackgroundSize,
                backgroundPosition: mainBackgroundPosition,
              }}
            >
              {/* This is the container for the single overlay text layer that shows the image through it */}
              <div
                className="inverted-text-overlay !flex"
                style={{
                  width: "870px",
                  height: "450px",
                  clipPath: "inset(0 0 0 0)", // Match project div bounds
                  // The clipPath here is somewhat redundant due to overflow: hidden on the parent,
                  // but ensures an extra layer of clipping if needed.
                }}
              >
                {/* This is the text layer that becomes transparent/image-filled when over the image */}
                <motion.h2
                  className="text-9xl text-left font-extrabold outline-text3 !flex" /* Use outline-text3 for stroke, but its color will be overridden */
                  style={{
                    position: "absolute",
                    top: "-5rem",
                    left: "12rem",
                    x, // Match the original title's animation
                    translateX: "0%",
                    translateY: "0%",
                    // Pass the project image and its background properties to the H2
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
                      y: { duration: 1, ease: "easeOut" },
                      opacity: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {project.title}
                </motion.h2>
              </div>

              {/* Original title (This is the solid white text visible outside the image) */}
              <motion.div
                ref={(el: HTMLDivElement | null) => {
                  titleRefs.current[index] = el;
                }}
                className="absolute -top-[5rem] left-[12rem] !flex"
                style={{
                  x,
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
                <h2 className="text-9xl text-left font-extrabold outline-text3 !flex ">
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
                      hoveredProject === project.id ? "scale-85" : "scale-100"
                    }`}
                  >
                    <span
                      className="tracking-[0.2em] text-sm font-medium whitespace-nowrap extended-text"
                      style={{
                        position: "absolute",
                        width: "200%", // Extend beyond circle
                        textAlign: "center",
                      }}
                    >
                      V I E W&nbsp;&nbsp;P R O J E C T
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
