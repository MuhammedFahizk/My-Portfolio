import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const ExpcontainerRef = useRef(null);
  const cardsRef = useRef([]);
  const projectImageRefs = useRef([]);

const experiences = [
    {
      title: "Full-Stack Engineer",
      company: "Colaber",
      location: "Remote",
      duration: "August 2025 – March 2026",
      details: [
        "Architected a multi-tenant subscription and billing engine from scratch — pricing plans, add-ons, usage limits, grace periods, and auto-renewals using MongoDB transactions.",
        "Integrated PhonePe and Cashfree payment gateways through a unified abstraction layer with idempotent webhook processing to prevent duplicate charges.",
        "Implemented policy-based access control using Open Policy Agent (OPA) with Redis caching — feature-tier rules updated without redeploying the app.",
        "Built a secure AWS media pipeline: S3 upload → MediaConvert (HLS) → CloudFront delivery with JWT-signed cookies validated at the edge via Lambda@Edge.",
        "Implemented JWT authentication with refresh token rotation, hashed token storage, multi-session handling, and instant session invalidation.",
        "Built and maintained React/Next.js frontend components for subscription dashboards, media players, and onboarding flows using Tailwind CSS.",
      ],
    },
    {
      title: "MERN Stack Developer Intern",
      company: "SelfStack",
      location: "Kozhikode, Kerala",
      duration: "August 2023 – September 2024",
      details: [
        "Built 30+ projects and 2 full-scale MERN applications across the complete development lifecycle.",
        "Improved MongoDB API response times by ~30% through query indexing and aggregation pipeline optimization.",
        "Reduced redundant API calls by ~40% using Redux Toolkit caching strategies across React frontends.",
        "Implemented JWT authentication and role-based access control from scratch across multiple projects.",
        "Set up GitHub Actions CI/CD pipelines for automated deployments, eliminating manual release overhead.",
        "Collaborated with designers, QA engineers, and DevOps to deliver stable, production-ready features.",
      ],
    },
  ];
  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    // Animate cards (right side)
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: 300 },
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

    // Animate project images (left side)
    projectImageRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={ExpcontainerRef}
      className="relative bg-lightS  dark:bg-darkS rounded-4xl overflow-hidden py-10 px-4 md:px-10"
    >
      {/* Background Label */}
      <h1 className="absolute left-56 inset-0 flex justify-center items-start text-gray-700/10 dark:text-white/10 text-[5rem] md:text-[7rem] font-Bubblegum opacity-10 -rotate-90 select-none pointer-events-none z-0">
        EXPERIENCE
      </h1>

      <div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-10 z-10">
        <div className="w-full md:w-1/3 hidden md:flex flex-col items-center justify-start gap-6 relative">
          {[
            "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1772620962/Screenshot_2026-03-04_160638_z8mzpm.png",
            "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703437/SpotifyClone_zrg7bi.png",
            "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703408/DriveWave_bhbe0n.png",
            "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703389/ChatHive_wgtmkf.png",
          ].map((img, i) => {
            const rotations = [-6, 6, -6];
            return (
              <div
                key={i}
                ref={(el) => (projectImageRefs.current[i] = el)}
                className="relative w-[140px] h-[100px] md:w-[180px] md:h-[120px] lg:w-[200px] lg:h-[140px] border-2 border-dark dark:border-light rounded-2xl overflow-hidden shadow-lg transition-transform duration-300"
                style={{
                  transform: `rotate(${rotations[i]}deg)`,
                  zIndex: 10 - i,
                }}
              >
                <img
                  src={img}
                  alt={`project-${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
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
