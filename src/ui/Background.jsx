import React from 'react'
import { Nav, Social, Theme } from './Index'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Background = ({children}) => {
  useGSAP(() => {
   


    gsap.utils.toArray("h1, h2, p").forEach((el, i) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          scrub: false, 
          once: false,  
          delay: i * 0.1,
        },
      });
    });
    

    
    
  },[])

  

  return (
    <div className="relative min-h-screen bg-gradient-to-bl  bg-light   overflow-hidden    dark:bg-dark  dark:text-white ">
     <Nav/>
      <div className=" mx-auto md:p-6">{children}</div>
    <Theme/>
    <Social/>
    
    </div>
  )
}
