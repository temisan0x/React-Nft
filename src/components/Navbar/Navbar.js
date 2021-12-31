import React from 'react'
import Burger from './Burger';
import "../Header.css";
import searchIcon from '../../assets/header/search.png';
import {
    Nav,
} from './NavbarElements'
import Logo from "../../assets/header/cryptopunk-logo.png"
function Navbar() {
    return (
        <>
        <Nav>
            <div className="logo">
                <img src={Logo} alt="logo" className='logo_header punkLogo'/>
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="searchIcon" className='searchIcon'/>
                </div>
                <input className="searchInput" type="text" placeholder="Collection, item or user ..."/>
            </div>
            <Burger/>
        </Nav>
        </>
    )
}

export default Navbar
