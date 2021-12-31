import React from 'react'
import Burger from './Burger';
import {
    Nav,
} from './NavbarElements'
import Logo from "../../assets/header/cryptopunk-logo.png"
function Navbar() {
    return (
        <>
        <Nav>
            <div className="logo">
                <img src={Logo} alt="logo" className='logo_header'/>
            </div>
            <Burger/>
        </Nav>
        </>
    )
}

export default Navbar
