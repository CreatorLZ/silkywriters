import { motion } from "framer-motion";

const Unique = () => {
  // Natural animation variants for heading
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Staggered animation variants for grid items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Separator line variants
  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 0.05,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className=" text-white py-20 w-full h-full  overflow-scroll">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={lineVariants}
        className="w-screen h-[0.5px] bg-gray-50 opacity-5 mb-32"
        style={{ transformOrigin: "left" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 px-10 md:px-10">
        {/* Left Heading */}
        <div className="lg:w-2/5">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
            className="hero-section text-[4rem] md:text-[4rem] lg:text-[4rem] font-normal leading-[1.1] tracking-wide uppercase text-white"
          >
            WHAT SETS <br /> <span className="outline-text4">US APART</span>
          </motion.h1>
        </div>

        {/* Right Grid - 2x2 Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {/* Top Left */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-normal uppercase tracking-[0.2em] text-white mb-6">
              TAILORED TO YOUR VOICE
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-normal normal-text">
              Every brand has its own story to tell. We don't believe in
              cookie-cutter content or generic templates. Our writers take the
              time to understand your unique voice, industry, and target
              audience. The result? Content that sounds authentically you and
              resonates with your readers.
            </p>
          </motion.div>

          {/* Top Right */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-normal uppercase tracking-[0.2em] text-white mb-6">
              EXPERT WRITERS, DIVERSE EXPERTISE
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-normal normal-text">
              Our team comprises seasoned writers from various professional
              backgrounds - from academic writing to technical writing, creative
              storytelling to SEO expertise. This diversity allows us to match
              each project with the perfect writer, ensuring your content hits
              the mark every single time.
            </p>
          </motion.div>

          {/* Bottom Left */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-normal uppercase tracking-[0.2em] text-white mb-6">
              RESEARCH-BACKED STORYTELLING
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-normal normal-text">
              Great writing starts with thorough research. Before we craft a
              single sentence, we dive deep into your industry, competitors, and
              target audience. This foundation of knowledge enables us to create
              content that not only engages readers but also establishes your
              authority in your field.
            </p>
          </motion.div>

          {/* Bottom Right */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-normal uppercase tracking-[0.2em] text-white mb-6">
              BEYOND WORDS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-normal normal-text">
              While we pride ourselves on crafting compelling copy, our impact
              goes deeper. We create content strategies that drive engagement,
              boost conversions, and build lasting connections with your
              audience. Every word we write is purposeful, designed to help you
              achieve your business goals.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={lineVariants}
        className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-32"
        style={{ transformOrigin: "left" }}
      ></motion.div>
    </section>
  );
};

export default Unique;
