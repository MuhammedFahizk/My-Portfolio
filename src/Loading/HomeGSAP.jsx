// Section/Home/Home.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "../Section/Home/Home";
import { useScrollReveal } from "../hooks/useScrollReveal";
gsap.registerPlugin(ScrollTrigger);

const HomeGSAP = () => {
  const containerRef = useScrollReveal();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="home">
      <Home />
    </div>
  );
};

export default HomeGSAP;
