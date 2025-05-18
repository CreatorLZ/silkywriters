import { motion } from "framer-motion";
import InfiniteSlider from "./InfiniteSLider";

const Hero = () => {
  const writingServices = [
    "Thesis Writing",
    "Dissertation Support",
    "Research Papers",
    "Academic Essays",
    "Ghost Writing",
    "Creative Writing",
    "Technical Writing",
    "Blog Posts",
    "Content Strategy",
    "Book Writing",
    "Grant Writing",
    "White Papers",
    "Case Studies",
    "Literary Analysis",
    "Script Writing",
    "Web Content",
  ];

  // Main heading animation
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      x: 40,
      rotate: 2,
      skewX: 1,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Paragraph animation
  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      x: 30,
      rotate: 1,
      skewX: 1,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonsVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      x: 30,
      rotate: 1,
      skewX: 1,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      skewX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const sliderVariants = {
    hidden: {
      opacity: 0,
      y: 200,
      rotateX: 45,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="text-white h-screen w-screen relative overflow-hidden px-36 pt-28 pb-16 flex flex-col gap-10">
      {/* <div className="fixed top-9 left-[-5px]  h-40 w-16 flex flex-col  py-2 bg-white ">
        <a href="/" className="flex flex-col items-center   w-full h-full">
          <span className="text-black font-bold text-2xl">S.</span>
          <span className="text-black font-bold rotate-90 mt-14 transform -translate-y-2 text-[13px] tracking-wider">
            Silkywriters
          </span>
        </a>
      </div> */}
      <motion.h2
        initial="hidden"
        animate="show"
        variants={headingVariants}
        className="font-extrabold text-8xl leading-28 uppercase w-full"
      >
        We craft stories that matter
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="show"
        variants={paragraphVariants}
        className="text-xl font-light"
      >
        Your one-stop solution for
        <span className="underline decoration-1 underline-offset-4 font-bold">
          {" "}
          all your writing needs.
        </span>{" "}
        Whether you need captivating content, engaging blog posts, or polished
        academic papers, we've got you covered. We bring your ideas to life with
        flair and precision.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={buttonsVariants}
        className="flex gap-4"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
        >
          Learn More
        </motion.a>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={sliderVariants}
        className="absolute bottom-[-50px] right-[-150px] w-[180%] transform-gpu rotate-[-12deg] perspective-1000"
      >
        <InfiniteSlider duration={35} durationOnHover={100} className="py-4">
          {writingServices.map((service, index) => (
            <div
              key={index}
              className="min-w-fit px-8 flex items-center justify-center"
            >
              <span className="text-2xl font-light whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
                {service}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </motion.div>
    </div>
  );
};

export default Hero;
