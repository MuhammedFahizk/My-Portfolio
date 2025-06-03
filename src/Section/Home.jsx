import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HomeLeft } from "../components/Index";

const Home = () => {
  const blobRef = useRef(null);
  const magicPatternRefs = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
  
    // 1. Hero Line falls down first (like from top/left)
    tl.fromTo(
      ".heroLine",
      {
        rotate: 90,
        transformOrigin: "right center", // so it rotates from left like falling
        opacity: 0,
      },
      {
        rotate: 0,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
      }
    );
  
    // // 2. Then Magic Patterns fade in
    // magicPatternRefs.current.forEach((el, index) => {
    //   tl.fromTo(
    //     el,
    //     { opacity: 0, scale: 0.8, y: 50 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       y: 0,
    //       duration: 1.5,
    //       delay: index * 0.2,
    //     },
    //     "-=1.3" 
    //   );
    // });
  
    // 3. Then Profile Image appears
    tl.fromTo(
      ".profileImage",
      { opacity: 0, y: 400, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power1.out" },
      "-=0.5"
    );
  
    // 4. THEN Floating Animations
    tl.add(() => {
      gsap.to(blobRef.current, {
        y: -20,
        x: 15,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
  
      magicPatternRefs.current.forEach((el, index) => {
        gsap.to(el, {
          scale: 1.05,
          y: -10,
          duration: 6 + index,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    });
  
  }, []);
  
  
  

  return (
    <div className="home w-full flex flex-col  gap-0  relative md:grid md:grid-cols-2 py-10 items-center justify-center px-0 lg:px-20">
      <HomeLeft/>

      {/* Right Side - Image */}
      <div>
      <div className="flex borderBox   relative ps-5 l:ps-0 w-full  justify-center top-0  dark:border-light border-gray-700 overflow-hidden md:h-[500px]">
        <img
          src="/Images/profile_black.png"
          alt="M Fahiz"
          className="w-88 profileImage sm:w-80 md:w-full md:absolute z-40 max-w-md object-cover  drop-shadow-2xl filter:drop-shadow()"
        />
        {/* Blob - floating effect */}
        <div
          ref={blobRef}
          className="blob  w-[400px] h-[450px] lg:w-[450px] lg:h-[450px] absolute -bottom-14 lg:-bottom-30"
        ></div>

        {/* Magic Patterns - pulsing effect */}
        {/* <div
          ref={(el) => (magicPatternRefs.current[0] = el)}
          className="magicpattern block z-40 lg:hidden w-[600px] h-[450px] absolute top-30"
        ></div> */}

        {/* <div
          ref={(el) => (magicPatternRefs.current[1] = el)}
          className="magicpattern hidden lg:block w-[500px] h-[360px] relative top-25"
        ></div> */}
      </div>
      <hr className="  heroLine z-50 top-6  h-0.5 w-full border-none  bg-black dark:bg-light " />
      </div>
    </div>
  );
};

export default Home;
