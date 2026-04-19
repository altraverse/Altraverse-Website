import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SiteShell from "./components/layout/SiteShell";
import {
  COMPACT_ACCORDION_BREAKPOINT,
  initialAccordionState,
  MOBILE_BREAKPOINT,
} from "./data/siteContent";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectsSection from "./components/ProjectSection";

function App() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompactAccordionView, setIsCompactAccordionView] = useState(
    window.innerWidth <= COMPACT_ACCORDION_BREAKPOINT,
  );
  const [openAccordions, setOpenAccordions] = useState(initialAccordionState);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const syncNavbarState = () => {
      setIsScrolled(window.scrollY > 32);
    };

    let scrollTicking = false;
    const onScroll = () => {
      if (scrollTicking) return;

      scrollTicking = true;
      window.requestAnimationFrame(() => {
        syncNavbarState();
        scrollTicking = false;
      });
    };

    const onResize = () => {
      const compact = window.innerWidth <= COMPACT_ACCORDION_BREAKPOINT;
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;

      setIsMobileView(mobile);
      setIsCompactAccordionView(compact);

      if (!mobile) {
        setIsNavOpen(false);
      }

      if (!compact) {
        setOpenAccordions((current) => ({
          mission: current.mission ?? 0,
          expertise: current.expertise ?? 0,
          values: current.values ?? 0,
        }));
      }
    };

    syncNavbarState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    if (isMobileView) {
      setIsNavOpen(false);
    }
  };

  const handleAccordionClick = (group, index) => {
    if (!isCompactAccordionView) return;

    setOpenAccordions((current) => ({
      ...current,
      [group]: index,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setFormStatus({ type: "", message: "Sending your message..." });
    setIsSubmitting(true);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setFormStatus({ type: "success", message: "Message sent successfully." });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isAccordionOpen = (group, index) =>
    isCompactAccordionView ? openAccordions[group] === index : true;

  const getAccordionContentStyle = (group, index) => {
    if (!isCompactAccordionView) {
      return undefined;
    }

    return {
      display: isAccordionOpen(group, index) ? "block" : "none",
      opacity: 1,
      marginTop: isAccordionOpen(group, index) ? "0.95rem" : "0",
    };
  };

  const isProjectsRoute = location.pathname === "/projects";

  return (
    <SiteShell className={isProjectsRoute ? "site-shell-projects" : ""}>
      <Navbar
        isScrolled={isScrolled}
        isNavOpen={isNavOpen}
        isMobileView={isMobileView}
        onToggleNav={() => setIsNavOpen((current) => !current)}
        onNavLinkClick={handleNavLinkClick}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isCompactAccordionView={isCompactAccordionView}
              isAccordionOpen={isAccordionOpen}
              getAccordionContentStyle={getAccordionContentStyle}
              handleAccordionClick={handleAccordionClick}
              handleSubmit={handleSubmit}
              formStatus={formStatus}
              isSubmitting={isSubmitting}
            />
          }
        />
        <Route path="/projects" element={<ProjectsSection />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
      <Footer />
    </SiteShell>
  );
}

export default App;
