"use client";

import { useState, useEffect, useRef } from "react";
import students from "../assets/students.jpg";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [scale, setScale] = useState(1); // State for background image scale
  const imageContainerRef = useRef(null); // Ref for the image container div

  // Handle scroll effect for scaling
  useEffect(() => {
    const handleScroll = () => {
      if (imageContainerRef.current) {
        const rect = (
          imageContainerRef.current as HTMLDivElement
        ).getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate scale based on scroll position
        const scrollProgress = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );
        // Scale between 1 and 1.2 based on scroll (adjust range as needed)
        const newScale = 1 + scrollProgress * 0.8;
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-64 pt-72  overflow-scroll">
      {/* Project div */}
      <div>
        <div
          ref={imageContainerRef}
          className="relative w-[870px] h-[450px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${students || "/placeholder.svg"})`,
            backgroundSize: `${scale * 100}%`, // Dynamic scaling
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-9xl text-left font-extrabold text-white absolute -top-[5rem] left-[18rem]">
            TRUANCY
          </h2>

          <div className="absolute top-24 left-[55rem] ">
            <p className="text-gray-400 font-light text-[18px] tracking-wider rotate-90 flex flex-col items-center">
              {/* <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>E</span>
              <span>A</span>
              <span>R</span>
              <span>C</span>
              <span>H</span>
              <span>&nbsp;</span>
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>K</span> */}
              RESEARCH
            </p>
          </div>

          {/* Circular text container */}
          <div
            className="circular-text-container mt-80 ml-[860px] min-w-36 min-h-36 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 rounded-full border border-white flex items-center justify-center transition-colors duration-500 ease-in-out overflow-hidden">
              <div
                className={`circular-bg-expand ${
                  isHovered ? "scale-100" : "scale-0"
                }`}
              ></div>
              <div
                className={`relative w-full h-full z-10 circular-text cursor-pointer ${
                  isHovered ? "scale-85" : "scale-100"
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
              01
            </h1>
          </div>
        </div>
      </div>
      {/* end */}

      {/* Project div */}
      <div>
        <div
          ref={imageContainerRef}
          className="relative w-[870px] h-[450px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${students || "/placeholder.svg"})`,
            backgroundSize: `${scale * 100}%`, // Dynamic scaling
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-9xl text-left font-extrabold text-white absolute -top-[5rem] left-[18rem]">
            TRUANCY
          </h2>

          <div className="absolute top-24 left-[55rem] ">
            <p className="text-gray-400 font-light text-[18px] tracking-wider rotate-90 flex flex-col items-center">
              {/* <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>E</span>
              <span>A</span>
              <span>R</span>
              <span>C</span>
              <span>H</span>
              <span>&nbsp;</span>
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>K</span> */}
              RESEARCH
            </p>
          </div>

          {/* Circular text container */}
          <div
            className="circular-text-container mt-80 ml-[860px] min-w-36 min-h-36 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 rounded-full border border-white flex items-center justify-center transition-colors duration-500 ease-in-out overflow-hidden">
              <div
                className={`circular-bg-expand ${
                  isHovered ? "scale-100" : "scale-0"
                }`}
              ></div>
              <div
                className={`relative w-full h-full z-10 circular-text cursor-pointer ${
                  isHovered ? "scale-85" : "scale-100"
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
              01
            </h1>
          </div>
        </div>
      </div>
      {/* end */}

      {/* Project div */}
      <div>
        <div
          ref={imageContainerRef}
          className="relative w-[870px] h-[450px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${students || "/placeholder.svg"})`,
            backgroundSize: `${scale * 100}%`, // Dynamic scaling
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-9xl text-left font-extrabold text-white absolute -top-[5rem] left-[18rem]">
            TRUANCY
          </h2>

          <div className="absolute top-24 left-[55rem] ">
            <p className="text-gray-400 font-light text-[18px] tracking-wider rotate-90 flex flex-col items-center">
              {/* <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>E</span>
              <span>A</span>
              <span>R</span>
              <span>C</span>
              <span>H</span>
              <span>&nbsp;</span>
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>K</span> */}
              RESEARCH
            </p>
          </div>

          {/* Circular text container */}
          <div
            className="circular-text-container mt-80 ml-[860px] min-w-36 min-h-36 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 rounded-full border border-white flex items-center justify-center transition-colors duration-500 ease-in-out overflow-hidden">
              <div
                className={`circular-bg-expand ${
                  isHovered ? "scale-100" : "scale-0"
                }`}
              ></div>
              <div
                className={`relative w-full h-full z-10 circular-text cursor-pointer ${
                  isHovered ? "scale-85" : "scale-100"
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
              01
            </h1>
          </div>
        </div>
      </div>
      {/* end */}

      <div className="text-sm font-medium text-center mt-10 bg-white text-gray-800 py-2 w-[200px] min-h-[100px] flex  items-center justify-center sticky bottom-0 z-10">
        <div className="flex  items-center justify-center text-center w-full h-full">
          <p>FEATURED WORK</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
