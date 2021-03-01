import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import { gsap } from "gsap";
import XionLogo from "./xion/XionLogo";
import IxiLoader from "./xion/IxiLoader";
import CareflexBackground from "./xion/CareflexBackground";
import Straddle from './RosaRay/Straddle'
import BumEdit from './RosaRay/BumEditWithHand'

const startState = { autoAlpha: 0, y: -50 };


const AppRoutes = props => (
  <TransitionGroup>
    <Transition
      key={props.location.pathname}
      timeout={500}
      mountOnEnter
      unmountOnExit
      appear
      onEnter={(node) => gsap.set(node, startState)}
      addEndListener={(node, done) => {
        gsap.to(node, 1, {
          autoAlpha: 1 ,
          y: 0,
          onComplete: done
        });
      }}
      onEntering={(node, done) => {
        gsap.to(node, 0.5, {
          y: -50,
          autoAlpha: 0,
          onComplete: done
        });
      }}
      // onEnter={(node) => {
      //   gsap.killTweensOf(node);
      //   gsap.from(node, 3, {
      //     opacity: 0,
      //     y: -100
      //   });
      // }}
      // onExit={node => {
      //   gsap.killTweensOf(node);
      //   gsap.to(node, 3, {
      //     opacity: 0,
      //     y: 100
      //   });
      // }}
    >
      <Switch location={props.location}>
        <Route exact path="/" component={XionLogo} />
        <Route exact path="/ixi-loader" component={IxiLoader} />
        <Route exact path="/careflex-background" component={CareflexBackground} />
        <Route exact path="/straddle" component={Straddle} />
        <Route exact path="/bum-edit" component={BumEdit} />
      </Switch>
    </Transition>
  </TransitionGroup>
);

export default AppRoutes;
