import { useEffect, useState } from "react";
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
import loadMonigueFont from "./utils/fontLoader";
import Loading from "./components/Loading";
import WhyChooseSilkywriters from "./components/Features";

function Landing() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      try {
        await loadMonigueFont();
        setFontLoaded(true);
      } catch (error) {
        console.warn("Font loading failed, using fallback:", error);
        setFontLoaded(true); // Still show the page with fallback fonts
      }
    };

    loadFont();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top on mount
  }, []);
  // Define section names for the scrollbar indicators
  const sections = [
    "Home",
    "Work",
    "Services",
    "Testimonials",
    "FAQ",
    "Footer",
  ];

  if (!fontLoaded) {
    return <Loading />; // or your Loading component
  }

  return (
    <ScrollContainer sections={sections}>
      <div className="min-h-screen overflow-x-hidden">
        <ModernNavbar />
        <section id="home">
          <Hero />
        </section>
        <section id="Features">
          <WhyChooseSilkywriters />
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
