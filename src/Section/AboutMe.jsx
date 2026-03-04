import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

export const AboutMe = () => {
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="about z-10 bg-lightS dark:bg-darkS overflow-hidden rounded-4xl rotate-0 grid grid-cols-1 md:grid-cols-5 gap-6 p-6 md:p-10 min-h-[500px]">
      {/* Left Section: Heading */}
      <div className="col-span-2 z-50 relative bg-transparent flex opacity-55 flex-col justify-center items-center p-4 md:p-10 h-full">
        <h1 className="text-7xl md:text-7xl lg:text-[11rem] italic font-Acme text-gray-900 dark:text-light">
          About
        </h1>
        <h1
          className="text-5xl md:text-6xl md:ms-auto ms-34 -mt-6 md:-mt-20 lg:text-[10rem] italic font-Acme text-transparent"
          style={{
            WebkitTextStroke: "3px #e07a5f",
            color: "transparent",
          }}
        >
          ME
        </h1>
      </div>

      <div className="col-span-3 flex text-center md:text-left flex-col justify-center gap-4 p-4 md:p-10 h-full">
        <p className="text-sm hidden font-Acme md:flex gap-2 items-center text-primary">
          <HiArrowLongLeft /> About Me
        </p>

        <p className="text-sm md:text-md font-courier leading-relaxed text-gray-800 dark:text-gray-300">
          I'm a <strong>Full-Stack Engineer</strong> with a Bachelor's degree in
          Computer Applications (BCA) from the University of Calicut. I have
          production experience building real SaaS products using{" "}
          <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong> 
        </p>

        <p className="text-sm md:text-md font-courier leading-relaxed text-gray-800 dark:text-gray-300">
          Most recently I worked at <strong>Colaber</strong>, a business
          automation SaaS startup, where I built several core backend systems
          from scratch — including a multi-tenant billing engine, dual payment
          gateway integration (PhonePe & Cashfree), and a secure AWS media
          delivery pipeline. I enjoy owning features end-to-end and take pride
          in writing clean, maintainable code that solves real business
          problems.
        </p>
      </div>
    </div>
  );
};