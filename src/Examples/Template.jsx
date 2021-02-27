import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Template = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const tl = useRef(null);
  const box = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline().to(box.current, {
      x: 300
    });

    return () => {
      tl.current.kill();
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
  }, [menuOpen]);

  return (
    <div className="App">
      <button onClick={() => setMenuOpen(!menuOpen)}>Toggle</button>
      <div className="box" ref={box} />
    </div>
  );
}

export default Template