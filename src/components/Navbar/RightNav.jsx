import React from 'react';
import "../Header.css";
import {
    NavMenu,
} from './NavbarElements'
import searchIcon from '../../assets/header/search.png';

export const RightNav = ({open}) => {
    return (
        <NavMenu open={open}>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="searchIcon" className='searchIcon'/>
                </div>
                <input className="searchInput" type="text" placeholder="Collection, item or user ..."/>
            </div>
            <li><p><div class="nav-link nav-link-ltr" to="/product">Drops</div></p></li>
            <li><p><div class="nav-link nav-link-ltr" to="/prices" href="#">Marketplace</div></p></li>
            <li><p><div class="nav-link nav-link-ltr" to="/security" href="#">Create</div></p></li>
            <li><p><div class="nav-link nav-link-ltr" to="/instructions" href="#">Institutions</div></p></li>
            <li><p><div class="nav-link nav-link-ltr" to="/resources" href="#">Resources</div></p></li>
            <li><p><div class="nav-link nav-link-ltr" to="/email" href="#">Email Us</div></p></li>
            <li><button className="get-started"><div class="" to="signin" href="#">Sign in</div></button></li>
        </NavMenu>
    )
}