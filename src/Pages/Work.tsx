import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// Import your project images (you'll need to add these to your assets)
const projectImages = {
  law: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  seclusion:
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
  independence:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
  disability:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
};

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  category: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  readTime: string;
  status: "Published" | "In Progress" | "Draft";
  featured?: boolean;
}

const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

  // Project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "International Rule of Law",
      subtitle: "The Donald Trump Deviation",
      image: projectImages.law,
      category: "Research",
      date: "2024",
      author: "SilkyWriters Research Team",
      description:
        "An in-depth analysis of executive power dynamics and constitutional constraints in modern democratic governance, examining the tension between presidential authority and the rule of law.",
      tags: [
        "Rule of Law",
        "Executive Power",
        "Constitutional Law",
        "Democracy",
      ],
      readTime: "12 min read",
      status: "Published",
      featured: true,
    },
    {
      id: 2,
      title: "Women Seclusion",
      subtitle: "In Contemporary Society",
      image: projectImages.seclusion,
      category: "Research",
      date: "2024",
      author: "SilkyWriters Research Team",
      description:
        "A comprehensive examination of gender dynamics and social structures that perpetuate the marginalization of women in various cultural contexts.",
      tags: ["Gender Studies", "Social Analysis", "Contemporary Issues"],
      readTime: "10 min read",
      status: "Published",
    },
    {
      id: 3,
      title: "African Independence",
      subtitle: "And Politics",
      image: projectImages.independence,
      category: "Research",
      date: "2024",
      author: "SilkyWriters Research Team",
      description:
        "Exploring the complex political landscape of post-independence Africa and the evolution of governance structures across the continent.",
      tags: ["African Politics", "Independence", "Governance", "History"],
      readTime: "15 min read",
      status: "Published",
    },
    {
      id: 4,
      title: "Social Exclusion",
      subtitle: "Of Persons with Disability",
      image: projectImages.disability,
      category: "Research",
      date: "2024",
      author: "SilkyWriters Research Team",
      description:
        "An investigation into the systemic barriers and social attitudes that contribute to the marginalization of persons with disabilities.",
      tags: ["Disability Rights", "Social Justice", "Inclusion", "Policy"],
      readTime: "11 min read",
      status: "Published",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  // const filteredProjects =
  //   selectedCategory === "All"
  //     ? projects
  //     : projects.filter((p) => p.category === selectedCategory);

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen text-white overflow-hidden">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#1B1B1B]/90 border-b border-gray-800/50"
        style={{ y: headerY }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl font-normal uppercase tracking-wider">
                Our Work
              </h1>

              <div className="flex justify-between">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span className="text-sm">Back to Home</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                    selectedCategory === category
                      ? "text-white border-b border-white pb-1"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-8xl font-normal uppercase tracking-wider mb-6">
              Featured <span className="outline-text4">Work</span>
            </h2>
            <p className="normal-text text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore selected works from our comprehensive research portfolio
              spanning constitutional law, social justice, and contemporary
              governance challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Featured Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/10 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider border border-white/20 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Featured Project Content */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="uppercase tracking-wider">
                        {featuredProject.category}
                      </span>
                      <span>•</span>
                      <span>{featuredProject.date}</span>
                      <span>•</span>
                      <span>{featuredProject.readTime}</span>
                    </div>

                    <h3 className="text-4xl font-normal uppercase tracking-wider mb-2">
                      {featuredProject.title}
                    </h3>

                    {featuredProject.subtitle && (
                      <h4 className="text-xl text-gray-300 uppercase tracking-wider mb-6">
                        {featuredProject.subtitle}
                      </h4>
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 normal-text">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 normal-text">
                    {featuredProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs uppercase tracking-wider bg-white/5 border border-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="self-start flex items-center gap-3 text-white hover:text-gray-300 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      // Navigate to project detail page
                      console.log(`Navigate to project ${featuredProject.id}`);
                    }}
                  >
                    <span className="text-sm uppercase tracking-wider font-normal normal-text">
                      Read Excerpts From The Research
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {regularProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => {
                  // Navigate to project detail page
                  console.log(`Navigate to project ${project.id}`);
                }}
              >
                {/* Project Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 overflow-hidden rounded-xl">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full backdrop-blur-sm ${
                          project.status === "Published"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <div className="flex items-center gap-2 text-white">
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm uppercase tracking-wider">
                          View Research
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span>•</span>
                      <span>{project.date}</span>
                      <span>•</span>
                      <span>{project.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-normal uppercase tracking-wider mb-2 group-hover:text-gray-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                        {project.subtitle}
                      </h4>
                    )}

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 normal-text">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 normal-text">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs text-gray-400 bg-white/5 border border-gray-700/50 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between text-xs text-gray-500 normal-text">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{project.author}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-normal uppercase tracking-wider mb-6">
              Have a Research <span className="outline-text4">Project?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed normal-text">
              Let's collaborate on your next research initiative. Our expert
              team is ready to tackle complex academic and policy challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-normal uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-8 py-4 rounded-full font-normal uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-32"></div>

      <Footer />
    </div>
  );
};

export default Work;
