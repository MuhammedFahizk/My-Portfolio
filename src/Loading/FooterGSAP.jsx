import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Footer } from "../Section/Footer";

const FooterGSAP = () => {
  const footerRef = useScrollReveal();
  const el = footerRef.current;
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
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
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    {
      scope: footerRef,
    }
  );
  return (
    <div ref={footerRef} className="footer">
      <Footer />
    </div>
  );
};

export default FooterGSAP;
