import React from 'react';
import "./Header.css";
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={punkLogo} alt="imageLogo" className="punkLogo" />
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="searchIcon" />
                </div>
                <input className="searchInput" type="text" placeholder="Collection, item or user ..."/>
            </div>
        </div>
    )
}

export default Header
