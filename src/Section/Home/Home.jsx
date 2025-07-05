import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HomeLeft } from "../../components/Index";
import "./Home.css";

const Home = () => {
  const blobRef = useRef(null);
  const magicPatternRefs = useRef([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageURL =
    "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751624299/profile_black-1_nkpjpe.png";

  useEffect(() => {
    // Preload the image manually
    const img = new Image();
    img.src = imageURL;
    img.onload = () => setImageLoaded(true);
  }, []);

  useGSAP(() => {
    if (!imageLoaded) return; // Skip animation if image not yet loaded

    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.fromTo(
      ".heroLine",
      {
        rotate: 90,
        transformOrigin: "right center",
        opacity: 0,
      },
      {
        rotate: 0,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
      }
    );

    tl.fromTo(
      ".profileImage",
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power2.out" },
      "-=0.3"
    );

    tl.add(() => {
      gsap.to(blobRef.current, {
        y: -20,
        x: 15,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      magicPatternRefs.current.forEach((el, index) => {
        gsap.to(el, {
          scale: 1.05,
          y: -10,
          duration: 6 + index,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    });
  }, [imageLoaded]);

  return (
    <div className="bgPattern home  w-full flex flex-col  gap-0  relative md:grid md:grid-cols-2 py-20 items-center justify-center px-4 lg:px-20">
      <HomeLeft />

      <div>
        <div className="flex borderBox   relative ps-5 l:ps-0 w-full  justify-center -top-10 md:top-0  dark:border-light border-gray-700 overflow-hidden  md:h-[500px]">
          {imageLoaded && (
            <img
              src={imageURL}
              alt="M Fahiz"
              className="w-88 profileImage sm:w-80 md:w-full md:absolute z-40 max-w-md object-cover  drop-shadow-2xl filter:drop-shadow()"
            />
          )}

          <div
            ref={blobRef}
            className="blob  w-[400px] h-[450px] lg:w-[450px]  lg:h-[500px] absolute -bottom-14 lg:-bottom-30"
          ></div>
        </div>
        <hr className="  heroLine z-50 top-6  h-0.5 w-full border-none  bg-black dark:bg-light " />
      </div>
    </div>
  );
};

export default Home;
