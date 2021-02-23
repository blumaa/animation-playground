import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MorphOnClick() {
  const [menuOpen, setMenuOpen] = useState(true);
  const animation = useRef(null);
  const box = useRef(null);

  useEffect(() => {
    animation.current = gsap.timeline().to(box.current, {
      x: 300
    });

    return () => {
      animation.current.kill();
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      animation.current.reverse();
    } else {
      animation.current.play();
    }
  }, [menuOpen]);

  return (
    <div className="App">
      <button onClick={() => setMenuOpen(!menuOpen)}>Toggle</button>
      <div className="box" ref={box} />
    </div>
  );
}
