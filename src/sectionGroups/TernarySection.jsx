import React, { useRef, useState } from "react";
import { SkillsSet } from "../Section/SkillsSet";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "../Section/Footer";

gsap.registerPlugin(ScrollTrigger);

export const TernarySection = () => {
  const ternaryRef = useRef(null);
  const [ready, setReady] = useState(false); // <-- flag

  useGSAP(() => {
    const el = ternaryRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 65%",
        end: "top top",
        scrub: true,
      },
      onComplete: () => {
        setReady(true); // 👈 unlock SkillsSet pinning
      },
    });

    tl.fromTo(
      el,
      {
        margin: "10px 10px 0 0",
        width: "100px",
        height: "100px",
        borderRadius: "9999px",
        transformOrigin: "center center",
      },
      {
        margin: "0",
        width: "200px",
        height: "600px",
        duration: 2,
      }
    ).to(el, {
      width: "100%",
      height: "auto",
      borderRadius: "2rem 2rem 0 0",
      duration: 2,
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        ref={ternaryRef}
        className="bg-primary shadow-2xl py-6 overflow-hidden"
      >
      {/* <SkillsSet isReady={ready} /> 👈 pass flag */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};
