import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ModernNavbar from "../components/Navbar";
import ScrollContainer from "../components/ScrollContainer";
import Loading from "../components/Loading";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    projectType: "",
    contactedCompanies: "0",
    reason: "",
    budget: "$500 - $1,000",
    phone: "",
    email: "",
    details: "",
  });

  const [isHovered, setIsHovered] = useState(false);
  // const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top on mount
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const projectTypes = [
    "Thesis Writing",
    "Dissertation Support",
    "Research Papers",
    "Academic Essays",
    "Ghost Writing",
    "Book Writing",
    "Literary Analysis",
    "YouTube Script Writing",
  ];

  const budgetOptions = [
    "$0 - $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $15,000",
    "$15,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top on mount

    // Simulate loading time (you can adjust this or tie it to actual data loading)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  // Show loading component while loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollContainer sections={[]}>
      <div className="min-h-screen w-screen text-white relative overflow-hidden">
        <ModernNavbar />
        <h1 className="text-[160px] absolute -top-[-30rem] right-[-22rem] font-extrabold outline-text2 tracking-widest -rotate-90 transform translate-y-2">
          CONTACT
        </h1>
        <div className="container px-36 py-16 w-full">
          {/* Header Section */}
          <motion.div
            className="mb-16 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-normal uppercase mb-6 w-full">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[goldenrod] to-orange-500">
                Talk
              </span>{" "}
              business
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-[2rem] font-normal uppercase tracking-[0.2em] text-gray-200 mb-4 w-full"
            >
              Tell us about your project and let's craft something
              extraordinary.
            </motion.h2>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="space-y-8 normal-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Step 1: Basic Info */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-lg leading-relaxed">
                <span>Hey there,</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-lg leading-relaxed">
                <span>My name is</span>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="bg-transparent border-b border-gray-600 focus:border-white outline-none px-2 py-1 min-w-[200px] transition-colors duration-300"
                />
                <span>,</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-lg leading-relaxed">
                <span>we could use your services for</span>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    handleInputChange("projectType", e.target.value)
                  }
                  className=" border-b border-gray-600 focus:border-white outline-none px-2 py-1 min-w-[200px] transition-colors duration-300"
                >
                  <option value="">Type of Project</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
                <span>.</span>
              </div>
            </div>

            {/* Step 2: Detailed Info */}
            <div className="space-y-6 pt-8">
              <div className="flex flex-wrap items-center gap-3 text-lg leading-relaxed">
                <span>We'll invest between</span>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="border-b border-gray-600 focus:border-white outline-none px-2 py-1 min-w-[150px] transition-colors duration-300"
                >
                  {budgetOptions.map((budget, index) => (
                    <option key={index} value={budget} className="bg-black">
                      {budget}
                    </option>
                  ))}
                </select>
                <span>in this project.</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-lg leading-relaxed">
                <span>or get in touch by email at</span>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-transparent border-b border-gray-600 focus:border-white outline-none px-2 py-1 min-w-[200px] transition-colors duration-300"
                />
                <span>.</span>
              </div>
            </div>

            {/* Additional Details */}
            <div className="pt-8">
              <textarea
                placeholder="Details and/or clarifications"
                value={formData.details}
                onChange={(e) => handleInputChange("details", e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none px-4 py-3 min-h-[120px]  transition-colors duration-300 resize-none"
                rows={5}
              />
            </div>

            <div className="mb-8">
              <span className="text-3xl font-light">Thanks</span>
            </div>
            {/* Submit Section */}
            <div className="pt-2 flex flex-col ">
              {/* Send Message Button */}
              <div
                className="circular-text-container mt-0 ml-32 w-36 h-36 z-10 mb-40"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Start a Project"
              >
                <div
                  className="absolute inset-0 rounded-full border-2 border-white flex items-center justify-center transition-colors duration-500 ease-in-out overflow-visible"
                  style={{
                    borderColor: isHovered ? "goldenrod" : "goldenrod",
                  }}
                >
                  <div
                    className={`circular-bg-expand ${
                      isHovered ? "scale-100" : "scale-0"
                    }`}
                    style={{ backgroundColor: "goldenrod" }}
                  ></div>
                  <div
                    className={`relative w-full h-full z-10 cursor-pointer flex items-center justify-center overflow-visible ${
                      isHovered ? "scale-60" : "scale-100"
                    }`}
                  >
                    <span
                      className={`tracking-[0.5em] text-sm font-medium whitespace-nowrap extended-text transition-colors duration-300 ${
                        isHovered ? "!text-black" : "!text-white"
                      }`}
                      style={{
                        position: "absolute",
                        width: "200%",
                        textAlign: "center",
                      }}
                    >
                      SEND MESSAGE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-screen h-[0.5px] bg-gray-50 opacity-5 mt-2"></div>
        <Footer />
      </div>
    </ScrollContainer>
  );
};

export default ContactPage;
