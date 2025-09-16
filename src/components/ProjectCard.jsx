import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  const { title, description, about, gitHub, live, url, techStack } =
    props.project;
  return (
    <div className="md:w-full border border-gray-700 rounded-t-2xl">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={url}
          alt={title}
          className="rounded-t-2xl hover:scale-105 w-full aspect-video object-cover opacity-70 hover:opacity-100 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-sans text-lg sm:text-xl font-medium mt-2 hover:text-sky-400 transition-colors duration-200 cursor-pointer">
            {title}
          </h1>
          <div className="flex space-x-4">
            {gitHub && (
              <a
                className="scale-120 hover:scale-135 transition-transform duration-200"
                href={gitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="white" size={20} className="mt-1" />
              </a>
            )}
            {live && (
              <a
                className="scale-110 hover:scale-125 transition-transform duration-200"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt color="white" size={20} className="mt-1" />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
        <p className="text-gray-300 text-sm mt-2">{about}</p>
      </div>
      <div className="px-4 pb-4">
        <h2 className="text-white font-sans text-md font-medium mb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-sm border border-gray-800 hover:border-sky-400 transition-colors duration-200 scale-100 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
