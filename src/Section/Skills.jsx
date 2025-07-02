import React, {  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const skills = [
    {
      title: "MERN Stack Development",
      description: "Built full-stack apps with MongoDB, Express, React, Node.",
      icon: "🛠️",
      color: "#FF3F33", // Light sky blue
    },
    {
      title: "Authentication & Security",
      description: "JWT + Argon2 for login with refresh token.",
      icon: "🔐",
      color: "#FEEC37", // Soft yellow
    },
    {
      title: "RESTful API Development",
      description: "Swagger docs, modular MVC REST APIs.",
      icon: "📡",
      color: "#66D2CE", // Light pink
    },
    {
      title: "Responsive UI/UX",
      description: "Mobile-first layouts using Tailwind & GSAP.",
      icon: "🎨",
      color: "#69247C", // Aqua blue
    },
    {
      title: "Redux Toolkit",
      description: "Efficient state logic in large-scale apps.",
      icon: "📦",
      color: "#00FFAB", // Cool gray (good for both themes)
    },
    {
      title: "Deployment",
      description: "CI/CD via Vercel with custom domain setup.",
      icon: "🚀",
      color: "#FE5D26", // Soft lavender
    },
    {
      title: "Clean Code",
      description: "ESLint, modular structure, documented APIs.",
      icon: "📘",
      color: "#8DBCC7",
    },
    {
      title: "Real-Time Chat",
      description: "Socket.IO-powered messaging systems.",
      icon: "💬",
      color: "#B6F500",
    },
  ];

  useGSAP(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const scrollLength = track.scrollWidth - container.offsetWidth;

    const cards = track.querySelectorAll(".skill-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: `+=${scrollLength + 100}`, // Enough space for both card animation + scroll
        scrub: true,
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });

    const isMobile = window.innerWidth < 768;

    tl.fromTo(
      track,
      {
        y: isMobile ? -500 : -610,
        x: isMobile ? -30 : 290,
      },
      {
        y: 0,
        x: 0,
      }
    );

    cards.forEach((card, i) => {
      tl.fromTo(
        card,
        {
          y: -20,
          x: -i * 20,
          height: 10,
          // rotate: i % 3 === 0 ? 6 : i % 3 === 1 ? -6 : 0,
          // y: -50,
          scale: 0.9,
          zIndex: 50 - i,
          width: 10,
          borderRadius: "9999px",
        },
        {
          x: i * 1,
          y: 0,
          height: 300,
          rotate: 0,
          width: 260,
          scale: 1,
          // duration: 0.2,
          borderRadius: "30px",
          onComplete: () => {
            card.classList.remove("shadow-none");
            card.classList.add(
              "shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]",
              "dark:shadow-[10px_10px_25px_#0d0d0d,-10px_-10px_25px_#1f1f1f]"
            );

            const icon = card.querySelector(".icon");
            const description = card.querySelector("p");
            const title = card.querySelector("h3")

            icon?.classList.remove("hidden");
            description?.classList.remove("hidden");
            title?.classList.remove("hidden")
          },
          onReverseComplete: () => {
            card.classList.add("shadow-none");
            card.classList.remove(
              "shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]",
              "dark:shadow-[10px_10px_25px_#0d0d0d,-10px_-10px_25px_#1f1f1f]"
            );

            const icon = card.querySelector(".icon");
            const description = card.querySelector("p");
            const title = card.querySelector("h3")

            icon?.classList.add("hidden");
            description?.classList.add("hidden");
            title?.classList.add("hidden");
          },
        },
        "<+=0.1"
      );
    });

    // Step 3: AFTER cards are in place, scroll the track horizontally
    tl.to(
      track,
      {
        x: -scrollLength,
        ease: "none",
        duration: 2,
      },
      ">+=0.5" // Start this after card animations are fully done
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-40 h-fit bg-light dark:bg-dark   rounded-3xl text-dark py-26 px-6"
    >
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Bubblegum uppercase mb-16 relative z-10">
        <span className=" top-0 left-0 w-full h-full flex items-center justify-center z-[-1] text-gray-700 dark:text-gray-200 opacity-20 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] ">
          Areas of Expertise.
        </span>
      </h1>

      <div
        ref={trackRef}
        className="skills-track flex   relative gap-6 px-10 pb-20  "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{ backgroundColor: skill.color }}
            className={`skill-card w-[260px] h-[276px]      rounded-[30px] z-50 shadow-none   p-2 flex-shrink-0 flex flex-col justify-center items-center text-center hover:scale-105`}
          >
            <div className="text-4xl mb-3 icon hidden">{skill.icon}</div>
            <h3 className="text-lg font-bold hidden">{skill.title}</h3>
            <p className="text-sm mt-2 hidden">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Spacer to allow scrolling */}
      <div className="h-[200vh]" />
    </section>
  );
};
