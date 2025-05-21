import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollContainer from "./components/ScrollContainer";
import ScrollProgressCursor from "./components/ScrollProgressCursor";
import ScrollToTop from "./components/ScrollToTop";
// import Services from "./components/Services";

function Landing() {
  // Define section names for the scrollbar indicators
  const sections = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Testimonials",
    "Contact",
    "FAQ",
  ];

  return (
    <ScrollContainer sections={sections}>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Projects />
        {/* <Services /> */}
        <section id="about" className="h-screen w-full bg-[#d5e21f]"></section>
        <section
          id="services"
          className="h-screen w-full bg-[#8fd5e8]"
        ></section>
        <section
          id="portfolio"
          className="h-screen w-full bg-[#201127]"
        ></section>
        <section
          id="testimonials"
          className="h-screen w-full bg-[#3e101f]"
        ></section>
        <section
          id="contact"
          className="h-screen w-full bg-[#50551b]"
        ></section>
        <section id="faq" className="h-screen w-full bg-amber-900"></section>
        <ScrollToTop />
        <ScrollProgressCursor />
      </div>
    </ScrollContainer>
  );
}

export default Landing;
