import { motion } from "framer-motion";

const Unique = () => {
  return (
    <section className=" text-white py-20 w-full h-full  overflow-scroll">
      <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mb-32"></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 px-10 md:px-10">
        {/* Left Heading */}
        <div className="lg:w-2/5">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-[4rem] md:text-[4rem] lg:text-[4rem] font-bold leading-[1.1] tracking-wide uppercase text-white"
          >
            WHAT SETS <br /> <span className="outline-text4">US APART</span>
          </motion.h1>
        </div>

        {/* Right Grid - 2x2 Layout */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Top Left */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold uppercase tracking-[0.2em] text-white mb-6">
              TAILORED TO YOUR VOICE
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Every brand has its own story to tell. We don't believe in
              cookie-cutter content or generic templates. Our writers take the
              time to understand your unique voice, industry, and target
              audience. The result? Content that sounds authentically you and
              resonates with your readers.
            </p>
          </div>

          {/* Top Right */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold uppercase tracking-[0.2em] text-white mb-6">
              EXPERT WRITERS, DIVERSE EXPERTISE
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Our team comprises seasoned writers from various professional
              backgrounds - from academic writing to technical writing, creative
              storytelling to SEO expertise. This diversity allows us to match
              each project with the perfect writer, ensuring your content hits
              the mark every single time.
            </p>
          </div>

          {/* Bottom Left */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold uppercase tracking-[0.2em] text-white mb-6">
              RESEARCH-BACKED STORYTELLING
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Great writing starts with thorough research. Before we craft a
              single sentence, we dive deep into your industry, competitors, and
              target audience. This foundation of knowledge enables us to create
              content that not only engages readers but also establishes your
              authority in your field.
            </p>
          </div>

          {/* Bottom Right */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold uppercase tracking-[0.2em] text-white mb-6">
              BEYOND WORDS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              While we pride ourselves on crafting compelling copy, our impact
              goes deeper. We create content strategies that drive engagement,
              boost conversions, and build lasting connections with your
              audience. Every word we write is purposeful, designed to help you
              achieve your business goals.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-32"></div>
    </section>
  );
};

export default Unique;
