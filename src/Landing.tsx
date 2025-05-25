import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Process from "./components/Process";
import Projects from "./components/Projects";
import ScrollContainer from "./components/ScrollContainer";
import ScrollProgressCursor from "./components/ScrollProgressCursor";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Unique from "./components/Unique";
// import Statement from "./components/Statement";
// import Services from "./components/Services";

function Landing() {
  // Define section names for the scrollbar indicators
  const sections = [
    "Home",
    "Work",
    "Services",
    "Testimonials",
    "Contact",
    "FAQ",
  ];

  return (
    <ScrollContainer sections={sections}>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="work">
          <Projects />
        </section>
        <section id="services">
          <Unique />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
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
