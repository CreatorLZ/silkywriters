// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// import { useScroll, useTransform, useInView } from "framer-motion";

// // Sample data for services (replace with your own or fetch dynamically)
// const services = [
//   {
//     title: "Academic Writing",
//     description:
//       "Elevate your scholarly work with meticulously crafted essays, theses, and research papers.",
//     extendedDescription:
//       "Our expert writers ensure precision, clarity, and academic rigor in every project.",
//     image:
//       "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
//   },
//   {
//     title: "Creative Writing",
//     description:
//       "Bring your stories to life with vivid narratives and compelling characters.",
//     extendedDescription:
//       "From novels to short stories, we weave imagination into every word.",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
//   },
//   {
//     title: "Content Strategy",
//     description:
//       "Engage your audience with strategic, high-impact content tailored to your brand.",
//     extendedDescription:
//       "We craft content that resonates, converts, and builds loyalty.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
//   },
// ];

// const CraftSection = () => {
//   // Reference for the scroll-triggered elements
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, {
//     once: false,
//     margin: "-100px 0px",
//   });

//   // State for active service card
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Services data
//   const services = [
//     {
//       title: "Academic Excellence",
//       description:
//         "From dissertations to research papers, we deliver meticulously researched academic content that meets the highest standards.",
//       icon: "📚",
//     },
//     {
//       title: "Creative Storytelling",
//       description:
//         "Turn your ideas into captivating narratives that engage readers and leave lasting impressions.",
//       icon: "✒️",
//     },
//     {
//       title: "Business Content",
//       description:
//         "Elevate your brand with compelling copy that converts visitors into customers and builds your authority.",
//       icon: "💼",
//     },
//     {
//       title: "Technical Writing",
//       description:
//         "Complex concepts explained with clarity and precision, making your technical documentation accessible.",
//       icon: "⚙️",
//     },
//   ];

//   // Scroll animation configuration
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   // Auto-rotate through services
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % services.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [services.length]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen w-full bg-gray-900 overflow-hidden"
//     >
//       {/* Background gradient orbs */}
//       {/* <motion.div
//         className="absolute top-0 left-[-30%] w-[80%] h-[80%] rounded-full bg-purple-500 opacity-10 blur-[120px]"
//         style={{ y: backgroundY }}
//       />
//       <motion.div
//         className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-blue-500 opacity-10 blur-[150px]"
//         style={{ y: backgroundY }}
//       /> */}

//       <div className="container mx-auto px-6 lg:px-16 pt-32 pb-24 relative z-10">
//         {/* Section heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-20 max-w-3xl mx-auto text-center"
//         >
//           <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
//             Crafting Words{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//               That Resonate
//             </span>
//           </h2>
//           <p className="text-gray-300 text-lg md:text-xl">
//             Our specialty is transforming ordinary ideas into extraordinary
//             narratives. Choose the writing service that aligns with your vision.
//           </p>
//         </motion.div>

//         {/* Service cards with 3D hover effect */}
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className={`bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 p-6 md:p-8 cursor-pointer transition-all duration-500 ${
//                 activeIndex === index
//                   ? "ring-2 ring-purple-500 shadow-lg shadow-purple-500/20"
//                   : ""
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={
//                 isInView
//                   ? {
//                       opacity: 1,
//                       y: 0,
//                       scale: activeIndex === index ? 1.02 : 1,
//                     }
//                   : {}
//               }
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 scale: 1.03,
//                 rotateY: 5,
//                 rotateX: -5,
//                 y: -5,
//               }}
//               onClick={() => setActiveIndex(index)}
//             >
//               <div className="flex items-start">
//                 <div className="text-4xl mr-4">{service.icon}</div>
//                 <div>
//                   <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-300">{service.description}</p>
//                 </div>
//               </div>

//               {activeIndex === index && (
//                 <motion.div
//                   className="mt-6 pt-4 border-t border-gray-700"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.button
//                     className="text-white bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Explore {service.title}
//                   </motion.button>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Testimonial/Stats panel */}
//         <motion.div
//           className="mt-24 bg-gradient-to-r from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto"
//           initial={{ opacity: 0, y: 80 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//         >
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
//                 500+
//               </h3>
//               <p className="text-gray-300">Projects Completed</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
//                 98%
//               </h3>
//               <p className="text-gray-300">Client Satisfaction</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
//                 24hrs
//               </h3>
//               <p className="text-gray-300">Average Turnaround</p>
//             </div>
//           </div>

//           <div className="mt-8 pt-8 border-t border-gray-700">
//             <p className="text-gray-300 italic text-center">
//               "Their ability to transform my rough ideas into polished content
//               has been nothing short of remarkable. The team consistently
//               delivers exceptional quality."
//             </p>
//             <p className="text-white font-medium text-center mt-4">
//               — Sarah Mitchell, Marketing Director
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Floating navigation dots */}
//       <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-30">
//         {[0, 1, 2].map((dot) => (
//           <div
//             key={dot}
//             className={`h-2 w-2 rounded-full transition-all duration-300 ${
//               dot === 0 ? "bg-white h-3 w-3" : "bg-gray-500"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CraftSection;
