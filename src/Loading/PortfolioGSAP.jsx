import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { Portfolio } from "../Section/Portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

 const PortfolioGSAP = () => {
  const portfolioRef = useScrollReveal();

  useGSAP(() => {
    const el = portfolioRef.current;

    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom 90%",
    });

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: portfolioRef });

  return (
    <div ref={portfolioRef} className="portfolio">
      <Portfolio />
    </div>
  );
};

export default PortfolioGSAP;

