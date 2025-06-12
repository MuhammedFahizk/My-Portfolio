import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

export const AboutMe = () => {
  return (
    <div className="md:grid  flex  flex-col-reverse about z-10 bg-lightS rounded-4xl rotate-0 dark:bg-darkS grid-cols-1 md:grid-cols-5 gap-6 p-6 md:p-10 min-h-[500px]">
  {/* Left Section - Image & Design */}
  <div className="relative col-span-2  h-[300px]  flex flex-grow justify-center items-center w-full p-10">
  
  </div>

  {/* Right Section - Text Content */}
  <div className="rounded-3xl col-span-3    flex flex-col justify-center items-start gap-4 p-4 md:p-10 min-h-[500px]">
    <p className="text-sm font-Acme flex gap-2 items-center text-primary">
      <HiArrowLongLeft /> About Me
    </p>
    
    <p className="text-sm md:text-md font-courier leading-relaxed text-gray-800 dark:text-gray-300">
      I am a <strong>MERN Stack Developer</strong> with a Bachelor&apos;s degree in Computer Applications (BCA) from the University of Calicut. Over the past year, I have gained valuable experience as a self-taught developer and intern, specializing in full-stack development using technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.
    </p>

    <p className="text-sm md:text-md font-courier leading-relaxed text-gray-800 dark:text-gray-300">
      During this time, I worked on diverse projects, honing my skills in building scalable REST APIs, implementing secure authentication systems, and delivering seamless user experiences. My journey reflects a strong commitment to learning and a passion for creating impactful digital solutions.
    </p>
  </div>
</div>

  );
};
