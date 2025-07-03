import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HomeSkeleton = () => {
  const containerRef = useRef(null);
  const leftItemsRef = useRef([]);
  const profileRef = useRef(null);

  // GSAP animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

    // Fade in container
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    // Animate left items sequentially
    tl.fromTo(
      leftItemsRef.current,
      { opacity: 0, scaleX: 0.8 },
      { opacity: 1, scaleX: 1, stagger: 0.1 },
      "-=0.3"
    );

    // Animate profile placeholder
    tl.fromTo(
      profileRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 },
      "-=0.4"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 min-h-screen bg-light dark:bg-dark"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {[
          "w-3/4 h-6",
          "w-1/2 h-6",
          "w-full h-4",
          "w-5/6 h-4",
          "w-1/3 h-10 mt-4",
        ].map((cls, idx) => (
          <div
            key={idx}
            ref={(el) => (leftItemsRef.current[idx] = el)}
            className={`${cls} bg-gray-300 dark:bg-gray-700 rounded`}
          />
        ))}
      </div>

      {/* Right Profile Image Placeholder */}
      <div
        ref={profileRef}
        className="w-64 h-64 rounded-full bg-gray-300 dark:bg-gray-700"
      />
    </div>
  );
};

export default HomeSkeleton;
