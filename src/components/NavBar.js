import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import BookingSymbol from "./BookingSymbol";

import HamburgerMenuNavbar from "./mobile/HamburgerMenuNavbar";

const StyledNavbar = styled.nav`
     display: flex;
     flex-direction: row;
     height: 80px;
     align-items: center;

     background: #ffffff;

     position: sticky;
     top: 0;
     z-index: 10;
`;

const NavBrand = styled(Link)`
     flex-grow: 1;

     margin-left: 40px;

     color: black;
     text-decoration: none;

     font-style: normal;
     font-weight: 600;
     font-size: 18px;
     line-height: 23px;

     letter-spacing: 1.63636px;

     z-index: 12;

     color: #222222;
`;

const NavItems = styled.ul`
     list-style: none;

     display: flex;
     align-items: center;

     margin-right: 20px;

     @media (max-width: 786px) {
          display: none; // make em dissapear when small enough
     }
`;

const NavLink = styled(Link)`
     margin-right: 20px;
     cursor: pointer;

     color: black;
     text-decoration: none;

     border: none;
`;

/**
 * Import HamburgerMenu
 * NavItems shall go invisable when under 786px or something
 * Then HamburgerMenu shall arise
 *
 *
 */

export default function NavBar() {
     return (
          <StyledNavbar>
               <NavBrand to="/">Scandinavian Adventures</NavBrand>

               <NavItems>
                    <NavLink to="/experiences">Experiences</NavLink>
                    <NavLink to="/company">Company</NavLink>
                    <NavLink to="/support">Support</NavLink>
                    <BookingSymbol></BookingSymbol>
               </NavItems>
               <HamburgerMenuNavbar></HamburgerMenuNavbar>
          </StyledNavbar>
     );
}
