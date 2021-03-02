import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { gsap } from 'gsap'
import AaronBlumTitle from './port/AaronBlum'

// const startState = { autoAlpha: 0, y: -50 }

const AppRoutes = (props) => {
    const [inProp, setInProp] = useState(false)

    useEffect(() => {
        gsap.set('.gallery-window', { y: 10, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 0, borderLeftWidth: 0})
        gsap.set('.gallery-window', { boxShadow: "0 0 0 0"})
        let tl = gsap.timeline().add(

          gsap.fromTo('.gallery-window', 6, { boxShadow: "0 0 0 0"}, { boxShadow: "5px 5px 5px 0px #868686bf"})
        ).add(gsap.to('.gallery-window', 10, {
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              // autoRound: true,
              transformOrigin: 'center center',
              // delay:0.5,
              // ease: 'power3.inOut',
              y: 10,
              yoyo: false,
              repeat: 0,
          }), "-=3")
        tl.play()
    }, [])

    const routeList = props.animations.map((a, i) => (
        <Route path={`/animation-${i}`} component={a.component} key={a.id} />
    ))
    return (
        <TransitionGroup>
            {/* <Switch location={props.location}>
                    {routeList}
                </Switch> */}
            {/* <Transition
                key={props.location.pathname}
                timeout={500}
                mountOnEnter
                unmountOnExit
                onEnter={(node) => gsap.set(node, startState)}
                addEndListener={(node, done) => {
                    gsap.to(node, 1, {
                        autoAlpha: 1,
                        y: 0,
                        onComplete: done,
                    })
                }}
                onEntering={(node, done) => {
                    gsap.to(node, 0.5, {
                        autoAlpha: 0,
                        onComplete: done,
                    })
                }}
                onExit={(node) => {
                    gsap.killTweensOf(node);
                    gsap.to(node, 3, {
                        autoAlpha: 0,
                        y: 200
                    })
                }}
                onEnter={(node) => {
                  gsap.killTweensOf(node);
                  gsap.from(node, 3, {
                    opacity: 0,
                    y: -100
                  });
                }}
                onExit={node => {
                  gsap.killTweensOf(node);
                  gsap.to(node, 3, {
                    opacity: 0,
                    y: 100
                  });
                }}
            > */}
            <div className="gallery-window">
                <Switch location={props.location}>
                    <Route exact path={`/`} component={AaronBlumTitle} />
                    <Route
                        exact
                        path={`/animation-playground`}
                        component={AaronBlumTitle}
                    />
                    {/* <Transition in={inProp} timeout={500}> */}

                    {routeList}
                    {/* </Transition> */}
                </Switch>
            </div>
            {/* </Transition> */}
        </TransitionGroup>
    )
}

export default AppRoutes
