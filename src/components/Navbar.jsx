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
    <nav className=" top-0 left-0 z-50 w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-10 md:px-15 py-8 flex justify-between items-center">
        <a href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }} className="flex items-center ">
        <h1 className="text-xl font-bold text-white font-serif">Janardhan</h1>
        <GiThunderball className="text-white text-xl"/>
        </a>

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
