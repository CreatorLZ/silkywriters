import InfiniteSlider from "./InfiniteSLider";

const Testimonials = () => {
  const testimonials = [
    {
      client: "TECHFLOW",
      quote:
        "Their copywriting transformed our conversion rates by 340%. Every word was strategically placed to drive action.",
      author: "Sarah Chen",
      role: "CMO, TechFlow Solutions",
    },
    {
      client: "MAVEN CO",
      quote:
        "From brand voice to website copy, they captured our essence perfectly. Our customers finally understand what we do.",
      author: "Marcus Rivera",
      role: "Founder, Maven Co",
    },
    {
      client: "NEXUS",
      quote:
        "Best content team we've worked with. They don't just write—they think strategically about every piece.",
      author: "Lisa Park",
      role: "Head of Marketing, Nexus Digital",
    },
    {
      client: "BOLD LABS",
      quote:
        "Their storytelling ability is unmatched. They turned our complex product into compelling narratives that sell.",
      author: "David Kim",
      role: "CEO, Bold Labs",
    },
    {
      client: "STANFORD",
      quote:
        "Exceptional research writing that elevated our academic publications. Their ability to distill complex theories into accessible prose is remarkable.",
      author: "Dr. Emily Rodriguez",
      role: "Professor of Linguistics, Stanford University",
    },
    {
      client: "MIT",
      quote:
        "They transformed our technical documentation into clear, engaging content. Our research findings finally reach the audiences they deserve.",
      author: "Prof. Michael Zhang",
      role: "Department Head, Computer Science, MIT",
    },
    {
      client: "HARVARD",
      quote:
        "Outstanding grant writing support. Their expertise helped us secure over $2M in research funding with compelling narratives.",
      author: "Dr. Alexandra Thompson",
      role: "Research Director, Harvard Medical School",
    },
    {
      client: "OXFORD",
      quote:
        "Brilliant academic writing that maintains scholarly rigor while being genuinely readable. They understand both worlds perfectly.",
      author: "Prof. James Mitchell",
      role: "Fellow, Oxford University",
    },
    {
      client: "YALE",
      quote:
        "Their white papers and policy briefs have shaped important conversations in our field. Truly impactful work.",
      author: "Dr. Rachel Kim",
      role: "Policy Research Institute, Yale University",
    },
    {
      client: "COLUMBIA",
      quote:
        "From dissertation editing to journal submissions, they've been instrumental in advancing academic careers across our department.",
      author: "Prof. Daniel Foster",
      role: "Graduate Studies Director, Columbia University",
    },
    {
      client: "VERTEX INC",
      quote:
        "Their technical writing made our complex AI solutions understandable to investors and clients. Game-changing clarity.",
      author: "Jennifer Walsh",
      role: "CTO, Vertex Inc",
    },
    {
      client: "PINNACLE",
      quote:
        "Content strategy that actually converts. Our thought leadership pieces now generate qualified leads consistently.",
      author: "Robert Hayes",
      role: "VP Marketing, Pinnacle Consulting",
    },
  ];

  return (
    <section className=" text-white py-20 px-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[2rem] font-bold uppercase tracking-[0.2em] text-gray-200 mb-2">
            CLIENT TESTIMONIALS
          </h2>
        </div>

        {/* Testimonials Grid */}
        <InfiniteSlider
          duration={100}
          durationOnHover={220}
          className="py-4"
          gap={32}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              {/* Client Card */}
              <div className="relative bg-[rgb(35,35,35)] hover:bg-[rgb(51,50,50)] transition-all duration-300 p-8 h-64 flex flex-col justify-between border-0  hover:border-gray-200 overflow-hidden">
                {/* Client Name */}
                <div className="mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-400 mb-6">
                    {testimonial.client}
                  </h3>
                </div>

                {/* Quote Preview - First few words */}
                <div className="flex-1 flex items-center">
                  <p className="text-lg font-light text-white leading-relaxed">
                    "{testimonial.quote.split(" ").slice(0, 6).join(" ")}..."
                  </p>
                </div>

                {/* Hover overlay with full quote - confined to card */}
                <div className="absolute inset-0 bg-[rgb(35,35,35)] border border-gray-600 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-300 mb-4">
                      {testimonial.client}
                    </h3>
                    <p className="text-xs text-gray-200 leading-relaxed mb-4 overflow-hidden">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="border-t border-gray-600 pt-3">
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteSlider>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm mb-6">
            Ready to join our satisfied clients?
          </p>
          <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
