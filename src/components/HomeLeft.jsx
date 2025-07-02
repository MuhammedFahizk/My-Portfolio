import React, {  useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaDownload, FaEnvelopeOpenText } from "react-icons/fa";

export const HomeLeft = () => {
  const wordRefs = useRef([]);

  useGSAP(() => {
    gsap.from(wordRefs.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, []);

  const text = `I'm a passionate MERN Stack Developer with hands-on experience in
  building scalable web applications, optimizing performance, and
  creating seamless user experiences`;

  const words = text.split(" ");

  return (
    <div className="text-center font-Nunito bg-amber-700 h-full md:h-fit   w-full lg:mx-9 md:mx-0 py-2            md:bg-transparent rounded-xl md:bottom-0  md:relative z-50 md:text-left space-y-1.5 md:space-y-2">
      <div className=" opacity-55">
        <p className="text-lg text-white  md:text-gray-700 md:dark:text-gray-400">
        Hi, My Name Is
      </p>
      <h1 className="font-Acme text-5xl sm:text-7xl text-light md:text-gray-900 dark:text-light">
        M- Fahiz K
      </h1>
      <p className="dark:text-white  md:block  text-light font-Nunito md:text-gray-700 md:dark:text-gray-400 flex flex-wrap gap-x-1">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className="inline-block"
          >
            {word} &nbsp;
          </span>
        ))}
      </p>
      </div>

      <div className="flex gap-4 py-6 flex-wrap">
      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-white/10 text-gray-900/30 dark:text-gray-100/60 backdrop-blur-xl border border-black/30 dark:border-white/30 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-100"
      >
        <FaDownload className="text-lg" />
        Download CV
      </a>

      <a
        href="#contact"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-white/10 text-gray-900/30 dark:text-gray-100/60 backdrop-blur-xl border border-black/30 dark:border-white/30 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-100"
      >
        <FaEnvelopeOpenText className="text-lg" />
        Contact Me
      </a>
    </div>
    </div>
  );
};
