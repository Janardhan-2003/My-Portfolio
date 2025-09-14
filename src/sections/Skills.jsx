import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPrisma,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { LuFileJson2 } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs, FaPython, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  // ---------- Frontend ----------

  {
    name: "Python",
    icon: FaPython,
    color: "#306998",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61dafb",
  },
  /**  
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#",
  },**/
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572b6",
  },
  /**{
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
  },**/

  // ---------- Backend ----------
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#68a063",
  },
  {
    name: "REST API",
    icon: IoSettings,
    color: "#61dafb",
  },
  {
    name: "MySQL",
    icon: TbBrandMysql,
    color: "#4479a1",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
  },
  {
    name: "JSON",
    icon: LuFileJson2,
    color: "#f0db4f",
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#ffca28",
  },
  /** {
    name: "GraphQL",
    icon: SiGraphql,
    color: "#e535ab",
  },**/
  /**  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#186997",
  },**/

  // ---------- Programming ----------
  /**  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599c",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#f7b731",
  },**/

  // ---------- Tools ----------
  {
    name: "Git",
    icon: SiGit,
    color: "#f34f29",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#ffffff ",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#ff6c37",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007acc",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646cff",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#ffffff",
  },
  {
    name: "Render",
    icon: SiRender,
    color: "#ffffff",
  },
  {
    name: "Figma",
    icon: PiFigmaLogoFill,
    color: "#f24e1e",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#ff9900",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col md:px-15 px-10">
      <div className="px-2">
        <h1 className="text-white font-sans text-2xl font-medium">Technical Skills</h1>
      </div>

      <div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4">
          {skills.map((skill) => (
            <a
              key={skill.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center space-x-2 py-2 rounded-lg shadow-md hover:shadow-xl border border-gray-700 hover:border-sky-400 transition-transform duration-200 cursor-text"
            >
              <skill.icon color={skill.color} />
              <span className="text-sm text-white">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
