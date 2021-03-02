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

const App = () => {
    const [selected, setSelected] = React.useState(0)

    const animations = [
        {
            id: Math.random(),
            name: 'aaron blum',
            path: 'aaron-blum',
            component: AaronBlumTitle,
        },
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
                    </div>
                    <Route
                        path="/"
                        render={(props) => (
                            <AppRoutes {...props} animations={animations} />
                        )}
                    />
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
