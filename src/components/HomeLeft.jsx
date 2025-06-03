import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
    <div className="text-center font-Nunito bg-amber-700 h-full md:h-fit   w-full lg:mx-9 md:mx-0 py-2          opacity-55  md:bg-transparent rounded-xl md:bottom-0  md:relative z-50 md:text-left space-y-1.5 md:space-y-2">
      <p className="text-lg text-white md:text-gray-700 md:dark:text-gray-400">
        Hi, My Name Is
      </p>
      <h1 className="font-Acme text-5xl sm:text-7xl text-light md:text-gray-900 dark:text-light">
        M- Fahiz K
      </h1>
      <p className="dark:text-white hidden md:block  text-light font-Nunito md:text-gray-700 md:dark:text-gray-400 flex flex-wrap gap-x-1">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className="inline-block"
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};
