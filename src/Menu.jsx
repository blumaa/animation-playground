import React from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './assets/MenuButton'

const Menu = (props) => {
    return (
        <>
            <Link
                style={{ marginRight: '0px' }}
                to="/"
                className="btn btn-secondary"
            >
                <MenuButton name="xion-logo" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/ixi-loader"
                className="btn btn-secondary"
            >
                <MenuButton name="ixi-loader" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/careflex-background"
                className="btn btn-secondary"
            >
                <MenuButton name="careflex-background" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/straddle"
                className="btn btn-secondary"
            >
                <MenuButton name="straddle" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/bum-edit"
                className="btn btn-secondary"
            >
                <MenuButton name="bum-edit" />
            </Link>
        </>
    )
}

export default Menu
