"use client";

import { useState, useEffect, useRef, createRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import students from "../assets/students.jpg";
import project2 from "../assets/project2.jpg"; // Placeholder for second project image
import project3 from "../assets/project3.jpg"; // Placeholder for third project image

// Define the Project interface
interface Project {
  id: number;
  title: string;
  image: string; // Image imports resolve to strings in pure React
  number: string;
  category: string;
  borderColor: string; // Border color for circular-text-container > div:first-child
  fillColor: string; // Fill color for circular-bg-expand on hover
}

// Define the component
const Projects: React.FC = () => {
  // Array of projects with made-up names and properties
  const projects: Project[] = [
    {
      id: 1,
      title: "TRUANCY",
      image: students,
      number: "01",
      category: "RESEARCH",
      borderColor: "#FF4C4C", // Red border
      fillColor: "#FF4C4C", // Light red fill on hover
    },
    {
      id: 2,
      title: "SOLARIS",
      image: project2,
      number: "02",
      category: "DESIGN",
      borderColor: "#4C8BF5", // Blue border
      fillColor: "#4C8BF5", // Light blue fill on hover
    },
    {
      id: 3,
      title: "VANGUARD",
      image: project3,
      number: "03",
      category: "DEVELOPMENT",
      borderColor: "#4CAF50", // Green border
      fillColor: "#4CAF50", // Light green fill on hover
    },
  ];

  // State for hover and scale for each project
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scales, setScales] = useState<number[]>(projects.map(() => 1)); // One scale per project
  const projectRefs = useRef(projects.map(() => createRef<HTMLDivElement>())); // Array of refs
  const titleRefs = useRef<(HTMLDivElement | null)[]>(projects.map(() => null)); // Separate refs for titles

  // Handle background image scale effect
  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          const windowHeight = window.innerHeight;
          const scrollProgress = Math.min(
            Math.max((windowHeight - rect.top) / windowHeight, 0),
            1
          );
          const newScale = 1 + scrollProgress * 0.2; // Scale between 1 and 1.2
          setScales((prev) =>
            prev.map((scale, i) => (i === index ? newScale : scale))
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-64 pt-72 relative overflow-scroll">
      {projects.map((project, index) => {
        // Scroll-triggered animation for title with better performance
        const { scrollYProgress } = useScroll({
          target: projectRefs.current[index],
          offset: ["start end", "end start"],
        });

        // Using transform with dampening to prevent jumpy behavior
        const x = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50], {
          clamp: false,
        });

        return (
          <div key={project.id} className="h-full pb-36">
            <motion.div
              ref={projectRefs.current[index]}
              className="relative w-[870px] h-[450px] flex items-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image || "/placeholder.svg"})`,
                backgroundSize: `${scales[index] * 100}%`,
                backgroundPosition: "center",
              }}
            >
              {/* Title with smooth scroll-based animation */}
              <motion.div
                ref={(el: HTMLDivElement | null) => {
                  titleRefs.current[index] = el;
                }}
                className="absolute -top-[5rem] left-[18rem]"
                style={{
                  x,
                  translateX: "0%", // Prevent default transform behavior
                  translateY: "0%", // Prevent default transform behavior
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
                <h2 className="text-9xl text-left font-extrabold text-white">
                  {project.title}
                </h2>
              </motion.div>

              <div className="absolute top-24 left-[55rem]">
                <p className="text-gray-400 font-light text-[18px] tracking-wider rotate-90 flex flex-col items-center">
                  {project.category}
                </p>
              </div>

              {/* Circular text container */}
              <div
                className="circular-text-container mt-80 ml-[860px] min-w-36 min-h-36 z-10"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                aria-label={`View ${project.title} Project`}
              >
                <div
                  className="absolute inset-0 rounded-full !border-2 flex items-center justify-center transition-colors duration-500 ease-in-out overflow-hidden"
                  style={{ borderColor: project.borderColor }} // Dynamic border color
                >
                  <div
                    className={`circular-bg-expand ${
                      hoveredProject === project.id ? "scale-100" : "scale-0"
                    }`}
                    style={{ backgroundColor: project.fillColor }} // Dynamic fill color
                  ></div>
                  <div
                    className={`relative w-full h-full z-10 circular-text cursor-pointer ${
                      hoveredProject === project.id ? "scale-85" : "scale-100"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center tracking-widest text-sm">
                      <span>V</span>
                      <span>I</span>
                      <span>E</span>
                      <span>W</span>
                      <span>&nbsp;</span>
                      <span>P</span>
                      <span>R</span>
                      <span>O</span>
                      <span>J</span>
                      <span>E</span>
                      <span>C</span>
                      <span>T</span>
                    </div>
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

      {/* <div className="text-sm font-medium text-center mt-10 bg-white text-gray-800 py-2 w-[200px] min-h-[100px] flex items-center justify-center fixed bottom-0 z-10">
        <div className="flex items-center justify-center text-center w-full h-full">
          <p>FEATURED WORK</p>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
