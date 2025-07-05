import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useGSAP } from "@gsap/react";
import {
  FaCode,
  FaComments,
  FaLock,
  FaMobileAlt,
  FaPlug,
  FaTools,
  FaMoneyCheckAlt,
  FaProjectDiagram,
  FaCheckCircle,
  FaCloudUploadAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const skills = [
    {
      title: "Full-Stack Web Development",
      description:
        "Built end-to-end applications using MongoDB, Express, React, and Node.js following MVC architecture.",
      color: "#9e0142",
      icon: <FaCode />,
    },
    {
      title: "Real-time Communication",
      description:
        "Implemented real-time chat, notifications, and typing indicators using Socket.IO.",
      color: "#d53e4f",
      icon: <FaComments />,
    },
    {
      title: "Authentication & Security",
      description:
        "Used JWT and refresh tokens to manage authentication and role-based authorization securely.",
      color: "#f46d43",
      icon: <FaLock />,
    },
    {
      title: "Responsive UI/UX Design",
      description:
        "Created mobile-first responsive interfaces using Tailwind CSS and component libraries.",
      color: "#fdae61",
      icon: <FaMobileAlt />,
    },
    {
      title: "API Integration",
      description:
        "Integrated third-party APIs like Spotify for data retrieval and dynamic content rendering.",
      color: "#fee08b",
      icon: <FaPlug />,
    },
    {
      title: "Admin Dashboard & Role Management",
      description:
        "Developed admin tools for user/content moderation and data visualization.",
      color: "#e6f598",
      icon: <FaTools />,
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Integrated Razorpay to enable secure payment processing for service-based apps.",
      color: "#abdda4",
      icon: <FaMoneyCheckAlt />,
    },
    {
      title: "State Management",
      description:
        "Handled global app state using Redux Toolkit and React Context for scalable architecture.",
      color: "#66c2a5",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Code Quality & Reusability",
      description:
        "Maintained clean and consistent code using ESLint and reusable component patterns.",
      color: "#3288bd",
      icon: <FaCheckCircle />,
    },
    {
      title: "Version Control & Deployment",
      description:
        "Used Git & GitHub for version control, and deployed apps on Vercel and custom domains.",
      color: "#5e4fa2",
      icon: <FaCloudUploadAlt />,
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
        end: `+=${scrollLength - 700}`,
        scrub: true,
        toggleActions: "play reverse play reverse",
        
      },
    });

    const isMobile = window.innerWidth < 768;

    tl.fromTo(
      track,
      {
        y: isMobile ? -630 : -610,
        x: isMobile ? 35 : 290,
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
          borderRadius: "30px",
          onComplete: () => {
            card.classList.remove("shadow-none");
            card.classList.add(
              "shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]",
              "dark:shadow-[10px_10px_25px_#0d0d0d,-10px_-10px_25px_#1f1f1f]"
            );

            card.querySelector(".icon")?.classList.remove("hidden");
            card.querySelector("p")?.classList.remove("hidden");
            card.querySelector("h3")?.classList.remove("hidden");
          },
          onReverseComplete: () => {
            card.classList.add("shadow-none");
            card.classList.remove(
              "shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]",
              "dark:shadow-[10px_10px_25px_#0d0d0d,-10px_-10px_25px_#1f1f1f]"
            );

            card.querySelector(".icon")?.classList.add("hidden");
            card.querySelector("p")?.classList.add("hidden");
            card.querySelector("h3")?.classList.add("hidden");
          },
        },
        "<+=0.1"
      );
    });

    tl.to(
      track,
      {
        x: -scrollLength,
        ease: "none",
        duration: 2,
      },
      ">+=0.5"
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-40 min-h-[120vh] bg-light dark:bg-dark rounded-3xl text-dark py-10 px-6"
    >
      

      <div className="col-span-2 z-50 relative justify-center py-10 items-center bg-transparent flex opacity-55 flex-col   h-full">
        <h1 className="text-6xl md:text-7xl lg:text-[6rem] -ms-30 italic font-Acme text-gray-900 dark:text-light  ">
          Areas of
        </h1>
        <h1
          className="text-5xl md:text-6xl  ms-auto md:-mt-10 lg:text-[4rem] md:ms-40 italic font-Bubblegum text-transparent"
          style={{
            WebkitTextStroke: "2px #e07a5f",
            color: "transparent",
          }}
        >
          Expertise ... 
        </h1>
      </div>
      <div
        ref={trackRef}
        className="skills-track flex relative gap-6 px-10 pb-20"
      >
        {skills.map((skill, index) => {
          const nextColor = skills[(index + 1) % skills.length].color;
          return (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(135deg, ${skill.color}, ${nextColor})`,
              }}
              className="skill-card w-[260px] h-[276px]  rounded-[30px] z-50 shadow-none p-2 flex-shrink-0 flex flex-col justify-center items-center text-center "
            >
              <div className="text-4xl mb-3 icon hidden">{skill.icon}</div>
              <h3 className="text-lg font-bold hidden">{skill.title}</h3>
              <p className="text-sm mt-2 hidden">{skill.description}</p>
            </div>
          );
        })}
        <div className="h-[200vh] w-[400px] " />
      </div>
    </section>
  );
};
