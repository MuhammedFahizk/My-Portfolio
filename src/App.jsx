// import { useGSAP } from "@gsap/react";
// import { AboutMe } from "./Section/AboutMe";
// import { lazy, Suspense } from "react";

// const Home = lazy(() => import("./Section/Home/Home"));
// import { Background } from "./ui/Index";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Portfolio } from "./Section/Portfolio";
// import { Footer } from "./Section/Footer";
// import { ExperienceSection } from "./Section/ExperienceSection";
// import { SecondarySection } from "./Section/secondarySection";
// import { TernarySection } from "./sectionGroups/TernarySection";
// import { SkillsSet } from "./Section/SkillsSet";

// gsap.registerPlugin(ScrollTrigger);

// function App() {
//   useGSAP(() => {
//     // Pinning for Home
//     ScrollTrigger.create({
//       trigger: ".home",
//       start: "top top",
//       end: "+=100%",
//       pin: true,
//       pinSpacing: false,
//     });

//     ScrollTrigger.create({
//       trigger: ".skills-section",
//       start: "top top",
//       end: "bottom top",
//       pin: true,
//       pinSpacing: false,
//     });

//     // Pinning for Portfolio
//     ScrollTrigger.create({
//       trigger: ".portfolio",
//       start: "top top",
//       end: "bottom 90%",
//       // pin: true,
//       // pinSpacing: true,
//     });

//     // Fade-in effect for About section

//     // Fade-in effect for Portfolio section
// gsap.fromTo(
//   ".portfolio",
//   { opacity: 0, y: 100 },
//   {
//     opacity: 1,
//     y: 0,
//     duration: 1.5,
//     ease: "power2.inOut",
//     scrollTrigger: {
//       trigger: ".portfolio",
//       start: "top 80%",
//       end: "top 50%",
//       toggleActions: "play none none none",
//     },
//   }
// );

//     // Fade-in effect for Experience section
//     gsap.fromTo(
//       ".experience",
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: ".experience",
//           start: "top 80%",
//           end: "top 50%",
//           toggleActions: "play none none none",
//         },
//       }
//     );

//     // ✅ Fade-in effect for Footer section (no pin!)
//     gsap.fromTo(
//       ".footer",
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: ".footer",
//           start: "top 90%",
//           end: "top 60%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//   });

//   return (
//     <>
//       <Background>
//         <Suspense fallback={
//           <div>
//             loading ....
//           </div>
//         }>
//         <div className="home">
//           <Home />
//         </div>
//           </Suspense>
//         <SecondarySection />

//         <div className="portfolio">
//           <Portfolio />
//         </div>
//         <div className="footer">
//           <Footer/>

//         </div>

//       </Background>
//     </>
//   );
// }

// export default App;

// App.js
import React, { Suspense, lazy } from "react";
import { Background } from "./ui/Index";
// import { PortfolioGSAP } from "./Loading/PortfolioGSAP";
// import  Portfolio  from "./Loading/PortfolioGSAP";

const Home = lazy(() => import("./Loading/HomeGSAP"));
const Portfolio = lazy(() => import("./Loading/PortfolioGSAP"));
const SecondarySection = lazy(() => import("./Section/secondarySection"));
// const Portfolio = import("./Loading/PortfolioGSAP");
// const Footer = lazy(() => import("./Section/Footer"));
const Footer = lazy (() => import ("./Loading/FooterGSAP"))

function App() {
  return (
    <Background>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <SecondarySection />
        <Portfolio />
      <Footer />
      </Suspense>
    </Background>
  );
}

export default App;
