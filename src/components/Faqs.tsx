import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What academic research services do you provide?",
    answer:
      "We offer comprehensive academic research services including:\n\n" +
      "- Literature reviews and meta-analyses\n" +
      "- Research methodology consulting\n" +
      "- Statistical analysis and data interpretation\n" +
      "- Academic paper editing and proofreading\n" +
      "- Dissertation and thesis support",
  },
  {
    id: 2,
    question: "What are your researchers' qualifications?",
    answer:
      "Our research team consists of:\n\n" +
      "- PhD holders from accredited universities\n" +
      "- Published academics in peer-reviewed journals\n" +
      "- Subject matter experts across multiple disciplines\n" +
      "- Experienced research methodologists",
  },
  {
    id: 3,
    question: "How do you ensure academic integrity?",
    answer:
      "We maintain strict academic standards through:\n\n" +
      "- Original research and proper citations\n" +
      "- Multiple plagiarism detection tools\n" +
      "- Adherence to academic style guides (APA, MLA, Chicago)\n" +
      "- Confidentiality agreements\n" +
      "- Detailed source documentation",
  },
  {
    id: 4,
    question: "What other writing services do you offer?",
    answer:
      "Beyond academic research, we provide:\n\n" +
      "- Business white papers\n" +
      "- Technical documentation\n" +
      "- Content marketing\n" +
      "- Blog posts and articles\n" +
      "- Website copy",
  },
  {
    id: 5,
    question: "What is your typical turnaround time?",
    answer:
      "Project timelines vary by scope:\n\n" +
      "- Literature reviews: 1-2 weeks\n" +
      "- Research papers: 2-3 weeks\n" +
      "- Dissertations: 4-8 weeks\n" +
      "- Rush services available for urgent requests",
  },
  {
    id: 6,
    question: "Do you offer research consultation services?",
    answer:
      "Yes, our consultation services include:\n\n" +
      "- Research design planning\n" +
      "- Methodology selection\n" +
      "- Data analysis strategy\n" +
      "- Statistical consulting\n" +
      "- Project timeline planning",
  },
  {
    id: 7,
    question: "What are your pricing structures?",
    answer:
      "We offer flexible pricing options:\n\n" +
      "- Per-project basis for research papers\n" +
      "- Hourly rates for consultations\n" +
      "- Package deals for comprehensive research support\n" +
      "- Custom quotes based on project requirements",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-normal uppercase tracking-[0.2em] text-gray-200 mb-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`border-t border-gray-600 ${
                index === faqData.length - 1 ? "border-b" : ""
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-8 text-left flex items-center justify-between group hover:bg-[rgb(35,35,35)] transition-colors duration-200 px-4"
              >
                <h3 className="normal-text text-lg md:text-xl font-bold text-white pr-8 group-hover:text-gray-200 transition-colors duration-200">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <Minus className="w-5 h-5 text-white transition-transform duration-200" />
                  ) : (
                    <Plus className="w-5 h-5 text-white transition-transform duration-200" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.has(item.id) ? "max-h-96 pb-8" : "max-h-0"
                }`}
              >
                <div className="px-4">
                  <p className="text-gray-300 leading-relaxed font-light normal-text">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-32"></div>
    </div>
  );
}
