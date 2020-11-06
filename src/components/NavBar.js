import React from "react";

import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

import HamburgerMenuNavbar from "./mobile/HamburgerMenuNavbar";

const StyledNavbar = styled.nav`
     display: flex;
     flex-direction: row;
     padding: 20px;
     align-items: center;
     margin-bottom: 10px;

     background: #ffffff;

     position: sticky;
     top: 0;
     z-index: 10;
`;

const NavBrand = styled(Link)`
     flex-grow: 1;
     font-size: 24px;
     font-weight: 700;
     color: black;
     text-decoration: none;

     font-style: normal;
     font-weight: 600;
     font-size: 18px;
     line-height: 23px;

     /* identical to box height, or 128% */
     letter-spacing: 1.63636px;

     color: #222222;
`;

const NavItems = styled.ul`
     list-style: none;

     display: flex;
     align-items: center;

     @media (max-width: 786px) {
          opacity: 0;
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
               </NavItems>
               <HamburgerMenuNavbar></HamburgerMenuNavbar>
          </StyledNavbar>
     );
}
