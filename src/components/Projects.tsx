"use client";

import { useState } from "react";
import watch1 from "../assets/watch1.jpg";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover for the circular text

  return (
    <div className="w-full h-screen flex flex-col pt-72">
      {/* project div */}
      <div>
        <div className="relative w-full h-[450px] flex items-center ">
          <h2 className="text-9xl text-left font-extrabold text-white absolute -top-[5rem] left-[18rem]">
            SPYSCAPE
          </h2>

          <img
            className="max-h-[450px] w-[870px]"
            src={watch1 || "/placeholder.svg"}
            alt="Watch"
          />
          <div className="absolute top-32 left-[53rem]  ">
            <p className="text-gray-300 font-light rotate-90  transform -translate-y-2 text-[18px] tracking-wider">
              RESEARCH WORK
            </p>
          </div>

          {/* Overlay for hover effect on the image */}
          {/* <div className="absolute inset-0 w-[870px] h-[450px] bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div> */}

          {/* Circular text container - positioned bottom-right relative to the image */}
          {/* Added event listeners for hover effect */}
          <div
            className="circular-text-container mt-80 min-w-36 min-h-36  z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Inner circle border */}
            <div className="absolute inset-0 rounded-full border border-white flex items-center justify-center transition-colors duration-500 ease-in-out overflow-hidden">
              {/* Pseudo-element for the expanding background */}
              {/* Apply scale based on hover state */}
              <div
                className={`circular-bg-expand ${
                  isHovered ? "scale-100" : "scale-0"
                }`}
              ></div>

              {/* Circular text element - handles rotation and text centering */}
              {/* Apply color based on hover state */}
              <div
                className={`relative w-full h-full z-10 circular-text ${
                  isHovered ? "scale-85" : "scale-100"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center  tracking-widest text-sm">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
