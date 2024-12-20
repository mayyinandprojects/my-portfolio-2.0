import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useNavigate, useLocation } from "react-router-dom";
import Resume from "/src/assets/MayYinLam_Resume_FullstackDeveloper.pdf";
import Lebenslauf from "/src/assets/MayYinLam_Lebenslauf_FullstackWebentwicklerin.pdf";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    //IntersectionObserver is the API used for detecting when a user scrolls to a particular section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // use the following if debugging needed for the intersection observer
          // console.log(entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.3 } 
      //threshold 0.4 meaning observer triggers when 30% of content is intersected
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]); // Re-run observer on route change, due to usage of hash routing for gh-pages

  const handleNavigation = (section: string) => {
    setIsSidebarOpen(false);

    // Navigate to the homepage first if not on it
    if (location.pathname !== "/") {
      navigate("/");
    }

    // Scroll to the target section after ensuring we’re on the homepage
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-full text-white"
      >
        {isSidebarOpen ? (
          <XMarkIcon className="w-5 h-5" />
        ) : (
          <Bars3Icon className="w-5 h-5" />
        )}
      </button>

      <aside
        className={`bg-black font-sans text-white w-80 p-6 h-full fixed top-0 left-0 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:w-80`}
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">May Yin</h1>
          <h2 className="text-lg mb-6">
            <span className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-300 hover:via-pink-300 hover:to-purple-400 transition-colors duration-300">
              Fullstack Web Developer
            </span>
          </h2>

          <div className="flex space-x-1 text-sm mb-8">
            <a
              href="https://github.com/mayyinandprojects/"
              className="bold-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github↗
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/may-yin-lam/"
              className=" bold-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn↗
            </a>
            <span>|</span>
            <a
              href={Resume}
              className="bold-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume (EN)↗
            </a>
            <span>|</span>
            <a
              href={Lebenslauf}
              className="bold-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lebenslauf (DE)↗
            </a>
          </div>

          <nav className="space-y-4">
  {["home", "projects", "about", "journey", "contact"].map((section) => (
    <button
      key={section}
      onClick={() => handleNavigation(section)}
      className={`block text-lg bold-hover hover:text-orange-200 
        transition-transform duration-500 ease-in-out 
        transform ${activeSection === section ? "text-amber-300 font-bold translate-x-2" : ""}`}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </button>
  ))}
</nav>

        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
