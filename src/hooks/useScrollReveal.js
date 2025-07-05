
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const elements = containerRef.current?.querySelectorAll("h1, h2, p, a, span, li");

    elements?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return containerRef;
};
