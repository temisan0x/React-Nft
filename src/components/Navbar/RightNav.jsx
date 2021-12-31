import React from 'react';
import "../Header.css";
import {
    NavMenu,
} from './NavbarElements';
import themeSwitchIcon from '../../assets/header/theme-switch.png';

export const RightNav = ({open}) => {
    return (
        <NavMenu open={open}>
            <li><p><div class="nav-link nav-link-ltr" to="/product">Drops</div></p></li>
            <li><p><div class="nav-link nav-link-ltr" to="/prices" href="#">Marketplace</div></p></li>
            <li><p><div class="nav-link nav-link-ltr" to="/security" href="#">Create</div></p></li>
            <li>
                <p>
                    <div class="nav-icon" to="/instructions" href="#">
                        <div className="headerActions">
                            <div className="themeSwitchContainer">
                                <img src={themeSwitchIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </p>
            </li>
            <li>
                <p>
                    <div class="nav-icon" to="/resources" href="#">
                        <div className="loginButton">GET IN</div>
                    </div>
                </p>
            </li>
        </NavMenu>
    )
}