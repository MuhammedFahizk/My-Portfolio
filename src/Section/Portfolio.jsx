import React from "react";
import { Project } from "../ui/Index";
import { PiGithubLogoThin } from "react-icons/pi";

export const Portfolio = () => {
const projects = [
    {
      title: "Colaber",
      subtitle: "Business Automation SaaS Platform",
      image:
        "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1772620962/Screenshot_2026-03-04_160638_z8mzpm.png", // replace with a Colaber screenshot when available
      description:
        "Worked as a Full-Stack Engineer on a production SaaS platform for business automation. Owned the entire backend infrastructure — from billing and payments to cloud media delivery and authorization — while also building the React/Next.js frontend.",
      responsibilities: [
        "Architected a multi-tenant subscription and billing engine — plans, add-ons, usage limits, grace periods, and auto-renewals using MongoDB transactions",
        "Integrated PhonePe and Cashfree payment gateways with idempotent webhook processing to prevent duplicate charges",
        "Built policy-based access control using Open Policy Agent (OPA) with Redis caching — feature rules updated without redeployment",
        "Designed a secure AWS media pipeline: S3 → MediaConvert (HLS) → CloudFront with JWT-signed cookies validated via Lambda@Edge",
        "Implemented JWT authentication with refresh token rotation, hashed storage, multi-session handling, and instant invalidation",
        "Built React/Next.js frontend components for subscription dashboards, media players, and onboarding flows",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Redis",
        "AWS S3",
        "CloudFront",
        "PhonePe",
        "Cashfree",
        "OPA",
        "Tailwind CSS",
      ],
      links: {
        demo: null,
        repo: null,
      },
    },
    {
      title: "Chat Hive",
      subtitle: "A Social Media Application",
      image:
        "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703389/ChatHive_wgtmkf.png",
      description:
        "Built a full-featured social media application using the MERN stack with real-time chat using Socket.IO. Messages are acknowledged only after confirmed DB writes — no ghost messages. Focused on responsive UI, intuitive user interactions, and role-based access control with JWT.",
      responsibilities: [
        "Implemented reliable real-time messaging with Socket.IO — events acknowledged only after confirmed DB writes",
        "Developed secure JWT authentication with role-based access control",
        "Built reusable UI components with React and Tailwind CSS",
        "Managed posts, likes, blogs, comments, and content moderation",
        "Admin dashboard for managing users, posts, reports, and analytics",
      ],
      technologies: [
        "React",
        "Node.js",
        "Tailwind CSS",
        "Socket.IO",
        "Express",
        "MongoDB",
      ],
      links: {
        demo: "https://chathivemedia.vercel.app/",
        repo: "https://github.com/MuhammedFahizk/Social-Media-Frontend",
      },
    },
    {
      title: "Drive Wave",
      subtitle: "A Car Rental Application",
      image:
        "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703408/DriveWave_bhbe0n.png",
      description:
        "Designed and developed a full car rental platform with booking workflows, Razorpay payment integration, and a self-managed AWS EC2 deployment with Nginx reverse proxy and SSL.",
      responsibilities: [
        "Built a three-tier RBAC system for customers, vendors, and admins with separate views and API access",
        "Integrated Razorpay for secure online payments",
        "Designed backend using MVC architecture with Express and MongoDB",
        "Deployed on AWS EC2 with Nginx reverse proxy, SSL configuration, and PM2 process management",
      ],
      technologies: [
        "Node.js",
        "MongoDB",
        "Express",
        "Razorpay",
        "AWS EC2",
        "Nginx",
        "Handlebars",
      ],
      links: {
        demo: "https://www.drivewave.site/",
        repo: "https://github.com/MuhammedFahizk/drive-Wave",
      },
    },
  ];

  return (
    <div className=" h-fit   bg-light rounded-4xl  px-1 py-6  dark:bg-dark w-full md:px-4 lg:px-20 md:py-10 ">
      <div className="  flex flex-col gap-7">
        {/* <h1 className='text-3xl font-bold text-center text-dark dark:text-light'>
        Things I've Worked on, Some of Them

        </h1> */}
        <div className="col-span-2 z-50 relative justify-center py-10 items-center bg-transparent flex opacity-55 flex-col   h-full">
          <h1 className="text-4xl md:text-7xl lg:text-[6rem] me-auto italic font-Acme text-gray-900 dark:text-light  ">
            Things I've Worked on
          </h1>
          <h1
            className="text-3xl md:text-6xl md:-mt-12 -mt-4  lg:text-[5rem] ms-auto italic font-Bubblegum text-transparent"
            style={{
              WebkitTextStroke: "2px #e07a5f",
              color: "transparent",
            }}
          >
            Some of Them ...
          </h1>
        </div>
        {projects.map((project, index) => (
          <Project project={project} key={index} index={index + 1} />
        ))}
      </div>

      <h3 className="text-center my-6">
  <a
    href="https://github.com/MuhammedFahizk"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-primary/70 text hover:bg-secondary-dark transition-all duration-300 shadow-md hover:scale-125 active:scale-90"
  >
    <PiGithubLogoThin className=" " />
    Visit My GitHub – See All Projects
  </a>
</h3>

    </div>
  );
};
