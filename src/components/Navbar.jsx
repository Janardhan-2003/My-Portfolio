import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-14 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white font-serif">Janardhan.</h1>

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
    </nav>
  );
};

export default Navbar;
