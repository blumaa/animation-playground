import React from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './assets/MenuButton'

const Menu = (props) => {
    return (
        <>
            <Link
                style={{ marginRight: '0px' }}
                to="/"
            >
                <MenuButton name="xion-logo" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/ixi-loader"
            >
                <MenuButton name="ixi-loader" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/careflex-background"
            >
                <MenuButton name="careflex-background" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/straddle"
            >
                <MenuButton name="straddle" />
            </Link>
            <Link
                style={{ marginRight: '0px' }}
                to="/bum-edit"
            >
                <MenuButton name="bum-edit" />
            </Link>
        </>
    )
}

export default Menu
