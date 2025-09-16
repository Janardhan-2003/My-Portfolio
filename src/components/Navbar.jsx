import { useState } from "react";
import { GiThunderball } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-transparent backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }} className="flex items-center ">
        <h1 className="text-xl font-bold text-white font-serif">Janardhan</h1>
        <GiThunderball className="text-white text-xl"/>
        </a>

        <button
          className="md:hidden text-white p-2 rounded hover:bg-white/10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="hover:text-sky-400 cursor-pointer transition"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="hover:text-blue-400 cursor-pointer transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
              className="hover:text-blue-400 cursor-pointer transition"
            >
              Education
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-white/10">
          <ul className="px-4 py-3 space-y-2 text-white font-medium">
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
                className="block px-2 py-2 rounded hover:bg-white/10"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="block px-2 py-2 rounded hover:bg-white/10"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("education");
                }}
                className="block px-2 py-2 rounded hover:bg-white/10"
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
