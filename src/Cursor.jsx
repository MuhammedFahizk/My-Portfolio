import React, { useEffect, useRef } from "react";

function Cursor() {
  // Refs for the dot + outlines
  const dotRef      = useRef();
  const outlineRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  // Animation frame refs
  const requestRef   = useRef();
  const previousTime = useRef();

  // “Target” mouse position
  const target = useRef({ x: window.innerWidth/2, y: window.innerHeight/2 });

  // State for whether we're hovering a link
  const isEnlarged = useRef(false);

  // Positions for each outline in the chain
  const positions = outlineRefs.map(() => ({ x: target.current.x, y: target.current.y }));

  // Update the “target” on mouse move, and immediately position the dot
  const onMouseMove = e => {
    target.current.x = e.pageX;
    target.current.y = e.pageY;
    dotRef.current.style.top  = `${e.pageY}px`;
    dotRef.current.style.left = `${e.pageX}px`;
  };

  // Lerp chain animation
  const animateChain = time => {
    if (previousTime.current !== undefined) {
      // First outline chases the mouse
      positions[0].x += (target.current.x - positions[0].x) / 6;
      positions[0].y += (target.current.y - positions[0].y) / 6;
      outlineRefs[0].current.style.top  = `${positions[0].y}px`;
      outlineRefs[0].current.style.left = `${positions[0].x}px`;

      // Each subsequent outline chases its predecessor
      for (let i = 1; i < outlineRefs.length; i++) {
        positions[i].x += (positions[i-1].x - positions[i].x) / 6;
        positions[i].y += (positions[i-1].y - positions[i].y) / 6;
        outlineRefs[i].current.style.top  = `${positions[i].y}px`;
        outlineRefs[i].current.style.left = `${positions[i].x}px`;
      }
    }
    previousTime.current = time;
    requestRef.current = requestAnimationFrame(animateChain);
  };

  // Scale up or down all elements in the chain
  const updateScale = () => {
    const scale = isEnlarged.current ? 1.8 : 1;
    dotRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    outlineRefs.forEach((ref, i) => {
      // smaller scales for farther outlines if you like
      const s = isEnlarged.current ? 1 + (outlineRefs.length - i) * 0.1 : 1;
      ref.current.style.transform = `translate(-50%, -50%) scale(${s})`;
    });
  };

  // Attach events and start animation
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(animateChain);

    // Handle link hover
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => {
        isEnlarged.current = true;
        updateScale();
      });
      el.addEventListener("mouseout", () => {
        isEnlarged.current = false;
        updateScale();
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {outlineRefs.map((ref, idx) => (
        <div key={idx} ref={ref} className="cursor-outline" />
      ))}
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

export default Cursor;
