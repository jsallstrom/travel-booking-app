import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import BookingSymbol from "../BookingSymbol";

const SideNavBar = styled.nav`
     background-color: white;
     position: fixed;
     transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
     top: 0;
     right: 0;
     height: 100vh;
     width: 100%;

     transition: transform 0.3s ease-in-out;

     display: flex;
     flex-direction: column;

     justify-content: center;
`;

const NavItems = styled.ul`
     list-style: none;

     display: flex;
     flex-direction: column;
     margin-right: 30px;
`;

const NavLink = styled(Link)`
     padding-top: 25px;
     padding-bottom: 25px;
     color: black;
     list-style: none;
     border-bottom: grey solid 1px;
     text-decoration: none;
`;

const Container = styled(Link)`
     display: flex;
     flex-direction: row;
     align-items: center;
     text-decoration: none;

     justify-content: space-between;
`;

const RightNav = ({ isOpen }) => {
     return (
          <SideNavBar isOpen={isOpen}>
               <NavItems>
                    <NavLink to="/experiences">Experiences</NavLink>
                    <NavLink to="/company">Company</NavLink>
                    <NavLink to="/support">Support</NavLink>

                    <Container to="/bookings">
                         <NavLink style={{ borderBottom: "none" }}>Bookings</NavLink>
                         <BookingSymbol></BookingSymbol>
                    </Container>
               </NavItems>
          </SideNavBar>
     );
};

export default RightNav;
