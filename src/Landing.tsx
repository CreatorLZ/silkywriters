import FAQSection from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ModernNavbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollContainer from "./components/ScrollContainer";
import ScrollProgressCursor from "./components/ScrollProgressCursor";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Unique from "./components/Unique";

function Landing() {
  // Define section names for the scrollbar indicators
  const sections = [
    "Home",
    "Work",
    "Services",
    "Testimonials",
    "FAQ",
    "Footer",
  ];

  return (
    <ScrollContainer sections={sections}>
      <div className="min-h-screen overflow-x-hidden">
        <ModernNavbar />
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
        <section id="FAQ" className="">
          <FAQSection />
        </section>
        <section id="Footer" className="">
          <Footer />
        </section>
        <ScrollToTop />
        <ScrollProgressCursor />
      </div>
    </ScrollContainer>
  );
}

export default Landing;
