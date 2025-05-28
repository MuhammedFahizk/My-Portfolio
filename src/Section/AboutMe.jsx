import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

export const AboutMe = () => {
  return (
    <div className="grid  about z-10 bg-lightS rounded-4xl rotate-0 dark:bg-darkS grid-cols-1 md:grid-cols-5 gap-6 p-6 md:p-10 min-h-[500px]">
  {/* Left Section - Image & Design */}
  <div className="relative col-span-2 hidden md:flex flex-grow justify-center items-center w-full p-6 md:p-10">
    <div className="polygon md:rotate-4 relative h-[270px] w-[290px] bg-gradient-to-br from-primary  to-[#6c1902f3] bg-primary rounded-lg z-10 clip-custom"></div>
    
    {/* Masking Shapes */}
    <div className="mask absolute h-[140px] -rotate-2 w-[90px] top-68 right-19.5 bg-lightS dark:bg-darkS rounded-lg z-50 clip-custom"></div>
    <div className="mask2 absolute h-[140px] w-[90px] top-66 left-17.5 rotate-9 bg-lightS dark:bg-darkS rounded-lg z-50 clip-custom"></div>

    {/* Profile Image */}
    <img
      src="public/images/profile3.png"
      className="absolute w-[380px]  h-[430px] object-cover -top-8 z-20"
      alt="Profile"
    />
  </div>

  {/* Right Section - Text Content */}
  <div className="rounded-3xl col-span-3  flex flex-col justify-center items-start gap-4 p-4 md:p-10 min-h-[500px]">
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
