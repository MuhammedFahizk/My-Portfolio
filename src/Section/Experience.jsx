import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const ExpcontainerRef = useRef(null);
  const cardsRef = useRef([]);

  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "SelfStack",
      location: "Kozhikode, Kerala",
      duration: "August 2023 – September 2024",
      details: [
        "Developed 30+ mini projects and 2 major projects using the MERN stack.",
        "Optimized RESTful APIs, reducing response times by 30%.",
        "Implemented JWT authentication & refresh tokens for secure access management.",
        "Reduced API calls by 40% using Redux Toolkit, improving performance.",
        "Integrated CI/CD pipelines with Docker & GitHub Actions for automated deployments.",
        "Collaborated with designers, QA engineers, and DevOps to ensure seamless feature rollouts.",
      ],
    },
    {
      title: "Frontend Developer (Trainer Developer / Team Lead)",
      company: "GVR Business Transforms",
      location: "Kochi, Kerala",
      duration: "October 2023 – December 2023",
      details: [
        "Led and mentored junior developers on React.js development and best practices.",
        "Guided the team on Redux state management and performance optimization.",
        "Oversaw RESTful API integration and frontend state management for a smooth user experience.",
        "Ensured cross-browser compatibility and accessibility, improving UI consistency and usability.",
      ],
    },
  ];

  useGSAP(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: 800, opacity: 1, zIndex: index+ 10 },
        {
          x: 0,
          opacity: 1,
          zIndex: index + 10, // Higher z-index to stack on top
          scrollTrigger: {
            trigger: ExpcontainerRef.current,
            start: `top+=${index * 200} center`, // Adjust spacing per card
            end: "+=100",
            scrub: true,
          },
        }
      );
    });
  }, []);
  useGSAP(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: 300, opacity: 1, },
        {
          x: 0,
          opacity: 1,
          zIndex: index + 10, // Higher z-index to stack on top
          scrollTrigger: {
            trigger: ExpcontainerRef.current,
            start: `top+=${index * 200} center`, // Adjust spacing per card
            end: "+=100",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={ExpcontainerRef}
      className="relative bg-lightS dark:bg-darkS rounded-4xl overflow-hidden py-2"
      style={{ height: "120vh" }}
    >
      {/* Background text */}
      <h1 className="absolute inset-0 flex justify-center items-start -left-130 text-primary-dark dark:text-white/10 text-[7rem] font-Bubblegum opacity-10 -rotate-90 select-none pointer-events-none z-0">
        EXPERIENCE
      </h1>
      

      {/* Flex Container */}
      <div className="relative w-full h-full flex flex-col md:flex-row justify-between items-center px-6 md:px-10 gap-8 z-10">
        {/* Illustration */}
        <div className="w-full md:w-1/3 hidden md:block">
          <img
            src="/experience-illustration.png"
            alt="Experience Illustration"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Experience Cards */}
        <div className="w-full md:w-2/3 h-full relative">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute top-0 left-0 w-full h-full p-4 sm:p-10 flex flex-col justify-center items-start bg-light dark:bg-dark text-darkS dark:text-white rounded-4xl shadow-lg"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                {exp.title}
              </h2>
              <p className="text-md text-gray-500 mb-1">
                {exp.company} • {exp.location}
              </p>
              <p className="text-md italic text-gray-500 mb-4">
                {exp.duration}
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg max-w-2xl">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
