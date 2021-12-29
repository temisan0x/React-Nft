import React from 'react';
import "./Header.css";
import punkLogo from '../assets/header/cryptopunk-logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={punkLogo} alt="imageLogo" className="punklogo" />
        </div>
    )
}

export default Header
