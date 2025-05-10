import { useState } from "react";

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation sections/links
  const navLinks = [
    { name: "WORK", description: "All good stuff." },
    { name: "ABOUT", description: "What we do." },
    { name: "CONTACT", description: "Get in touch." },
    { name: "SERVICES", description: "What we offer." },

    // Add more sections as needed
  ];

  return (
    <div className="">
      {/* Fixed Logo and Menu Button */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50">
        {/* Logo/Avatar on left */}
        <div
          className={`w-28 h-28 rounded-full bg-white hover:bg-[goldenrod] cursor-pointer flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "background-color 0.3s ease-in-out" }}
        >
          <div className="w-24 h-24 flex items-center justify-center bg-transparent">
            <img src="./slogo.png" alt="slogo" />
          </div>
        </div>

        {/* Right side with "START A PROJECT" circular text and menu button */}
        <div className="flex items-center gap-6">
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="w-14 h-14 bg-gray-200 hover:bg-[goldenrod] cursor-pointer rounded-full flex items-center justify-center focus:outline-none z-50 relative transition-all duration-300 hover:rotate-180"
            aria-label="Toggle menu"
          >
            {/* Close icon */}
            <span
              className={`absolute text-xl transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 transform rotate-0"
                  : "opacity-0 transform rotate-90"
              }`}
            >
              ✕
            </span>

            {/* Hamburger icon */}
            <div
              className={`flex flex-col gap-1.5 absolute transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-0 transform rotate-180"
                  : "opacity-100 transform rotate-0"
              }`}
            >
              <span className="block w-5 h-0.5 bg-black transition-transform duration-300"></span>
              <span className="block w-5 h-0.5 bg-black transition-transform duration-300"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-500 z-40 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: isMenuOpen ? "#222" : "#f5f5f5",
          transition:
            "background-color 0.8s ease-in-out, opacity 0.5s ease-in-out",
        }}
      >
        <div className="h-full flex items-center justify-center px-8 md:px-24">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 lg:px-28">
            {navLinks.map((link, index) => (
              <div key={index} className="overflow-hidden cursor-pointer">
                <div
                  className={`transform transition-transform duration-700 ${
                    isMenuOpen ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight outline-text">
                    {link.name}
                  </h2>
                  <p className="text-white text-sm mt-2">{link.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer that shows in menu */}
      <div
        className={`fixed bottom-0 left-0 w-full p-8 text-white z-40 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p>silkywriters@gmail.com</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p>514-222-3461</p>
          </div>
          <div className="mt-4 md:mt-0 text-sm opacity-50">
            <p>Remote world-wide</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white bg-white flex items-center justify-center"
            >
              <img src="./twitter (1).png" alt="x" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white bg-white flex items-center justify-center"
            >
              <img src="./instagram (1).png" alt="y" />
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
        .outline-text {
          -webkit-text-stroke: 1px white;
          color: transparent;
          transition: color 0.3s ease;
        }

        .outline-text:hover {
          color: white;
        }

        /* Container for the circular text, handles positioning and movement */
        .circular-text-container {
          /* Apply movement animation */
          animation: move 10s ease-in-out infinite alternate;
          position: fixed; /* Ensure positioning is fixed for movement */
          bottom: 2rem; /* Tailwind's bottom-8 */
          left: 2rem; /* Tailwind's left-8 */
          width: 8rem; /* Tailwind's w-32 */
          height: 8rem; /* Tailwind's h-32 */
          display: none; /* Tailwind's hidden */
          /* Override Tailwind's hidden for md and up */
          @media (min-width: 768px) {
            display: flex;
          }
          align-items: center;
          justify-content: center;
          /* Ensure relative positioning for the pseudo-element */
          position: relative;
        }

        /* Inner circle border and container for the expanding background */
        .circular-text-container > div:first-child {
            position: absolute;
            inset: 0;
            border-radius: 9999px; /* Tailwind's rounded-full */
            border: 1px solid white; /* Tailwind's border border-white */
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.5s ease-in-out; /* Transition for border color if needed */
            overflow: hidden; /* Hide the expanding pseudo-element outside the circle */
        }

        /* Pseudo-element for the expanding white background */
        .circular-bg-expand {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 9999px; /* Make it circular */
            background-color: white;
            transform: scale(0); /* Start small */
            transition: transform 0.5s ease-in-out; /* Transition the scale property */
            z-index: 0; /* Ensure it's behind the text */
        }

        /* Hover effect for the container */
        .circular-text-container:hover .circular-bg-expand {
          transform: scale(1); /* Expand to cover the circle */
        }

        /* Circular text element, handles rotation and text centering */
        .circular-text {
          position: absolute;
          width: 100%;
          height: 100%;
          /* Apply rotation animation */
          animation: spin 20s linear infinite;
          color: white; /* Default text color */
          /* Center the text content */
          display: flex;
          align-items: center;
          justify-content: center;
          /* Add transition for text color change on hover */
          transition: color 0.5s ease-in-out;
          z-index: 10; /* Ensure text is above the expanding background */
        }

        /* Hover effect for the circular text element */
        .circular-text-container:hover .circular-text {
          color: black; /* Change text color on hover */
        }


        /* Keyframes for rotation animation */
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Keyframes for movement animation (slight movement around the left side) */
        @keyframes move {
          0% {
            transform: translate(0, 0); /* Start at its initial position */
          }
          25% {
            transform: translate(10px, -10px); /* Move slightly up and right */
          }
          50% {
            transform: translate(0, 10px); /* Move slightly down */
          }
          75% {
            transform: translate(-10px, -10px); /* Move slightly up and left */
          }
          100% {
            transform: translate(0, 0); /* Return to initial position */
          }
        }
        `}
      </style>
    </div>
  );
};

export default ModernNavbar;
