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

const AfricanIndependencePolitics = () => {
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
    title: "AFRICAN INDEPENDENCE",
    subtitle: "AND POLITICS",
    category: "RESEARCH",
    date: "2024",
    author: "SilkyWriters Research Team",
    abstract:
      "A comprehensive examination of African independence movements and post-colonial political developments, focusing on the transition from colonial rule to self-governance and the emergence of national identity.",
    keywords: [
      "Independence",
      "Politics",
      "Decolonization",
      "Nationalism",
      "Africa",
      "Gambia",
    ],
    status: "Published",
  };

  const excerpts = [
    {
      id: 1,
      title: "The Path to Independence: Gambian Liberation Movement",
      content:
        "It was not until the year 1965 did British hegemony and absolute authority cease in Gambia facilitated by the nationalist movements in neighboring countries like Nigeria and the Gold Coast (now Ghana). One of the most influential of this era was Dawda Jawara.",
      extended:
        "It was under his leadership and the uniting effort of the People's Progressive Party (PPP) that Gambians were able to sufficiently influence the politics of the state to liberate themselves from absolute British rule for the first time in nearly four centuries. Beginning in 1950s and culminating in 1959 with the formation of the People's Progressive Party (PPP) the desire for self-determination and enfranchisement of the Gambian populace was at an unprecedented height. The party was formed with the primary goal of giving a platform to citizens who had no right of law, no recourse, and very little autonomy over their lives and properties.",
      theme: "independence",
    },
    {
      id: 2,
      title: "Youth Unrest and Colonial Resistance",
      content:
        "Throughout the nation's territories there were protest and demonstrations. With increasing population of educated and restless youths in cities like Bathurst British officers realized an increasing restlessness amongst the youthful generation in the colony itself as early as the mid-1950s.",
      extended:
        "A cursory review of the West Region of the Gambia in 1955 ascertained restiveness amidst viral men as the causal link between the demonstrations and the growing unrest in the country. Several areas of grievance were adjourned with youth discontent with limited economic and financial opportunities, inability to head the household until the age of forty, and wide spread of corruption amongst chiefs and elders, who manipulated the system for their own goal, whilst criticizing the young.",
      theme: "resistance",
    },
    {
      id: 3,
      title: "Post-Independence Cultural Renaissance",
      content:
        "The Gambia experienced a cultural renaissance after independence while trying to build a national identity that was appreciative of both modern influences and indigenous heritage. The removal of colonial rule provided an opportunity for the reconstruction and revitalization of practices that Britain had sought to alter.",
      extended:
        "For instance, ceremonial functions and communal rituals served to showcase cultural identity and assert a sense of belonging to the new nation state. This renaissance was buttressed by grassroots cultural movements that sought to modernize traditional Gambian customs as well as campaigns mounted by educated and politically active citizens of The Gambia. This transformation was also evident in the changes made to the education system during the first few years of independence. Gambian history, language, and indigenous knowledge systems were introduced giving students a sense of pride and identity in contrast to the previously enforced colonial system.",
      citations: [
        'Abdoulaye Saine, "The Gambia: Politics and Society in Transition", African Studies Review 45, No 2 (2002): 78-102',
        'Ebrima Ceesay, "Decolonization and Cultural Identity in West Africa", Journal of African History 38, no. 3 (1997): 245-268',
        "UNDP, African Cultural Renaissance: Post-Colonial Development Reports (New York: United Nations Development Programme, 1970)",
      ],
      theme: "cultural",
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

export default AfricanIndependencePolitics;
