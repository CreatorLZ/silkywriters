// import { ArrowRight } from "lucide";
// import { motion } from "framer-motion";

// const Statement = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   };

//   const stepVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     show: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   };

//   // Feature steps
//   const steps = [
//     {
//       id: 1,
//       title: "Consultation",
//       description: "We discuss your vision and goals",
//     },
//     {
//       id: 2,
//       title: "Research",
//       description: "We gather all necessary information",
//     },
//     { id: 3, title: "Draft", description: "We create the initial content" },
//     { id: 4, title: "Revise", description: "We refine until perfect" },
//     { id: 5, title: "Deliver", description: "We provide the final product" },
//     { id: 6, title: "Support", description: "We offer ongoing assistance" },
//   ];

//   return (
//     <div className="w-full min-h-full overflow-scroll">
//       <section className="py-24 px-4 md:px-8 lg:px-12 text-white overflow-scroll">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="max-w-7xl mx-auto  "
//         >
//           {/* Top heading */}
//           <motion.div
//             variants={itemVariants}
//             className="mb-24 flex w-full flex-col pl-[200px] "
//           >
//             <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold  uppercase break-words">
//               <span className="block">WE'LL</span>
//               <span className="block pl-[150px]">HELP YOU</span>
//               <span className="block pl-[250px]">STAND OUT</span>
//             </h2>
//             <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
//               Get the right words to captivate your audience and elevate your
//               brand
//             </p>
//           </motion.div>

//           {/* Process steps */}
//           <motion.div variants={itemVariants} className="relative mb-32 flex">
//             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 transform -translate-y-1/2"></div>
//             <div className="relative flex justify-between overflow-x-auto pb-4 md:pb-0">
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={step.id}
//                   variants={stepVariants}
//                   className="flex flex-col items-center min-w-max px-2"
//                   custom={index}
//                 >
//                   <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg mb-4 relative z-10 hover:bg-[goldenrod] transition-colors duration-300 cursor-pointer">
//                     {step.id}
//                   </div>
//                   <div className="text-center flex md:block">
//                     <h3 className="font-semibold">{step.title}</h3>
//                     <p className="text-sm text-gray-400">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Bottom heading */}
//           <motion.div variants={itemVariants} className="text-center">
//             <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase break-words">
//               <span className="block">AND MAKE ALL</span>
//               <span className="block">YOUR DREAMS</span>
//               <span className="block">COME TRUE</span>
//             </h2>
//             <motion.div variants={itemVariants} className="mt-12">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[goldenrod] transition-colors duration-300 flex items-center gap-2 mx-auto"
//               >
//                 <span>Start Your Project</span>
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Statement;
