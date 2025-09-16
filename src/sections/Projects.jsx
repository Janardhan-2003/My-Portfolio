import React from "react";
import ProjectCard from "../components/ProjectCard";
import rezoomImg from "../assets/rezoom.png";
import loggingImg from "../assets/logging framework.png";
import todolistImg from "../assets/todo-list.png";
import aithorImg from "../assets/aithor.png";
import nimbusImg from "../assets/weather.png";
import hospitalImg from "../assets/hospital.png";

const projects = [
  {
    title: "rezOOm",
    description: "AI-Powered Resume analyzer",
    about:
      "rezOOm is a smart resume tool that helps job seekers analyze and improve their resumes using AI (Gemini Pro). It evaluates your resume against any job description, gives you an ATS (Appli...",
    gitHub: "https://github.com/Janardhan-2003/rezOOm",
    live: "https://rezoom9.vercel.app/",
    url: rezoomImg,
    techStack: [
      "React",
      "Node.js",
      "CSS",
      "Bootstrap",
      "Gemini API",
      "Firebase",
      "Vercel",
      "JSON prompt",
    ],
  },
  {
    title: "Logging Framework",
    description: "API-key–based logging platform",
    about:
      "Logging Framework is a full-stack log management app. Services send logs via a secure REST API using per-app API keys, and the React dashboard (protected with Firebase Auth) lets you brows...",
    gitHub: "https://github.com/Janardhan-2003/Logging-Framework",
    live: "",
    url: loggingImg,
    techStack: [
      "React",
      "Vite",
      "CSS",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "TodoList",
    description: "Full-Stack Todo Management Application",
    about:
      "TodoList Pro is a modern, full-featured todo management application built with the MERN stack and Firebase authentication. It provides secure Google OAuth login, real-time task management...",
    gitHub: "https://github.com/Janardhan-2003/Todo-List",
    live: "https://focuslist-nine.vercel.app/",
    url: todolistImg,
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Aithor",
    description: "AI-powered interactive word explorer and definition tool.",
    about:
      "Aithor is an intelligent, AI-powered word exploration tool that lets users click or search any word to get a concise, context-rich definition. It uses Gemini to generate 50–100 word expla...",
    gitHub: "https://github.com/Janardhan-2003/aithor1",
    live: "https://aithor-eta.vercel.app/",
    url: aithorImg,
    techStack: [
      "React",
      "CSS",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "NimbuS",
    description: "Modern, responsive weather application with real-time data",
    about:
      "NimbuS is a full-stack weather application that lets users search any city worldwide and instantly view comprehensive weather metrics including temperature, feels-like, humidity, wind spe...",
    gitHub: "https://github.com/Janardhan-2003/Nimbus",
    live: "https://nimbus-sand-two.vercel.app/",
    url: nimbusImg,
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "OpenWeather API",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "Hospital Reception Management",
    description: "Electron + React desktop app for hospital reception.",
    about:
      "Hospital Reception Management is a lightweight desktop application that streamlines front-desk operations. Staff can add patients with auto-generated S.No. and IP numbers, filter records ...",
    gitHub: "https://github.com/Janardhan-2003/Desktop-hospital-reception-management",
    live: "",
    url: hospitalImg,
    techStack: ["React", "Vite", "Electron", "TailwindCSS", "xlsx"],
  },
];


const Projects = () => {
  return (
    <>
      <div className="max-w-4xl w-auto mx-0 ">
        <div>
          <h1 className="text-white my-4 px-10 md:px-15 text-2xl font-medium">Featured Projects</h1>
        </div>
        <div
          className="grid md:grid-cols-2 gap-6 px-10 md:px-15"
          id="projects"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
