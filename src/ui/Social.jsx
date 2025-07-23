import React, {  useRef, useState } from "react";
import { Div } from "../common/Div";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const contactLinks = [
  {
    href: "mailto:fahizk100@gmail.com",
    label: "Email",
    icon: <FaEnvelope className="text-md text-primary sm:text-xl" />,
  },
  {
    href: "https://github.com/MuhammedFahizk",
    label: "GitHub",
    icon: <FaGithub className="text-md text-primary sm:text-xl" />,
    external: true,
  },
  {
    href: "https://wa.me/9961130563",
    label: "WhatsApp",
    icon: <FaWhatsapp className="text-md text-primary sm:text-xl" />,
    external: true,
  },
  {
    href: "https://www.instagram.com/fahiz_._k/",
    label: "Instagram",
    icon: <FaInstagram className="text-md text-primary sm:text-xl" />,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/muhammed-fahiz-96726b287",
    label: "LinkedIn",
    icon: <FaLinkedin className="text-md text-primary sm:text-xl" />,
    external: true,
  },
  {
  href: "https://medium.com/@mohamadshahkhajeh", // Replace with your profile if needed
  label: "Medium",
  icon: <FaMedium className="text-md text-primary sm:text-xl" />,
  external: true,
},
  
];

export const Social = () => {
  const [rotation, setRotation] = useState(0);
  const emailRef = useRef(null);
  const scrollRef = useRef(null);
  const centerRef = useRef(null);
  const linksRef = useRef(null);
  const hrRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Step 1: Animate center div ("Welcome") appearing
    tl.fromTo(
      centerRef.current,
      {
        opacity: 0,
        width: 10,
        height: 10,
        padding: 0,
        borderRadius: "9999px",
      },
      {
        opacity: 1,
        width: "auto",
        height: "auto",
        padding: " 0.75rem",
        borderRadius: "0.5rem",
        duration: 1,
        ease: "power2.out",
      }
    )

      // Step 2: Hold it visible for 1 second

      // Step 3: Animate email and scroll indicators into view
      .fromTo(
        emailRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "<" // parallel with previous
      )
      .fromTo(
        scrollRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "<"
      )

      // Step 4: Fade out and hide "Welcome" only after other animations
      .to(centerRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          centerRef.current.style.display = "none";
        },
      });

    // Falling animation for each social icon on load
    // gsap.utils.toArray(".falling-element").forEach((element) => {
    //   const startY = gsap.utils.random(-100, -20) + "%";
    //   const duration = gsap.utils.random(1.2, 2.5);
    //   const delay = gsap.utils.random(0, 0.5);

    //   gsap.from(element, {
    //     y: startY,
    //     opacity: 0,
    //     duration,
    //     delay,
    //     ease: "power2.out",
    //   });
    // });

//  ScrollTrigger.create({
//   trigger: "#footer-trigger", // This is the marker for the footer
//   start: "top bottom",         // When top of trigger hits bottom of viewport
//   end: "bottom bottom",        // Until it scrolls out
//   onEnter: () => {
//     if (!linksRef.current) return;

//     const icons = gsap.utils.toArray(".falling-element");

//     // Change layout
//     linksRef.current.classList.replace("flex-col", "flex-row");
//     hrRef.current.style.display = "none";

//     // Animate icons
//     const tl = gsap.timeline();

//     tl.to(icons, {
//       y: 0,
//       x: () => gsap.utils.random(-40, 40) + "%",
//       rotation: () => gsap.utils.random(-15, 15),
//       duration: 1.2,
//       ease: "bounce.out",
//       stagger: 0.1,
//     });

//     tl.to(icons, {
//       scaleY: 0.9,
//       scaleX: 1.1,
//       duration: 0.2,
//       ease: "power1.inOut",
//       yoyo: true,
//       repeat: 1,
//       stagger: 0.05,
//     });
//   },

//   onLeaveBack: () => {
//     if (!linksRef.current) return;

//     linksRef.current.classList.replace("flex-row", "flex-col");
//     hrRef.current.style.display = "block";

//     gsap.to(".falling-element", {
//       y: 0,
//       x: 0,
//       opacity: 1,
//       rotation: 0,
//       scale: 1,
//       duration: 1,
//       ease: "power2.out",
//       stagger: 0.05,
//     });
//   },
// });

  }, []);

  return (
    <>
      {/* Left Side Social Icons */}
      <div
        ref={linksRef}
        className="links z-40 w-fit fixed dark:text-light bottom-40 left-2 md:left-10 flex flex-col gap-y-4"
      >
        {contactLinks.map(({ href, label, icon, external }, index) => (
          <a
            key={index}
            href={href}
            className="falling-element p-1 sm:p-1 bg-neutral text-base-100 rounded-full  hover:bg-light   transition duration-300 cursor-pointer"
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <div>{icon}</div>
          </a>
        ))}
        <hr
          ref={hrRef}
          className="absolute rotate-90 -bottom-12 -left-6.5 w-20 text-primary"
        />
      </div>

      {/* Final Email Location */}

      <div
        ref={emailRef}
        className="z-40 -rotate-90 w-fit fixed top-40 -right-24 md:-right-20 flex items-center gap-2"
      >
        <hr className="w-20 text-primary" />
        <a
          href="mailto:fahizk100@gmail.com"
          className="p-1 px-2 text-xs bg-neutral text-primary rounded-full hover:text-white hover:bg-primary transition"
        >
          fahizk100@gmail.com
        </a>
      </div>
      <div
        ref={centerRef}
        className="z-50 right-7   bottom-64   rotate-90 fixed flex items-center justify-center text-sm font-semibold text-white dark:text-black bg-darkS font-Acme  dark:bg-lightS h-fit w-fit px-3   text-center   translate-x-1/2 translate-y-1/2 rounded-lg shadow-lg"
      >
        Welcome
      </div>

      {/* Final Scroll Text Location */}
      <div
        ref={scrollRef}
        className="z-40 rotate-90 w-fit fixed bottom-28 -right-24 md:-right-14 flex items-center gap-2"
      >
        <hr className="w-20 text-primary" />
        <div
          style={{ transform: `rotate(${rotation}deg)` }}
          className="p-1 px-2 text-xs bg-neutral text-primary rounded-full transition-transform duration-100 ease-linear"
        >
          Scroll Down
        </div>
      </div>
    </>
  );
};
