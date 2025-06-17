import { useState, useEffect } from "react";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  User,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// Loading Component
const Loading = ({ progress }: { progress: number }) => {
  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center normal-text">
      <div className="text-center">
        <div className="mb-8">
          <Loader2 className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-light text-white uppercase tracking-widest mb-2">
            Loading Research
          </h2>
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Preparing Content
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-gray-500 text-xs mt-4 font-mono">
          {Math.round(progress)}% Complete
        </p>
      </div>
    </div>
  );
};

const ResearchProjectDisplay = () => {
  const [selectedExcerpt, setSelectedExcerpt] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [contentReady, setContentReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Loading effect on mount
  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          // Small delay before hiding loading screen
          setTimeout(() => {
            setIsLoading(false);
            setContentReady(true);
          }, 300);
          return 100;
        }
        // Randomize progress increments for more realistic loading
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(loadingInterval);
  }, []);

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate header position and transform based on scroll

  const headerTransform = Math.min(scrollY / 10, 10);

  // Sample project data
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

  const excerpts = [
    {
      id: 1,
      title: "Foundations of the Rule of Law",
      content:
        "The rule of law serves as the principal safeguard militating against the overreach of unchecked power, preventing its oppressive intrusion into the lives of citizens. The well-established maxim that absolute power corrupts absolutely underscores the necessity for a legal framework that restrains authority and upholds justice.",
      extended:
        "The origins of the rule of law reveal a deliberate intent by its progenitors to construct a governance system bound by the spirit of the grundnorm, ensuring that state mechanisms operate within a structured legal order. Historically, governance evolved from systems of unregulated freedom to centralized authority, wherein sovereigns amassed absolute power.",
      theme: "constitutional",
    },
    {
      id: 2,
      title: "Executive Power and Separation",
      content:
        "The machinery of the state is divested across the three arms of government, this is an ambit of the rule of law that presupposes that for the law to be supreme and effective, there need be a systematic check on the powers of the sovereign.",
      extended:
        "The legal scholarship establishes that executive orders are instrumentalized by Presidents to achieve their most pressing agenda and initiatives, predicated upon the statutory and constitutional powers to do such. The concern has been that this substantial power in the hands of a president is disturbing and may give rise to arbitrariness and absolutism.",
      theme: "executive",
    },
    {
      id: 3,
      title: "Presidential Pragmatism vs. Constitutional Limits",
      content:
        "A president, regardless of ideological leanings, must carefully manoeuvre the interplay between executive ambition and political pragmatism, recognizing that an unchecked cascade of executive orders risks not only institutional resistance but also a declining rate of obedience to the principles of the rule of law.",
      extended:
        "One of such examples is President Truman's confiscation of the nation's steel plant which was overturned in the decision in Youngstown Sheet and Tube v. Sawyer. The apex Court questioned the legitimacy of the Executive order of President Truman which sought to seize a private steel mill during the Korean war.",
      citations: [
        'Chester Simon, "An International Rule of Law?", American Journal of Comparative Law 55, No 2 (2008): 331-362',
        'Mayer Kenneth, "Orders and Presidential Power," The Journal of Politics 61, no. 2 (1999): 445-466',
        "Shane Peter and Harold Bruff, Separation of Powers Law (Durham NC: Carolina Academic Press, 1996)",
      ],
      theme: "judicial",
    },
  ];

  // Show loading screen
  if (isLoading) {
    return <Loading progress={loadingProgress} />;
  }

  return (
    <div className="relative ">
      {/* Navigation Header - Fixed and always visible */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm  border-b border-gray-800/50 transition-all duration-300"
        style={{
          transform: `translateY(-${headerTransform}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
            <Link to="/" className="group">
              <div className="flex items-center gap-3 group-hover:-translate-x-1 transition-transform duration-200">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">
                  Back to Projects
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <span className="uppercase tracking-wider">
              {projectData.category}
            </span>
            <span>•</span>
            <span>{projectData.date}</span>
          </div>
        </div>
      </header>

      <div className="min-h-screen text-white overflow-hidden pt-28">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`mb-8 transition-all duration-1200 ${
                contentReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-24"
              }`}
            >
              <h1 className="text-6xl md:text-8xl font-normal uppercase tracking-wider leading-none mb-4">
                {projectData.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-300 uppercase tracking-widest">
                {projectData.subtitle}
              </h2>
            </div>

            <p
              className={`text-xl font-normal normal-text text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-300 ${
                contentReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {projectData.abstract}
            </p>

            <div
              className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-600 ${
                contentReady ? "opacity-100" : "opacity-0"
              }`}
            >
              {projectData.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 normal-text py-2 border border-gray-600 rounded-full text-sm uppercase tracking-wider text-gray-300"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div
              className={`flex flex-col items-center transition-all duration-800 delay-900 ${
                contentReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Scroll to explore excerpts
              </p>
              <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </div>
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
        <section className="relative min-h-screen py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-4xl font-normal uppercase tracking-wider mb-4">
                Key Excerpts
              </h3>
              <p className="text-gray-400 text-lg normal-text">
                Explore the critical insights from this research
              </p>
            </div>

            <div className="space-y-16">
              {excerpts.map((excerpt, index) => {
                const isSelected = selectedExcerpt === excerpt.id;

                return (
                  <article
                    key={excerpt.id}
                    className="bg-white/5 backdrop-blur-sm border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300"
                  >
                    {/* Section Header */}
                    <div className="border-b border-gray-800/30 p-6 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500">
                          EXCERPT {index + 1}
                        </h4>
                      </div>
                      <h3 className="text-2xl font-normal text-white mb-2 leading-tight tracking-wide">
                        {excerpt.title}
                      </h3>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                      <div className="prose prose-invert max-w-none">
                        <div className="text-gray-300 normal-text leading-relaxed text-base mb-6 text-justify">
                          {excerpt.content}
                        </div>

                        {/* Read More Toggle */}
                        <button
                          onClick={() =>
                            setSelectedExcerpt(isSelected ? null : excerpt.id)
                          }
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider font-medium mb-4 flex items-center gap-2"
                        >
                          {isSelected ? "Show Less" : "Read More"}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSelected ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Extended Content */}
                        <div
                          className={`overflow-hidden normal-text transition-all duration-300 ${
                            isSelected
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="border-t border-gray-800/30 pt-6">
                            <div className="text-gray-300 leading-relaxed text-base mb-6 text-justify">
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
                        </div>
                      </div>
                    </div>
                  </article>
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
              <div className="text-center">
                <User className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Author
                </h4>
                <p className="text-white font-light">{projectData.author}</p>
              </div>

              <div className="text-center">
                <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Published
                </h4>
                <p className="text-white font-light">{projectData.date}</p>
              </div>

              <div className="text-center">
                <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Status
                </h4>
                <p className="text-white font-light">{projectData.status}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-8">
            <div>
              <h3 className="text-4xl font-normal uppercase tracking-wider mb-6">
                Interested in Similar{" "}
                <span className="outline-text4">Research?</span>
              </h3>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed tracking-wide">
                Explore our comprehensive research portfolio or discuss your
                project requirements with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300 hover:scale-105 transform">
                  View All Projects
                </button>
                <button className="border border-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105 transform">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ResearchProjectDisplay;
