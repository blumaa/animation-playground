import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppRoutes from './Routes'
import NextButton from './assets/NextButton'
import BackButton from './assets/BackButton'
import XionLogo from './xion/XionLogo'
import IxiLoader from './xion/IxiLoader'
import CareflexBackground from './xion/CareflexBackground'
import Straddle from './RosaRay/Straddle'
import BumEdit from './RosaRay/BumEditWithHand'
import AaronBlumTitle from './port/AaronBlum'
import Fade from './assets/Transition'
import UfoMoon from './port/UfoScene'
import SnapToGridDrag from './assets/SnapToGridDrag'
import TextScramble from './assets/TextScramble'
import KinkyTowers1 from './RosaRay/KinkyTowers1'
import ShowerRosa from './RosaRay/ShowerRosa'

const App = () => {
    const [selected, setSelected] = React.useState(0)

    const animations = [
        {
            id: Math.random(),
            name: 'aaron blum',
            path: 'aaron-blum',
            component: AaronBlumTitle,
        },
        { id: Math.random(), name: 'shower rosa', component: ShowerRosa },
        { id: Math.random(), name: 'ufo moon', component: UfoMoon },
        { id: Math.random(), name: 'xion logo', component: XionLogo },
        { id: Math.random(), name: 'straddle', component: Straddle },
        // { id: Math.random(), name: 'fade', component: Fade },
        { id: Math.random(), name: 'ixi loader', component: IxiLoader },
        {
            id: Math.random(),
            name: 'careflex background',
            path: 'careflex-background',
            component: CareflexBackground,
        },
        {
            id: Math.random(),
            name: 'bum edit',
            path: 'bum-edit',
            component: BumEdit,
        },
        // {
        //     id: Math.random(),
        //     name: 'snap to grid',
        //     path: 'snap',
        //     component: SnapToGridDrag,
        // },
        {
            id: Math.random(),
            name: 'text scramble',
            path: 'text-scramble',
            component: TextScramble,
        },
    ]

    return (
        <BrowserRouter>
            <div className="gallery">
                <div className="gallery__button">
                    <BackButton
                        setSelected={setSelected}
                        selected={selected}
                        animations={animations}
                    />
                    <div className="gallery__button--footer">
                        <KinkyTowers1 />
                    </div>
                </div>
                <div className="gallery__feature">
                    <Route
                        path="/"
                        render={(props) => (
                            <AppRoutes {...props} animations={animations} />
                        )}
                    />
                    <div className="copyright">
                        <div className="copyright__item">
                            All images and animations © 2020 Aaron Blum
                        </div>
                        <div className="copyright__item">
                            <a href="http://aaronblum.co">aaronblum.co</a>
                        </div>
                    </div>
                </div>
                <div className="gallery__button">
                    <NextButton
                        setSelected={setSelected}
                        selected={selected}
                        animations={animations}
                    />
                </div>

                {/* <Route path="/" component={AppRoutes} /> */}
                {/* <div className="gallery-buttons">
                    <Menu />
                </div> */}
            </div>
        </BrowserRouter>
    )
}

export default App
