import React from "react";

import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

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

     @media (max-width: 786px) {
          flex-direction: column;
     }
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
`;

const NavLink = styled(Link)`
     margin-right: 20px;
     cursor: pointer;

     color: black;
     text-decoration: none;

     border: none;
`;

export default function NavBar() {
     return (
          <StyledNavbar>
               <NavBrand to="/">Sacandinavian Adventures</NavBrand>

               <NavItems>
                    <NavLink to="/experiences">Experiences</NavLink>
                    <NavLink to="/company">Company</NavLink>
                    <NavLink to="/support">Support</NavLink>
               </NavItems>
          </StyledNavbar>
     );
}
