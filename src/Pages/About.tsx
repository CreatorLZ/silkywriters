import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ScrollContainer from "../components/ScrollContainer";
import ScrollToTop from "../components/ScrollToTop";
import ModernNavbar from "../components/Navbar";
import Loading from "../components/Loading"; // Adjust path as needed
import { Link } from "react-router-dom";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top on mount

    // Simulate loading time (you can adjust this or tie it to actual data loading)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  // Show loading component while loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollContainer sections={[]}>
      <div className="relative w-screen min-h-screen overflow-scroll overflow-x-hidden  pt-32 pb-0 flex flex-col text-white">
        <ModernNavbar />
        <div className="w-full flex flex-col items-center gap-8 mb-44 px-28">
          {/* <h1 className="text-7xl font-extrabold uppercase">
            Prepare <span className="outline-text4">to Be Persuaded</span>
          </h1> */}
          <motion.h1
            className="text-9xl font-normal uppercase relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block mr-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Prepare
            </motion.span>
            <motion.span
              className="outline-text4 inline-block relative"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {"  "} to Be Persuaded
              {/* Subtle sweep effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", skewX: -12 }}
                animate={{ x: "100%", skewX: -12 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-[2rem] font-normal uppercase tracking-[0.2em] text-white/40 mb-6"
          >
            Welcome to Silkywriters
          </motion.h2>
          <p className="text-base md:text-xl lg:text-base text-white/80 font-normal tracking-wide max-w-5xl leading-12 normal-text">
            In a world drowning in mediocre content,{" "}
            <strong>Silkywriters</strong> stands as your beacon of excellence.
            We cut our teeth in academic writing, where precision meets
            creativity, and now we craft everything from magnetic brand stories
            to compelling web content. We're not just another writing agency –
            we're your partners in turning words into weapons of mass
            persuasion. When excellence is non-negotiable, you've come to the
            right place.
          </p>
        </div>

        <h1 className="text-[200px] absolute -top-[-30rem] right-[-12rem] font-normal outline-text2 tracking-widest -rotate-90 transform translate-y-2">
          ABOUT
        </h1>
        <h1 className="text-9xl font-normal uppercase mb-44 px-28">
          We've got a way with words.{" "}
          <span className="outline-text4">The best kind of way</span>
        </h1>

        <div className="w-full mx-auto px-28 flex flex-col lg:flex-row items-start gap-16 ">
          {/* Right Grid - 2x2 Layout */}
          <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 ">
            {/* Top Left */}
            <div className="space-y-4">
              <h2 className="text-xl font-normal uppercase tracking-[0.2em] text-white mb-6">
                TAILORED TO YOUR VOICE
              </h2>
              <p className="normal-text text-white/50 text-sm leading-relaxed font-medium">
                Every brand has its own story to tell. We don't believe in
                cookie-cutter content or generic templates. Our writers take the
                time to understand your unique voice, industry, and target
                audience. The result? Content that sounds authentically you and
                resonates with your readers.
              </p>
            </div>

            {/* Top Right */}
            <div className="space-y-4">
              <h2 className="text-xl font-normal uppercase tracking-[0.2em] text-white mb-6">
                EXPERT WRITERS, DIVERSE EXPERTISE
              </h2>
              <p className="normal-text text-white/50 text-sm leading-relaxed font-medium">
                Our team comprises seasoned writers from various professional
                backgrounds - from academic writing to technical writing,
                creative storytelling to SEO expertise. This diversity allows us
                to match each project with the perfect writer, ensuring your
                content hits the mark every single time.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="space-y-4">
              <h2 className="text-xl font-normal uppercase tracking-[0.2em] text-white mb-6">
                RESEARCH-BACKED STORYTELLING
              </h2>
              <p className="normal-text text-white/50 text-sm leading-relaxed font-medium">
                Great writing starts with thorough research. Before we craft a
                single sentence, we dive deep into your industry, competitors,
                and target audience. This foundation of knowledge enables us to
                create content that not only engages readers but also
                establishes your authority in your field.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="space-y-4">
              <h2 className="text-xl font-normal uppercase tracking-[0.2em] text-white mb-6">
                BEYOND WORDS
              </h2>
              <p className="normal-text text-white/50 text-sm leading-relaxed font-medium">
                While we pride ourselves on crafting compelling copy, our impact
                goes deeper. We create content strategies that drive engagement,
                boost conversions, and build lasting connections with your
                audience. Every word we write is purposeful, designed to help
                you achieve your business goals.
              </p>
            </div>
          </div>
        </div>
        {/* Circular text container */}
        <div className="w-full flex justify-center">
          <Link to="/contact" className="no-underline">
            <div
              className="circular-text-container mt-20 w-36 h-36 z-10 mb-40"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label="Start a Project"
            >
              <div
                className="absolute inset-0 rounded-full border-2 border-white flex items-center justify-center transition-colors duration-500 ease-in-out overflow-visible"
                style={{
                  borderColor: isHovered ? "goldenrod" : "goldenrod",
                }}
              >
                <div
                  className={`circular-bg-expand ${
                    isHovered ? "scale-100" : "scale-0"
                  }`}
                  style={{ backgroundColor: "goldenrod" }}
                ></div>
                <div
                  className={`relative w-full h-full z-10 cursor-pointer flex items-center justify-center overflow-visible ${
                    isHovered ? "scale-60" : "scale-100"
                  }`}
                >
                  <span
                    className={`tracking-[0.5em] text-sm font-medium whitespace-nowrap extended-text transition-colors duration-300 ${
                      isHovered ? "!text-black" : "!text-white"
                    }`}
                    style={{
                      position: "absolute",
                      width: "200%",
                      textAlign: "center",
                    }}
                  >
                    CONTACT US
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-2"></div>
        <Footer />
      </div>
      <ScrollToTop />
    </ScrollContainer>
  );
};

export default About;
