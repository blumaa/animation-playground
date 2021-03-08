import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { gsap } from 'gsap'
import AaronBlumTitle from './port/AaronBlum'
import UfoMoon from './port/UfoScene'

// const startState = { autoAlpha: 0, y: -50 }

const AppRoutes = (props) => {
    const [inProp, setInProp] = useState(false)

    const routeList = props.animations.map((a, i) => (
        <Route path={`/animation-${i}`} component={a.component} key={a.id} />
    ))
    return (
        <>
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
            <div className="gallery__feature--window">
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
        </>
    )
}

export default AppRoutes
