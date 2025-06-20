import { useState, useEffect } from "react";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  User,
  ChevronDown,
  Loader2,
} from "lucide-react";

// Loading Component
const Loading = ({ progress }: { progress: number }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
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

const DisabilitySocialExclusion = () => {
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

  // Project data for disability research
  const projectData = {
    id: 1,
    title: "SOCIAL EXCLUSION",
    subtitle: "OF PERSONS WITH DISABILITY",
    category: "RESEARCH",
    date: "2024",
    author: "SilkyWriters Research Team",
    abstract:
      "An extensive analysis of social barriers and perceptions affecting persons with disabilities, examining how societal attitudes shape identity formation and the critical need for inclusive policies and community education.",
    keywords: [
      "Disability",
      "Social Exclusion",
      "Inclusion",
      "Barriers",
      "Identity",
      "Rights",
    ],
    status: "Published",
  };

  const excerpts = [
    {
      id: 1,
      title: "Social Perceptions and Identity Formation",
      content:
        "Disability in itself does not impede the extent of an individual's descriptions and definitions. It does not solely define people's personality, future, or status beyond the scope of the effect of the respective disability. However, the personalities of people with disabilities, like anyone else's, are formed by their engagement with other factors.",
      extended:
        "Throughout history, the public and social perceptions of people with disabilities have never been stable, the same, or consistent from location to location. They have been viewed as mad, elements of charity, deviants, and people with a higher tendency to commit crimes. The stigma in some African societies is stronger because of a lesser understanding of those with disabilities and perceptions vary. These perceptions have been responsible for the information and orientations that form the basis of idea formation, personalities, and identities of people with disabilities. It shapes how they see the world and the vantage points from which they approach social issues and people in general.",
      theme: "identity",
    },
    {
      id: 2,
      title: "Understanding Visible vs Non-Visible Disabilities",
      content:
        "Social perception of disability contributes to the limitations of this identity. Many people with disabilities have redefined their personalities based on others' perceptions. Understanding children with autism from the wrong viewpoint of the teacher could result in low self-esteem and affect their educational aspirations.",
      extended:
        "For instance, there seems to be a lesser understanding and conceptualization of visible and non-visible disabilities. While those with obvious body injuries might be understood, questions like autism and other cognitive disabilities might not be met with correct medical and psychological explanations in many societies. Hence, it could invite some extra-terrestrial explanation of the concepts, and where there are scientific explanations, they sometimes do not form a guarantee for the right perception. The societal medium of understanding disability in Africa goes into seeing social barriers as reasons for wrong perceptions and further disabling of persons with disabilities.",
      theme: "understanding",
    },
    {
      id: 3,
      title: "Policy Implementation and Legal Framework",
      content:
        "Solutions, policies, and regulations that would ensure the protection of persons with disabilities must draw active participants from the wide pool of persons without disability to find solutions. It means there is a need to educate the general population on the status of persons with disabilities and correct their perspectives.",
      extended:
        "The rights of persons with disabilities have been ratified both in the African charter and the UN charter, which contains unambiguous and clear provisions as relating to the elimination of marginalization of persons with disabilities. Some of these charters have been domesticated into our various laws. We have seen recent policies which have sought create equal opportunities to persons with disabilities but have failed due to inefficiency of implementation and the failure of the backing of the law. The first stop in accelerating real actions that eliminate marginalization and create equal opportunities for persons with disabilities would be the instrumentality of the law.",
      citations: [
        'African Charter on Human and Peoples\' Rights, Article 18(4) - "The aged and the disabled shall also have the right to special measures of protection"',
        "UN Convention on the Rights of Persons with Disabilities (CRPD), General principles of non-discrimination and full participation",
        "Domestic Implementation Reports on Disability Rights Legislation in African States (2023)",
      ],
      theme: "policy",
    },
    {
      id: 4,
      title: "Community-Centered Solutions and Inclusion",
      content:
        "Solutions need to be people-centered; as such, the supposed 'other' need not further see the difference but understand equality for the sake of it and not pity or differences alone. Institutional policies and efforts must be made within the purview of social contracts, situations, and reality.",
      extended:
        "The government needs to advance its commitment towards inclusion in the grand scheme of things, provide amenities that are reachable by persons with disabilities, and take cognizance of their peculiarities. By so doing, the level of difference that appeals to some psychological instincts of difference would be reduced. It would also help the community of persons with disabilities to grow past low self-esteem. Without such effort, it is quite impossible to enforce any law, convention, or protocol. Hence, where social gaps are still wide, it is likely that the actions and strategies put in place to protect the rights of persons with a disability could be a waste of time.",
      theme: "solutions",
    },
  ];

  // Show loading screen
  if (isLoading) {
    return <Loading progress={loadingProgress} />;
  }

  return (
    <div className="relative min-h-screen">
      {/* Navigation Header - Fixed and always visible */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-800/50 transition-all duration-300"
        style={{
          transform: `translateY(-${headerTransform}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
            <div className="flex items-center gap-3 group-hover:-translate-x-1 transition-transform duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                Back to Projects
              </span>
            </div>
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
              className={`text-xl font-normal text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-300 ${
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
                  className="px-4 py-2 border border-gray-600 rounded-full text-sm uppercase tracking-wider text-gray-300"
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
                Scroll to explore key findings
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
                Key Research Findings
              </h3>
              <p className="text-gray-400 text-lg">
                Exploring the complexities of social exclusion and disability
              </p>
            </div>

            <div className="space-y-16">
              {excerpts.map((excerpt, index) => {
                const isSelected = selectedExcerpt === excerpt.id;

                return (
                  <article
                    key={excerpt.id}
                    className="bg-white/5 backdrop-blur-sm border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 rounded-lg"
                  >
                    {/* Section Header */}
                    <div className="border-b border-gray-800/30 p-6 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500">
                          SECTION {index + 1}
                        </h4>
                        <span
                          className={`text-xs px-3 py-1 rounded-full border ${
                            excerpt.theme === "identity"
                              ? "border-blue-500/30 text-blue-400"
                              : excerpt.theme === "understanding"
                              ? "border-green-500/30 text-green-400"
                              : excerpt.theme === "policy"
                              ? "border-purple-500/30 text-purple-400"
                              : "border-orange-500/30 text-orange-400"
                          }`}
                        >
                          {excerpt.theme}
                        </span>
                      </div>
                      <h3 className="text-2xl font-normal text-white mb-2 leading-tight tracking-wide">
                        {excerpt.title}
                      </h3>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                      <div className="prose prose-invert max-w-none">
                        <div className="text-gray-300 leading-relaxed text-base mb-6 text-justify">
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
                          className={`overflow-hidden transition-all duration-300 ${
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
                                    References
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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Project Meta Information */}
        <section className="py-20 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <User className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Research Team
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
                Building Inclusive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Communities
                </span>
              </h3>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed tracking-wide">
                Join us in advancing disability rights research and creating
                more inclusive societies through evidence-based policy
                recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300 hover:scale-105 transform">
                  View All Research
                </button>
                <button className="border border-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105 transform">
                  Collaborate With Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisabilitySocialExclusion;
