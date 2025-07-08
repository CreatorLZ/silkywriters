import { motion } from "framer-motion";

const WhyChooseSilkywriters = () => {
  const features = [
    {
      icon: "📈",
      title: "Results-Driven Content",
      description:
        "We craft content that doesn't just inform—it converts. Our strategic approach helps businesses achieve measurable growth through powerful storytelling and persuasive copy.",
    },
    {
      icon: "⚡",
      title: "Lightning-Fast Delivery",
      description:
        "Your content needs are delivered within days, not weeks. Our streamlined process and dedicated team ensure you never miss a deadline or opportunity.",
    },
    {
      icon: "💎",
      title: "Premium Quality, Fair Pricing",
      description:
        "Get top-tier content without the premium agency price tag. We believe exceptional writing should be accessible to businesses of all sizes.",
    },
    {
      icon: "🎯",
      title: "Strategic Content Solutions",
      description:
        "We don't just write—we solve problems. Our content strategies are tailored to address your unique business challenges and audience needs.",
    },
    {
      icon: "🔒",
      title: "Dedicated Client Portal",
      description:
        "Manage all your projects, revisions, and communications through our secure client portal. Complete transparency and control at your fingertips.",
    },
    {
      icon: "🥇",
      title: "Expert Writing Team",
      description:
        "Work with seasoned professionals who understand your industry. Our writers combine creativity with strategic thinking to deliver content that truly resonates.",
    },
  ];

  return (
    <div className="min-h-screen  text-white lg:px-20 px-5 py-20 relative overflow-hidden">
      <motion.div
        className="absolute w-[100vw] h-[0.5px] bg-gray-50 top-0 left-0 z-20"
        initial={{ opacity: 0.1, width: 0 }}
        whileInView={{ opacity: 0.1, width: "100vw" }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      />
      <div className="lg:max-w-7xl max-w-full  lg:mx-auto mx-0 relative z-10">
        {/* Header */}
        <div className="text-center w-full mb-20">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-normal mb-6  tracking-wide">
            Why Choose Silkywriters <span className="">?</span>
          </h1>
          <p className="normal-text text-base text-white/70 max-w-2xl mx-auto leading-relaxed tracking-wider">
            Trusted expertise. Fresh perspective. Proven results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Top border glow effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/30">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-normal mb-4 text-white group-hover:text-white transition-colors duration-300 tracking-wider">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 normal-text leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group relative bg-white text-black px-10 py-4 rounded-full font-normal text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 overflow-hidden">
            <span className="relative z-10">Start Your Project Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSilkywriters;
