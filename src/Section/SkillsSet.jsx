import React, { useRef } from "react";
import { skills } from "../assets/skillData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SkillsSet = ({isReady}) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
      if (!isReady) return;

    const container = sectionRef.current;
    const track = trackRef.current;
    const scrollWidth = track.scrollWidth - container.offsetWidth;

    
        const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
        end: `+=${scrollWidth + 100}`,
          pin: true,
          scrub: true,
            toggleActions: "play reverse play reverse",
          markers: true,
        },
        });
   

     tl.to(
      track,
      {
        x: -scrollWidth,
        // ease: "none",
        duration: 2,
      },
      // ">+=0.5" 
    );

    // return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen rounded-t-3xl  overflow-hidden bg-lightS dark:bg-darkS relative "
    >
      {/* Fixed Left Panel */}
      <div className="absolute bg-darkS  left-0 top-0 h-full w-[35%]  z-10 flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-7xl lg:text-[11rem] italic font-Acme text-light">
          Tech
        </h1>
        <h1
          className="text-2xl md:text-6xl -mt-20  lg:text-[10rem] italic font-Acme text-transparent"
          style={{
            WebkitTextStroke: "3px #e07a5f",
            color: "transparent",
          }}
        >
          SET
        </h1>
      </div>

      {/* Scrollable Track */}
      <div
        ref={trackRef}
        className="flex h-full items-center pl-[40%] gap-10 pr-10 "
      >
             

        {skills.map((section) => (
           <div
            key={section.category}
            className="min-w-[400px]    bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl p-6 flex flex-col justify-center shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4 dark:text-light text-dark">
              {section.category}
            </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {section.items.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="relative  group w-full h-full cursor-pointer"
                >
                  <div
                    className="absolute inset-0 rounded-xl blur-lg opacity-70 pointer-events-none"
                    // style={{ background: color }}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center justify-center p-4 rounded-xl  border border-transparent transition-transform duration-300 hover:scale-105">
                    <div className="text-4xl mb-2  bg-lightS rounded-full shadow-lg backdrop-blur-md  p-2" style={{color}} >
                      <Icon />
                    </div>
                    <div
                      className="absolute -top-2 translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-120%] transition-all text-center duration-300 bg-white text-gray-800 px-3 py-1 text-xs font-semibold rounded-full shadow-lg border"
                      style={{ borderColor: color, color: color }}
                    >
                      {name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      


      </div>
<div className="h-[200vh]" />
     
    </section>
  );
};
