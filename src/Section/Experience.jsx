import React, { useRef } from "react";
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
      duration: "August 2023 – December 2024",
      details: [
        "Developed 30+ mini projects and 2 major projects using the MERN stack.",
        "Optimized RESTful APIs, reducing response times by 30%.",
        "Implemented JWT authentication & refresh tokens for secure access management.",
        "Reduced API calls by 40% using Redux Toolkit, improving performance.",
        "Integrated CI/CD pipelines with Docker & GitHub Actions for automated deployments.",
        "Collaborated with designers, QA engineers, and DevOps to ensure seamless feature rollouts.",
      ],
    },
  ];

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        isMobile
          ? { opacity: 0, y: 50 }
          : { opacity: 0, x: 300 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={ExpcontainerRef}
      className="relative bg-lightS dark:bg-darkS rounded-4xl overflow-hidden py-10 px-4 md:px-10"
    >
      {/* Background Label */}
      <h1 className="absolute inset-0 flex justify-center items-start text-gray-700/10 dark:text-white/10 text-[5rem] md:text-[7rem] font-Bubblegum opacity-10 -rotate-90 select-none pointer-events-none z-0">
        EXPERIENCE
      </h1>

      <div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-10 z-10">
        {/* Left Illustration */}
        <div className="w-full md:w-1/3 hidden md:block">
          <img
            src="/experience-illustration.png"
            alt="Experience"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Cards */}
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative w-full text-center md:text-left bg-light dark:bg-dark text-darkS dark:text-white rounded-3xl p-6 md:p-10 shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {exp.title}
              </h2>
              <p className="text-md text-gray-500 mb-1">
                {exp.company} • {exp.location}
              </p>
              <p className="text-md italic text-gray-500 mb-4">
                {exp.duration}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
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
