import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, User, ChevronDown } from "lucide-react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollContainer from "./ScrollContainer";
import ScrollToTop from "./ScrollToTop";

const ResearchProjectDisplay = () => {
  const [selectedExcerpt, setSelectedExcerpt] = useState<number | null>(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({ target: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Sample project data - you can replace this with actual project data
  const projectData = {
    id: 1,
    title: "INTERNATIONAL RULE OF LAW",
    subtitle: "THE DONALD TRUMP DEVIATION",
    category: "RESEARCH",
    date: "2024",
    author: "SilkyWriters Research Team",
    abstract:
      "An in-depth analysis of executive power dynamics and constitutional constraints in modern democratic governance, examining the tension between presidential authority and the rule of law.",
    keywords: [
      "Rule of Law",
      "Executive Power",
      "Constitutional Law",
      "Democracy",
      "Governance",
    ],
    status: "Published",
  };

  interface Excerpt {
    id: number;
    title: string;
    content: string;
    extended: string;
    citations?: string[];
    theme: "constitutional" | "executive" | "judicial";
    position: { [key: string]: string };
  }

  const excerpts: Excerpt[] = [
    {
      id: 1,
      title: "Foundations of the Rule of Law",
      content:
        "The rule of law serves as the principal safeguard militating against the overreach of unchecked power, preventing its oppressive intrusion into the lives of citizens. The well-established maxim that absolute power corrupts absolutely underscores the necessity for a legal framework that restrains authority and upholds justice. This principle is anchored in three foundational pillars: the supremacy of the law over all individuals, the tenet of equality before the law, and the independence of the judiciary, which functions as a critical check on the first two tenets.",
      extended:
        "The origins of the rule of law reveal a deliberate intent by its progenitors to construct a governance system bound by the spirit of the grundnorm, ensuring that state mechanisms operate within a structured legal order. Historically, governance evolved from systems of unregulated freedom to centralized authority, wherein sovereigns amassed absolute power. This shift necessitated the establishment of legal constraints to mitigate the risk of authoritarian excesses and arbitrariness. The transition to democracy, coupled with the decolonization of African nations, catalyzed an international consensus which made pivotal the adherence to the principles of the rule of law.",

      theme: "constitutional",
      position: { top: "15%", left: "8%" },
    },
    {
      id: 2,
      title: "Executive Power and Separation",
      content:
        "The machinery of the state is divested across the three arms of government, this is an ambit of the rule of law that presupposes that for the law to be supreme and effective, there need be a systematic check on the powers of the sovereign. Apparently, the norm is that the office of the president is constrained by the principle of separation of power, however, executive orders remain a unilateral tool which presidents wield without the interference of congress or the courts.",
      extended:
        "The legal scholarship establishes that executive orders are instrumentalized by Presidents to achieve their most pressing agenda and initiatives, predicated upon the statutory and constitutional powers to do such. The concern has been that this substantial power in the hands of a president is disturbing and may give rise to arbitrariness and absolutism. Executive orders have given presidents the power to expand the territories of their powers beyond what is statutory and constitutional; the courts simply allow this fly and uphold executive orders even though there are vestiges of illegality and 'dubious constitutional authority'.",
      theme: "executive",
      position: { top: "45%", right: "12%" },
    },
    {
      id: 3,
      title: "Presidential Pragmatism vs. Constitutional Limits",
      content:
        "A president, regardless of ideological leanings, must carefully manoeuvre the interplay between executive ambition and political pragmatism, recognizing that an unchecked cascade of executive orders risks not only institutional resistance but also a declining rate of obedience to the principles of the rule of law—a reality that, over time, could undermine the very legitimacy of such decrees.",
      extended:
        "One of such examples is President Truman's confiscation of the nation's steel plant which was overturned in the decision in Youngstown Sheet and Tube v. Sawyer. The apex Court questioned the legitimacy of the Executive order of President Truman which sought to seize a private steel mill during the Korean war; the approach was to keep the workers from going on strike as the steel they produced was vital in the making of weaponry for the ongoing war. The apex court held that the actions of Truman was an executive overreach which lacked constitutional and statutory flavour.",
      citations: [
        " Chester Simon, “An International Rule of Law?”, American Journal of Comparative Law 55, No 2 (2008): 331-362,",
        "Chester Simon, “An International Rule of Law?",
        "Mayer Kenneth, “ Orders and Presidential Power,” The Journal of Politics 61, no. 2 (1999): 445-466",
        "Shane Peter and Harold Bruff, Separation of Powers Law (Durham NC: Carolina Academic Press, 1996)",
        "Fisher Louis, Presidential War Power (Lawrence: University Press of Kansas, 1995)",
        "Fleishman Joel and Arthur Aufses, “Law and Orders: The Problem of Presidential Legislation,” Law and Contemporary Problems 40 (1976) 1-45.",
        "342 U.S 579 (1952)",
      ],
      theme: "judicial",
      position: { bottom: "20%", left: "15%" },
    },
  ];

  return (
    <ScrollContainer sections={[]}>
      <div
        ref={containerRef}
        className="min-h-screen text-white overflow-hidden pt-28"
      >
        {/* Navigation Header */}
        <motion.header
          ref={headerRef}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[rgb(27, 27, 27)] border-b border-gray-800/50"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">
                  Back to Projects
                </span>
              </motion.div>
            </Link>

            <div className="flex items-center gap-8 text-sm text-gray-400">
              <span className="uppercase tracking-wider">
                {projectData.category}
              </span>
              <span>•</span>
              <span>{projectData.date}</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-normal uppercase tracking-wider leading-none mb-4">
                {projectData.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-300 uppercase tracking-widest">
                {projectData.subtitle}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl normal-text font-normal text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              {projectData.abstract}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {projectData.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-600 rounded-full text-sm uppercase tracking-wider text-gray-300"
                >
                  {keyword}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col items-center"
            >
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Scroll to explore excerpts
              </p>
              <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
          </div>
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
          </div>
        </section>

        {/* Interactive Excerpts Section */}
        <section className="relative min-h-screen py-20 px-20">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h3 className="text-4xl font-bold uppercase tracking-wider mb-4">
                Key Excerpts
              </h3>
              <p className="text-gray-400 text-lg">
                Explore the critical insights from this research
              </p>
            </motion.div>

            {/* Add the new Newspaper-style Excerpt Layout */}
            <div className="space-y-16">
              {excerpts.map((excerpt, index) => {
                const isSelected = selectedExcerpt === excerpt.id;

                return (
                  <motion.article
                    key={excerpt.id}
                    className="bg-white/5 backdrop-blur-sm border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Section Header */}
                    <div className="border-b border-gray-800/30 p-6 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500">
                          DISPLAY {index + 1}
                        </h4>
                      </div>
                      <h3 className="text-2xl font-normal text-white mb-2 leading-tight tracking-wide">
                        {excerpt.title}
                      </h3>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                      <div className="prose prose-invert max-w-none">
                        <div className="text-gray-300 leading-relaxed text-base mb-6 text-justify normal-text">
                          {excerpt.content}
                        </div>

                        {/* Read More Toggle */}
                        <button
                          onClick={() =>
                            setSelectedExcerpt(isSelected ? null : excerpt.id)
                          }
                          className="text-sm text-gray-400 normal-text hover:text-white transition-colors duration-200 uppercase tracking-wider font-medium mb-4 flex items-center gap-2"
                        >
                          {isSelected ? "Show Less" : "Read More"}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSelected ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Extended Content */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isSelected ? "auto" : 0,
                            opacity: isSelected ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-gray-800/30 pt-6">
                            <div className="text-gray-300 normal-text leading-relaxed text-base mb-6 text-justify">
                              {excerpt.extended}
                            </div>

                            {/* Citations */}
                            {excerpt.citations &&
                              excerpt.citations.length > 0 && (
                                <div className="border-t border-gray-800/20 pt-4">
                                  <h5 className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3">
                                    Citations
                                  </h5>
                                  <div className="space-y-2">
                                    {excerpt.citations.map((citation, idx) => (
                                      <p
                                        key={idx}
                                        className="text-sm text-gray-400 leading-relaxed"
                                      >
                                        <span className="text-gray-500 mr-2">
                                          [{idx + 1}]
                                        </span>
                                        {citation}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Project Meta Information */}
        <section className="py-20 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <User className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Author
                </h4>
                <p className="text-white font-light">{projectData.author}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Published
                </h4>
                <p className="text-white font-light">{projectData.date}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Status
                </h4>
                <p className="text-white font-light">{projectData.status}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-normal uppercase tracking-wider mb-6">
                Interested in Similar{" "}
                <span className="outline-text4">Research?</span>
              </h3>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed tracking-wide">
                Explore our comprehensive research portfolio or discuss your
                project requirements with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
                >
                  View All Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Start Your Project
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-32"></div>

        <Footer />
      </div>
      <ScrollToTop />
    </ScrollContainer>
  );
};

export default ResearchProjectDisplay;
