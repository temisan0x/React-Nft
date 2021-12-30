import React from 'react';
import { Link } from 'react-router-dom';
import {
    NavMenu,
} from './NavbarElements'

export const RightNav = ({open}) => {
    return (
        <NavMenu open={open}>
            <li><p><Link class="nav-link nav-link-ltr" to="/product">Products</Link></p></li>
            <li><p><Link class="nav-link nav-link-ltr" to="/prices" href="#">Prices</Link></p></li>
            <li><p><Link class="nav-link nav-link-ltr" to="/security" href="#">Security</Link></p></li>
            <li><p><Link class="nav-link nav-link-ltr" to="/instructions" href="#">Institutions</Link></p></li>
            <li><p><Link class="nav-link nav-link-ltr" to="/resources" href="#">Resources</Link></p></li>
            <li><p><Link class="nav-link nav-link-ltr" to="/email" href="#">Email Us</Link></p></li>
            <li><button className="get-started"><Link class="" to="signin" href="#">Sign in</Link></button></li>
        </NavMenu>
    )
}