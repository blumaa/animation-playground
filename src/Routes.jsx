import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { gsap } from 'gsap'
import AaronBlumTitle from './port/AaronBlum'
import UfoMoon from './port/UfoScene'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const AppRoutes = (props) => {
    useEffect(() => {
        gsap.set('.gallery-window', {
            y: 10,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
        })
        gsap.set('.gallery-window', { boxShadow: '0 0 0 0' })
        let tl = gsap
            .timeline()
            .add(
                gsap.fromTo(
                    '.gallery-window',
                    2,
                    { boxShadow: '0 0 0 0' },
                    {
                        boxShadow: '5px 5px 5px 0px #868686bf',
                        repeat: 1,
                        yoyo: true,
                    }
                )
            )
            .add(
                gsap.to('.gallery-window', 10, {
                    // borderTopWidth: 1,
                    // borderRightWidth: 1,
                    // borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    // autoRound: true,
                    transformOrigin: 'center center',
                    // delay:0.5,
                    // ease: 'power3.inOut',
                    //   y: 10,
                    yoyo: false,
                    repeat: 0,
                }),
                '-=3'
            )
        tl.play()
    }, [])

    const routeList = props.animations.map((a, i) => (
        // <Route
        //     path={`/animation-${i}`}
        //     component={a.component}
        //     key={a.id}
        //     className="remove-btn"
        // />
        <Route exact path={`/animation-${i}`}>
            {({ match }) => <a.component show={match !== null} />}
        </Route>
    ))
    return (
        <>
            <div className="gallery-window">
                {/* <Switch> */}
                <TransitionGroup>
                    {/* <Route
                                exact
                                path={`/`}
                                component={AaronBlumTitle}
                            />
                            <Route
                                exact
                                path={`/animation-playground`}
                                component={AaronBlumTitle}
                            /> */}

                    {routeList}
                </TransitionGroup>
                {/* </Switch> */}
            </div>
        </>
    )
}

export default AppRoutes
