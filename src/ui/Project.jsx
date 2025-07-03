import React, { useRef } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { PiGithubLogoThin } from "react-icons/pi";
import { Div } from "../common/Div";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Project = ({ project, index }) => {
  const imageRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      {
        width: 100,
        height: 10,
        x: 100,
        y: -300,
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 30%",  
          toggleActions: "play reverse play reverse",
          scrub: true,
        },
        width: 450,
        height: "auto",
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      contentRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );
    
  }, []);

  return (
    // changes marked with 🔧 for clarity

<div
  className={`h-fit flex flex-col md:flex-row ${
    index % 2 !== 0 ? "md:flex-row-reverse" : ""
  } bg-lightS md:bg-[#0000] md:dark:bg-transparent dark:bg-darkS rounded-lg gap-6 py-8 px-4 sm:px-6 m-2`}
>
  {/* Image Section */}
  <div className="flex justify-center w-full" ref={imageRef}>
    <img
      src={project.image}
      alt={project.title}
      className="w-full max-w-sm h-auto sm:h-[220px] md:h-[250px] md:w-[450px] object-cover rounded-xl"
    />
  </div>

  {/* Content Section */}
  <div className="flex flex-col justify-center p-2 md:p-4 space-y-3 sm:space-y-2">
    {/* Header & Links */}
    <div
      className={`flex flex-col-reverse sm:flex-row ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      } justify-between items-start md:items-center gap-2`}
    >
      <h2 className="text-base sm:text-sm font-Acme flex gap-2 items-center text-primary">
        <HiArrowLongLeft />
        {project.title}
      </h2>
      <Div className="flex z-10">
        {project.links.repo && (
          <a
            href={project.links.repo}
            aria-label="View GitHub Repository"
            className="px-2 py-1 text-sm transition-colors flex items-center"
          >
            <PiGithubLogoThin className="hover:text-primary" />
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            aria-label="View Live Demo"
            className="px-2 py-1 text-sm transition-colors flex items-center"
          >
            <IoEyeOutline className="hover:text-primary" />
          </a>
        )}
      </Div>
    </div>

    {/* SubHead - 🔧 made visible on mobile */}
    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-Nunito">
      {project.subHead}
    </p>

    {/* Description Card */}
    <div
      ref={contentRef}
      className={`bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/30 p-4 rounded-2xl shadow-lg text-sm sm:text-base leading-relaxed text-gray-800 dark:text-white`}
    >
      <p>{project.description}</p>
    </div>

    {/* Technologies */}
    <div
      className={`flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-1`}
    >
      {project.technologies.map((tech, i) => (
        <p
          key={i}
          className="font-Nunito px-2 py-0.5 text-primary text-xs sm:text-sm border border-primary rounded-md"
        >
          {tech}
        </p>
      ))}
    </div>
  </div>
</div>

  );
};
