import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

const SnapToGridDrag = () => {
    const [toggle, setToggle] = useState(true)
    const tl = useRef(null)
    const box = useRef(null)

    useEffect(() => {
        tl.current = gsap.timeline().to(box.current, {
            x: 300,
        })

        return () => {
            tl.current.kill()
        }
    }, [])

    useEffect(() => {
        if (toggle) {
            tl.current.reverse()
        } else {
            tl.current.play()
        }
    }, [toggle])

    useEffect(() => {
        var container = document.querySelector("#container")
        var box = document.querySelector(".box")

        
        var snap = 100
        Draggable.create(box, {
            bounds: container,
            onDrag: onDrag,
        })

        function onDrag() {
            gsap.to(box, 0.5, {
                x: Math.round(this.x / snap) * snap,
                y: Math.round(this.y / snap) * snap,
                ease: "back.out",
            })
        }
    }, [])

    return (
        <>
            <div id="container">
                <div class="box">what a drag</div>
            </div>
        </>
    )
}

export default SnapToGridDrag
