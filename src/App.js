import React from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'
import Menu from './Menu'
import AppRoutes from './Routes'

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

    return (
        <BrowserRouter>
            <div className="gallery">
                <div className="gallery-buttons">
                    <Menu />
                </div>
                <div className="gallery-window">
                    <Route path="/" component={AppRoutes} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
