import { motion } from "framer-motion";
import ModernNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: "📚",
    title: "Academic Writing",
    description:
      "Meticulously researched theses, dissertations, and essays crafted to the highest scholarly standards.",
  },
  {
    icon: "📝",
    title: "Research & Policy Analysis",
    description:
      "In-depth research reports and policy briefs that inform, persuade, and drive real-world impact.",
  },
  {
    icon: "💼",
    title: "Business & Brand Content",
    description:
      "Compelling copy for websites, campaigns, and brands—tailored to your unique voice and goals.",
  },
  {
    icon: "🎥",
    title: "Script & Media Writing",
    description:
      "Engaging scripts for YouTube, podcasts, and video—turning ideas into stories that connect.",
  },
  {
    icon: "🔬",
    title: "Technical & Scientific Writing",
    description:
      "Complex concepts made clear—whitepapers, manuals, and documentation for every audience.",
  },
  {
    icon: "✒️",
    title: "Creative & Literary Projects",
    description:
      "From ghostwriting to literary analysis, we bring creativity and depth to every project.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen w-full  text-white  flex flex-col gap-24 overflow-x-hidden pt-32">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center mb-9 ">
        <ModernNavbar />
        <motion.h1
          className="text-5xl md:text-8xl font-normal tracking-widest uppercase hero-section mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Services <span className="outline-text4">We Offer</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed tracking-wider normal-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Precision, creativity, and research excellence, delivered across every
          project.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto w-full px-8 md:px-14 pt-10 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/30">
                {service.icon}
              </div>
              <h3 className="text-2xl font-normal mb-4 text-white group-hover:text-white tracking-wider">
                {service.title}
              </h3>
              <p className="text-white/70 normal-text leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-0">
        <motion.button
          className="group relative bg-white text-black px-12 py-5 rounded-full font-normal text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">Start Your Project Today</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </motion.button>
      </section>
      <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-2"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
