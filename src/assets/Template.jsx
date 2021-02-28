import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Template = () => {
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

    return (
        <div className="App">
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <div className="box" ref={box} />
        </div>
    )
}

export default Template
