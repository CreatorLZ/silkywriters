// import { motion } from "framer-motion";

import { useState } from "react";
import Footer from "../components/Footer";
import ScrollContainer from "../components/ScrollContainer";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ScrollContainer sections={[]}>
      <div className="relative w-screen min-h-screen overflow-scroll px-28 pt-28 pb-0 flex flex-col text-white">
        <div className="w-full flex flex-col items-center gap-8 mb-44">
          <h1 className="text-7xl font-extrabold uppercase">
            Welcome to Silkywriters
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-normal tracking-wide max-w-5xl leading-10">
            We are <strong>Silkywriters</strong>, a{" "}
            <span className="underline">writing agency</span> built to make your
            ideas shine. Academic writing was our first love (and we’re still
            very good at it!), but we’ve since expanded into everything from
            brand copy to web content(and yes, we’ve grown, because our clients
            needed more. we are that good). If you’re here, you probably already
            understand the value of strong, clear writing. That’s smart. The
            even smarter move? You found us. Writing is what we do, and we do it
            exceptionally well. True story.
          </p>
        </div>

        <h1 className="text-[150px] absolute -top-[-22rem] right-[-15rem] font-extrabold outline-text2 tracking-widest -rotate-90 transform translate-y-2">
          ABOUT
        </h1>
        <h1 className="text-7xl font-extrabold uppercase mb-44">
          We’ve got a way with words.{" "}
          <span className="outline-text4">The best kind of way</span>
        </h1>
        <div className="w-full mx-auto flex flex-col lg:flex-row items-start gap-16 px-0 md:px-3 ">
          {/* Right Grid - 2x2 Layout */}
          <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Top Left */}
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white mb-6">
                TAILORED TO YOUR VOICE
              </h2>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
                Every brand has its own story to tell. We don't believe in
                cookie-cutter content or generic templates. Our writers take the
                time to understand your unique voice, industry, and target
                audience. The result? Content that sounds authentically you and
                resonates with your readers.
              </p>
            </div>

            {/* Top Right */}
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white mb-6">
                EXPERT WRITERS, DIVERSE EXPERTISE
              </h2>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
                Our team comprises seasoned writers from various professional
                backgrounds - from academic writing to technical writing,
                creative storytelling to SEO expertise. This diversity allows us
                to match each project with the perfect writer, ensuring your
                content hits the mark every single time.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white mb-6">
                RESEARCH-BACKED STORYTELLING
              </h2>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
                Great writing starts with thorough research. Before we craft a
                single sentence, we dive deep into your industry, competitors,
                and target audience. This foundation of knowledge enables us to
                create content that not only engages readers but also
                establishes your authority in your field.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white mb-6">
                BEYOND WORDS
              </h2>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
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
        </div>
        <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-2"></div>
        <Footer />
      </div>
    </ScrollContainer>
  );
};

export default About;
