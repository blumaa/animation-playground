// import "./App.scss";
import React from 'react'
import BumEdit from './RosaRay/BumEditWithHand'
import IxiLoaderAnimation from './xion/IxiLoader'
import CareflexBackground from './xion/CareflexBackground'
import XionLogo from './xion/XionLogo'
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'
import Template from './Examples/Template'
import Straddle from './RosaRay/Straddle'

const App = () => {
    const [selectedAnimation, setSelectedAnimation] = React.useState(null)

    const animations = [
        { name: 'straddle', path: 'straddle', component: 'Straddle' },
        { name: 'Bum Edit', path: 'bum-edit', component: 'BumEdit' },
        { name: 'Xion Logo', path: 'xion-logo', component: 'XionLogo' },
        {
            name: 'Ixi Loader',
            path: 'ixi-loader',
            component: 'IxiLoaderAnimation',
        },
    ]

    let next

    let back

    // const makeRoute = (animation) => {
    //     console.log(`/${animation.path}`)
    //     return (
    //         <Route path={`/${animation.path}`}>
    //             {({ match }) => {
    //                 const CompName = animation.component
    //                 console.log(CompName)
    //                 return <CompName show={match !== null} />
    //             }}
    //         </Route>
    //     )
    // }

    return (
        <BrowserRouter>
            {/* <div className="gallery-buttons">
                <NavLink
                    activeClassName="active"
                    className="button"
                    to={`/${back}`}
                    exact
                >
                    back
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="button"
                    to={`/${next}`}
                >
                    next
                </NavLink>
            </div> */}
            <div className="gallery-buttons">
                <NavLink
                    activeClassName="active"
                    className="button"
                    to="/"
                    exact
                >
                    straddle
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="button"
                    to="/xion-logo"
                >
                    Xion Logo
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="button"
                    to="/ixi-loader"
                >
                    Ixi Loader
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="button"
                    to="/bum-edit"
                >
                    Bum Edit
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="button"
                    to="/careflex-background"
                >
                    Careflex Background
                </NavLink>
            </div>
            <div className="gallery">
                {/* <div className="gallery-window">
          <MorphOnClick />
        </div> */}
                <div className="gallery-window">
                    <Switch>
                        {/* <Route path="/" exact>
                          { ({ match }) => <Template show={match !== null} /> }
                        </Route> */}
                        {/* {animations.map((a) => makeRoute(a))} */}
                        <Route path="/" exact>
                            {({ match }) => <Straddle show={match !== null} />}
                        </Route>
                        <Route path="/xion-logo">
                            {({ match }) => <XionLogo show={match !== null} />}
                        </Route>
                        <Route path="/ixi-loader">
                            {({ match }) => (
                                <IxiLoaderAnimation show={match !== null} />
                            )}
                        </Route>
                        <Route path="/bum-edit">
                            {({ match }) => <BumEdit show={match !== null} />}
                        </Route>
                        <Route path="/careflex-background">
                            {({ match }) => (
                                <CareflexBackground show={match !== null} />
                            )}
                        </Route>
                    </Switch>
                </div>
                {/* <div className="gallery-window">
          <BumEdit />
        </div>
        <div className="gallery-window">
          <XionLogo />
          click the logo
        </div>
        <div className="gallery-window">
          <IxiLoaderAnimation />
        </div>
        <div className="gallery-window">
          <CareflexBackground />
          hover over the beaker
        </div> */}
            </div>
        </BrowserRouter>
    )
}

export default App
