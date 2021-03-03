import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const TextScramble = () => {
    const [toggle, setToggle] = useState(true)
    const tl = useRef(null)
    const box = useRef(null)

    useEffect(() => {
        gsap.set('#scramble-bounds', { overflow: 'hidden' })

    }, [])

    useEffect(() => {

        const title = () =>gsap.to(['#title', 'h1'], 0.1, {
            text: {
                value:
                    'a rose is a ro',
                delimiter: '',
                speed: 1,
            },
            ease: 'bounce.inOut',
        })

        const paragraph = () =>
            gsap.to('#scramble', 20, {
                text: {
                    value:
                        'a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a rose is a rose is a rose a is a rose',
                    delimiter: '',
                    speed: 1,
                },
                ease: 'bounce.inOut',
            })

        tl.current = gsap.timeline().add(paragraph()).add(title())

        //   .to('#scramble', 5, {
        //     bounds: document.querySelector('#scramble-bounds'),
        //     scrambleText: {
        //         text:
        //             'a rose is a rose is a rose is',
        //         chars: 'lowerCase',
        //         speed: .2,
        //         // tweenLength: true,
        //     },
        // })

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
        <div id="scramble-bounds" onClick={() => setToggle(!toggle)}>
            <h1 id="title">Click the page</h1>
            <div id="scramble">
                You throw your head back and expose it to me, as if ready to be
                bitten by a vampire, an open invitation to devour the sensitive
                spots above your collarbone, underneath your jaw line. We play
                this game for too long, each of us trying to prolong our
                desires, to push patience aside, to throw more and more kindling
                on the fire. You are riding the edge of pleasure and pain. You
                are being devoured alive, the beast, a ferocious creature,
                slowly driving you over the edge. You close your eyes and roll
                them into the back of your head. You feel the dopamine and
                serotonin being released into your brain. You are floating in
                the clouds, riding the hot waves of air, suddenly ejected into a
                pleasureful haven, awash in ecstasy. Your eyes flash open, a
                myriad of visions flash through your thoughts, and then you
                close them again, as the night sky opens up, and you let
                everything go… but you disappear into it, and, to me, this is
                the most pleasurable experience, to watch you let go, and to
                watch you awash in the most pleasurable of delights.
            </div>
        </div>
    )
}

export default TextScramble
