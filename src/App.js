import React from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'
import Menu from './Menu'
import AppRoutes from './Routes'
import NextButton from './assets/NextButton'
import BackButton from './assets/BackButton'
import XionLogo from './xion/XionLogo'
import IxiLoader from './xion/IxiLoader'
import CareflexBackground from './xion/CareflexBackground'
import Straddle from './RosaRay/Straddle'
import BumEdit from './RosaRay/BumEditWithHand'
import AaronBlumTitle from './port/AaronBlum'

const App = () => {
    const [selected, setSelected] = React.useState(0)

    const animations = [
        {
            name: 'aaron blum',
            path: 'aaron-blum',
            component: AaronBlumTitle,
        },
        { name: 'xion logo', component: XionLogo },
        { name: 'straddle', component: Straddle },
        { name: 'ixi loader', component: IxiLoader },
        {
            name: 'careflex background',
            path: 'careflex-background',
            component: CareflexBackground,
        },
        {
            name: 'bum edit',
            path: 'bum-edit',
            component: BumEdit,
        },
    ]

    return (
        <BrowserRouter>
            <div className="gallery">
                <BackButton
                    setSelected={setSelected}
                    selected={selected}
                    animations={animations}
                />
                <Route
                    path="/"
                    render={(props) => (
                        <AppRoutes {...props} animations={animations} />
                    )}
                />
                <NextButton
                    setSelected={setSelected}
                    selected={selected}
                    animations={animations}
                />

                {/* <Route path="/" component={AppRoutes} /> */}
                {/* <div className="gallery-buttons">
                    <Menu />
                </div> */}
            </div>
            <div className="copyright">
              <div className="copyright__item">
                All images and animations © 2020 Aaron Blum
              </div>
              <div className="copyright__item">
                <a href="http://aaronblum.co">aaronblum.co</a>
              </div>
            </div>
        </BrowserRouter>
    )
}

export default App
