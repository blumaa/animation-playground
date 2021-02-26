import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from "gsap/Draggable";

const XionLogo = () => {
  const one = useRef(null) 
  const two = useRef(null) 
  const three = useRef(null) 
  const four = useRef(null) 
  const five = useRef(null) 

 
  
  const [timeLinePause, setTimeLinePause] = useState(true)
  const animation = useRef(null)
  
  useEffect(() => {       
      const objects = [one.current, two.current, three.current, four.current, five.current]
      gsap.set(objects, {transformOrigin: "center center"})

      // Draggable.create(objects, {
      //     type:"rotation",
      //     inertia: false,
      //     snap: function(value) {
      //       return Math.round(value / 90) * 90;
      //     }
      // });

      // let tl = gsap.timeline({yoyo:true, repeat: -1})

      // tl.to(objects, 2, {x:20})
  

      const spinObjects = () => gsap.to(objects, 1, {stagger: .2, rotation: 360, ease: "power3.out"})
      const flashObjects = () => gsap.to(objects, .1, {stagger: .4, opacity: 0, yoyo: true, repeat: 1})
      const flashObjects2 = () => gsap.to(objects, .1, {stager: .4, opacity: 1})
      animation.current = gsap.timeline({paused: true}).add(spinObjects()).add(flashObjects())
  }, [])

  useEffect(()=>{
      timeLinePause ? animation.current.reverse() : animation.current.play()
  }, [timeLinePause])
  return(
    <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="xion-logo" onClick={() => setTimeLinePause(!timeLinePause)}>
      <g>
        <g>
        <rect x="-14.52" y=".33898" width="128.02" height="103.12" ry="33.601" fill="none"/>
        </g>
        <g strokeWidth="3.9451">
        <path ref={one} d="m2.5264 28.011a2.093 2.093 0 0 1 1.997-1.1869h10.623a4.6597 4.6597 0 0 1 4.1793 2.1754q4.1175 6.0528 8.2351 12.099 3.2942 4.8517 6.6635 9.7242a0.63121 0.63121 0 0 1 0 0.85139q-7.2125 10.637-14.411 21.274a16.059 16.059 0 0 1-0.97515 1.2763 4.529 4.529 0 0 1-3.7263 1.6882h-10.857a2.0587 2.0587 0 0 1-1.7499-1.0974v-1.0363a7.1165 7.1165 0 0 1 1.4419-2.6354q2.745-3.9529 5.4145-7.9124 3.7573-5.5278 7.5489-11.049c0.47266-0.68589 0.4667-0.68589 0-1.4135-3.3009-4.9411-6.643-9.8272-9.937-14.734-1.2003-1.7775-2.3608-3.5754-3.6097-5.3186a5.1536 5.1536 0 0 1-0.83797-1.6813z" fill="#266b9e"/>
        <path ref={two} d="m93.304 10.429v0.04474c1.6057 0.64563 1.9421 1.5853 1.002 3.0675-0.8171 1.2898-1.7088 2.5323-2.5736 3.7952l-22.976 33.627c-0.10437 0.15805-0.21322 0.32207-0.31611 0.48012a0.89908 0.89908 0 0 1-0.7485 0.19235h-15.242a0.9884 0.9884 0 0 1-0.75448-0.19235 3.1363 3.1363 0 0 1 0.5353-0.86481l25.234-37.147a6.4014 6.4014 0 0 1 3.6577-3.0058z" fill="#266b9e"/>
        <path ref={three} d="m38.953 10.429a6.7191 6.7191 0 0 1 3.8156 3.3901c2.1343 3.2049 4.344 6.3547 6.5195 9.5253 0.68589 1.008 1.3718 2.0244 2.0587 3.0195a0.64502 0.64502 0 0 1 0 0.86481q-3.9322 5.6821-7.8438 11.392c-0.3012 0.44582-0.42496 0.41153-0.68589 0q-8.3518-12.298-16.765-24.547a4.626 4.626 0 0 1-0.75447-1.4761 1.5441 1.5441 0 0 1 0.99006-1.946l0.02982-0.0098c0.1506-0.05965 0.3504-0.02982 0.45328-0.20577z" fill="#71adda"/>
        <path ref={four} d="m51.717 51.44h16.745c2.0588 2.9441 4.0421 5.9019 6.0734 8.8458q4.8998 7.0822 9.8065 14.178 4.9069 7.0959 9.8067 14.151a6.3364 6.3364 0 0 1 0.62476 1.0288 1.7025 1.7025 0 0 1-1.5579 2.6216h-0.91998c-3.198 0-6.3959-0.07456-9.6075 0a5.0302 5.0302 0 0 1-4.5911-2.3882q-3.7676-5.4901-7.5488-10.98l-18.666-27.08c-0.07459-0.1342-0.1849-0.22664-0.16402-0.37724z" fill="#71adda"/>
        <path ref={five} d="m43.208 63.621c0.13419 0.16402 0.24006 0.29523 0.33549 0.43241 2.5873 3.8156 5.2018 7.6654 7.8438 11.433a0.63121 0.63121 0 0 1 0 0.85736q-4.4401 6.5125-8.8527 13.039a13.503 13.503 0 0 1-1.0974 1.3733 4.1176 4.1176 0 0 1-3.1773 1.4612h-11.213a1.7028 1.7028 0 0 1-1.5508-2.594 5.1799 5.1799 0 0 1 0.48757-0.84394l16.875-24.719a3.3511 3.3511 0 0 1 0.3504-0.43837z" fill="#266b9e"/>
        </g>
      </g>
    </svg>
  )
}

export default XionLogo

