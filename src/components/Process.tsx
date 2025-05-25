import { motion } from "framer-motion";
import project3 from "../assets/project3.jpg";
import wheel from "../assets/wheel.svg";

const Process = () => {
  return (
    <div className="w-full min-h-screen overflow-scroll flex flex-col py-10 pr-20 pl-6 items-center justify-center ">
      {/* statement*/}
      <div className="w-full h-[80vh] flex flex-col pt-0 relative items-center justify-center bg-gray-transparent m-0">
        <motion.div
          className="absolute w-[900px] h-[0.7px] bg-white top-32 left-[15%] z-20"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 900 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="absolute w-[900px] h-[0.7px] bg-white bottom-32 left-[15%] z-20"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 900 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="absolute w-[0.7px] h-32 bg-white -bottom-0 left-[50%] z-20"
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 128 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: false }}
        />

        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: false }}
        >
          {/* We're not new to this, <span className="outline-text4">but</span> we
          maybe new to you. */}
          OUR MISSON
        </motion.h1>

        <motion.p
          className="mt-4 text-center text-gray-300 w-3/4 md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4, // Slightly delayed after the heading
          }}
          viewport={{ once: false }}
        >
          Offer a product of quality and an exceptional experience without any
          compromises. We follow a process that ensures we deliver the best
          results for our clients, no matter the project size or complexity.
        </motion.p>
      </div>
      {/* statement end*/}

      {/* Process steps */}
      <div className="w-full h-full flex relative z-50 ">
        <div className="h-[450px] w-[700px] border-0 border-white z-50 relative">
          <div className="absolute inset-0 bg-black opacity-80 z-[51]"></div>
          <img src={project3} alt="" className="h-full w-full z-50" />
        </div>
        <img
          src={wheel}
          alt="wheel"
          className="h-96 w-96 absolute left-[500px] top-10 z-20 overflow-hidden"
        />
      </div>
      {/* Process steps end */}
    </div>
  );
};

export default Process;
