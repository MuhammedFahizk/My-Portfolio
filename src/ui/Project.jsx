import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { PiGithubLogoThin } from "react-icons/pi";
import { Div } from "../common/Div";

export const Project = ({ project, index }) => {
  return (
    <div
      className={`h-fit flex flex-col md:flex-row ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      } bg-lightS md:bg-[#0000] md:dark:bg-transparent dark:bg-darkS rounded-lg gap-6 py-8 px-6 m-2`}
    >
      {/* Image Section */}
      <div className="flex justify-center w-full">
        <img
          src={project.image}
          alt={project.title}
          className="h-[200px] md:h-[250px] md:w-[450px] object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center  p-2 md:p-4 space-y-1">
        {/* Header & Links */}
        <div
          className={`flex items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:items-end"
          } justify-between w-full space-x-2`}
        >
          <Div className="flex z-10">
            {project.links.repo && (
              <a
                href={project.links.repo}
                aria-label="View GitHub Repository"
                className="px-2 py-1 text-sm font-medium transition-colors flex items-center"
              >
                <PiGithubLogoThin className="hover:text-primary" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                aria-label="View Live Demo"
                className="px-2 py-1 text-sm font-medium transition-colors flex items-center"
              >
                <IoEyeOutline className="hover:text-primary" />
              </a>
            )}
          </Div>
          <h2 className="text-sm font-Acme flex gap-2 justify-end items-center text-primary">
            <HiArrowLongLeft />
            {project.title}
          </h2>
        </div>

        {/* ✅ Subheading with Dynamic Alignment */}
        <p
          className={`text-lg hidden font-Nunito md:flex gap-2 items-center ${
            index % 2 !== 0 ? "justify-start" : "justify-end"
          }`}
        >
          {project.subHead}
        </p>

        <div
          className={`bg-[rgba(255,255,255,0.26)] backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg ${
            index % 2 !== 0 ? "text-start" : "text-end"
          } text-sm leading-relaxed`}
        >
          <p>{project.description}</p>
        </div>

        <div
          className={`flex flex-wrap justify-center py-2 ${
            index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
          } items-center`}
        >
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`font-Nunito px-1 md:py-1 text-primary text-xs md:text-sm ${
                i !== project.technologies.length - 1
                  ? "border-r border-primary pr-2"
                  : ""
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
