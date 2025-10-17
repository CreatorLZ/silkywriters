"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Gem, Target, Shield, Award } from "lucide-react";

// Simplified animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {}, // No stagger
  },
};

const WhyChooseSilkywriters = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Results-Driven Content",
      description:
        "We craft content that doesn't just inform—it converts. Our strategic approach helps businesses achieve measurable growth through powerful storytelling and persuasive copy.",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description:
        "Your content needs are delivered within days, not weeks. Our streamlined process and dedicated team ensure you never miss a deadline or opportunity.",
    },
    {
      icon: Gem,
      title: "Premium Quality, Fair Pricing",
      description:
        "Get top-tier content without the premium agency price tag. We believe exceptional writing should be accessible to businesses of all sizes.",
    },
    {
      icon: Target,
      title: "Strategic Content Solutions",
      description:
        "We don't just write—we solve problems. Our content strategies are tailored to address your unique business challenges and audience needs.",
    },
    {
      icon: Shield,
      title: "Dedicated Client Portal",
      description:
        "Manage all your projects, revisions, and communications through our secure client portal. Complete transparency and control at your fingertips.",
    },
    {
      icon: Award,
      title: "Expert Writing Team",
      description:
        "Work with seasoned professionals who understand your industry. Our writers combine creativity with strategic thinking to deliver content that truly resonates.",
    },
  ];

  return (
    <div className="min-h-screen text-white lg:px-20 px-5 py-20 relative overflow-hidden">
      <motion.div
        className="absolute w-[100vw] h-[0.5px] bg-gray-50 top-0 left-0 z-20"
        initial={{ opacity: 0.1, width: 0 }}
        whileInView={{ opacity: 0.1, width: "100vw" }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <div className="lg:max-w-7xl max-w-full lg:mx-auto mx-0 relative z-10">
        {/* Header */}
        <div className="text-center w-full mb-20 lg:mt-16 mt-10">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl font-medium mb-6 tracking-wider bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent relative overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            {["Why", "Choose", "Silkywriters"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mx-1 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.4 + i * 0.18,
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block ml-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30, rotate: -180, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 1.1,
              }}
              whileHover={{ scale: 1.4, rotate: 20, color: "#f3f4f6" }}
            >
              ?
            </motion.span>
          </motion.h1>

          <motion.p
            className="normal-text text-xs text-center lg:text-base text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wider relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <span className="relative">
              Trusted expertise. Fresh perspective. Proven results.
              <motion.div
                className="absolute left-0 right-0 top-1/2 h-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 opacity-40 blur-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.6 }}
              />
            </span>
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl  border-white/10 border-dashed border-2 p-8 text-center transition-all duration-500 hover:bg-white/10  hover:border-dotted hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="lg:w-16 lg:h-16 h-12 w-12 mx-auto mb-6 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/30">
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="lg:text-xl text-lg font-normal mb-4 text-white group-hover:text-white transition-colors duration-300 tracking-wider">
                {feature.title}
              </h3>

              <p className="lg:text-sm text-xs text-white/50 normal-text leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group relative bg-white text-black px-12 lg:px-10 py-2.5 lg:py-4 rounded-full font-normal text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 overflow-hidden">
            <span className="relative z-10">Start Your Project Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSilkywriters;
