import { useGSAP } from "@gsap/react";
import { AboutMe } from "./Section/AboutMe";
import Home from "./Section/Home";
import { Background } from "./ui/Index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Portfolio } from "./Section/Portfolio";
import { Contacts } from "./Section/Contacts";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    // Pinning sections for smooth scrolling
    ScrollTrigger.create({
      trigger: ".home",
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".about",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".portfolio",
      start: "top top",
      end: "bottom 90%", // 🔥 Portfolio unpins only after full scroll
      // pin: true,
      pinSpacing: false,
      // markers: true,
    });

    ScrollTrigger.create({
      trigger: ".contact",
      start: "top top", // 🔥 Contact starts only after portfolio is fully gone
      end: "bottom 50%",
      pin: true,
      // pinSpacing: true,
      // markers: true,
    });

    // Fade-in effect for About section
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

    // Fade-in effect for Portfolio section
    gsap.fromTo(
      ".portfolio",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    
    gsap.fromTo(
      ".contact",
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".contact",
          scrub: true,
          start: "top 100%", // 🔥 Contact now waits for Portfolio to fully exit
          end: "bottom 100%",
          toggleActions: "restart pause reverse pause",
          // markers: true,
        },
      }
    );
  });

  return (
    <>
      <Background>
        <div className="home ">
          <Home />
        </div>
        <div className="about  ">
          <AboutMe />
        </div>
        <div className="portfolio">
          <Portfolio />
          {/* <div className=" h-[200px] ">
          </div> */}
        </div>
        <div className="contact h-full  py-10     p-2 top-10 md:top-10 ">
          <Contacts />
        </div>
      </Background>
    </>
  );
}

export default App;
