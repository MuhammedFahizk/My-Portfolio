"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type DivProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const Div = ({ style, children, className, id, onClick }: DivProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (divRef.current) {
      gsap.fromTo(
        divRef.current,
        { y: 100, opacity: 0 }, 
        {
          y: 0,
          opacity: 1, 
          duration: 1.2, 
          ease: "back.in",
          scrollTrigger: {
            trigger: divRef.current,
            start: "top 90% ", 
            end: "bottom 50%",
            toggleActions: "play none none reverse", 
          },
        }
      );
    }
  }, []);

  return (
    <div
      id={id}
      ref={divRef}
      onClick={onClick}
      style={style}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
