import React, { useEffect, useRef, useState } from "react";
import { Div } from "../common/Div";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
];

export const Social = () => {
  const [rotation, setRotation] = useState(0);
  const emailRef = useRef(null);
  const scrollRef = useRef(null);
  const centerRef = useRef(null);

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
    .to(centerRef.current, { duration: 1 })

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
}, []);


  return (
    <>
      {/* Left Side Social Icons */}
      <Div className="z-40 w-fit fixed dark:text-light bottom-40 left-2 md:left-10 flex flex-col gap-2">
        {contactLinks.map(({ href, label, icon, external }, index) => (
          <a
            key={index}
            href={href}
            className="p-1 sm:p-1 bg-neutral text-base-100 rounded-full hover:bg-primary transition duration-300 cursor-pointer"
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <div>{icon}</div>
          </a>
        ))}
        <hr className="absolute rotate-90 -bottom-12 -left-6.5 w-20 text-primary" />
      </Div>

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
