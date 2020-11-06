import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Ul = styled.ul`
     li {
          padding-top: 25px;
          padding-bottom: 25px;
          color: black;
          list-style: none;
          border-bottom: grey solid 1px;
     }

     flex-flow: column;

     background-color: white;
     position: fixed;
     transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
     top: 0;
     right: 0;
     height: 100vh;
     width: 300px;
     padding-top: 3.5rem;
     transition: transform 0.3s ease-in-out;
`;

// 1) https://levelup.gitconnected.com/how-to-create-a-responsive-hamburger-navigation-menu-reactjs-and-styled-components-59ce167ed543
// 2) links should be in the middle, white background,
// 3) make li into links

const RightNav = ({ isOpen }) => {
     return (
          <Ul isOpen={isOpen}>
               <Link to="/experiences">Experiences</Link>
               <Link to="/company">Company</Link>
               <Link to="/support">Support</Link>
               <Link to="/bookings">Bookings</Link>
          </Ul>
     );
};

export default RightNav;
