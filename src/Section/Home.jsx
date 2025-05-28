import React from "react";
import { Div } from "../common/Index";

const Home = () => {
  return (
    <div className=" home w-full relative      md:grid md:grid-cols-2 py-10   items-center justify-center   px-0 lg:px-20  ">
      {/* Left Side - Text Content */}
      <Div className="text-center font-Nunito  mx-4   lg:mx-9 md:mx-0 py-2   -bottom-1  w-fit  bg-[#20ddeb53]   opacity-55 backdrop-blur-xl    md:bg-transparent rounded-xl  md:bottom-0 absolute  md:relative z-50 md:text-left space-y-1.5 md:space-y-2">
        <p className="text-lg   text-white md:text-gray-700 md:dark:text-gray-400 ">
          Hi, My Name Is
        </p>
        <h1 className="font-Acme text-5xl sm:text-7xl text-light md:text-gray-900 dark:text-light">
          M- Fahiz K
        </h1>
        <p className="dark:text-white text-light font-Nunito md:text-gray-700 md:dark:text-gray-400">
          I'm a passionate MERN Stack Developer with hands-on experience in
          building scalable web applications, optimizing performance, and
          creating seamless user experiences
        </p>
      </Div>

      {/* Right Side - Image */}
      <Div className="flex relative    ps-5 l:ps-0  w-full  justify-center top-0   md:border-b-2 dark:border-light border-gray-700    overflow-hidden   h-[500px]">
        <img
          src="/public/Images/profile_black.png"
          alt="M Fahiz"
          className="w-88 sm:w-80 md:w-full  md:absolute z-50 max-w-md  object-cover"
        />
        <Div className="blob hidden   lg:block  w-[380px] h-[380px] lg:w-[450px] lg:h-[450px] absolute   bottom-5 lg:-bottom-30 "></Div>
        <Div className="magicpattern block z-40  lg:hidden     w-[600px] h-[450px] absolute    top-30 "></Div>

        <Div className="magicpattern hidden lg:block   w-[500px] h-[360px] relative   top-25 "></Div>
        {/* <Div className="magicpattern z-40 block md:hidden  -top-5   w-[450px] h-[450px] absolute   "></Div> */}
      </Div>
      
    </div>
  );
};

export default Home;
