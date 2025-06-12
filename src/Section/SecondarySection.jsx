import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { AboutMe } from './AboutMe'; // Adjust import if needed
import { Skills } from './Skills';

gsap.registerPlugin(ScrollTrigger);

export const SecondarySection = () => {
  useGSAP(() => {
    // Pinning for About
    ScrollTrigger.create({
      trigger: ".about",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".skills",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    // Fade-in effect for About
    gsap.fromTo(
      ".about",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".skills",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".skills",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <>
    <div className="about">
      <AboutMe />
    </div>

    <div className="skills">
    <Skills/>
    
    </div>
    
    </>
  );
};
