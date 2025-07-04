import React, { useEffect, useRef } from "react";

function Cursor() {
  // Refs for the dot + outlines
  const dotRef      = useRef();
  const outlineRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const requestRef   = useRef();
  const previousTime = useRef();
  const target       = useRef({ x: window.innerWidth/2, y: window.innerHeight/2 });
  const isEnlarged   = useRef(false);
  const positions    = outlineRefs.map(() => ({ x: target.current.x, y: target.current.y }));

  // Mouse move updates the dot instantly
  const onMouseMove = e => {
    target.current.x = e.pageX;
    target.current.y = e.pageY;
    dotRef.current.style.top  = `${e.pageY}px`;
    dotRef.current.style.left = `${e.pageX}px`;
  };

  // Lerp‑chain animation
  const animateChain = time => {
    if (previousTime.current !== undefined) {
      positions[0].x += (target.current.x - positions[0].x) / 6;
      positions[0].y += (target.current.y - positions[0].y) / 6;
      outlineRefs[0].current.style.top  = `${positions[0].y}px`;
      outlineRefs[0].current.style.left = `${positions[0].x}px`;

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

  // Update scale on hover
  const updateScale = () => {
    const dotScale = isEnlarged.current ? 1.8 : 1;
    dotRef.current.style.transform = `translate(-50%, -50%) scale(${dotScale})`;
    outlineRefs.forEach((ref,i) => {
      const s = isEnlarged.current ? 1 + (outlineRefs.length - i) * 0.1 : 1;
      ref.current.style.transform = `translate(-50%, -50%) scale(${s})`;
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(animateChain);

    // Delegate pointer enter/leave for both <a> and <button>
    const onPointerEnter = e => {
      if (e.target.closest("a, button")) {
        isEnlarged.current = true;
        updateScale();
      }
    };
    const onPointerLeave = e => {
      if (e.target.closest("a, button")) {
        isEnlarged.current = false;
        updateScale();
      }
    };

    document.addEventListener("pointerenter", onPointerEnter, true);
    document.addEventListener("pointerleave", onPointerLeave, true);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("pointerenter", onPointerEnter, true);
      document.removeEventListener("pointerleave", onPointerLeave, true);
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
