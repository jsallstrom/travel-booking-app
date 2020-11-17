import React, { useEffect, useState } from "react";

import styled from "styled-components";

import RightNav from "./RightNav";

import { useHistory } from "react-router-dom";

const HamburgerMenuContainer = styled.nav`
     display: flex;
     align-items: center;
     margin-right: 40px;

     @media (min-width: 786px) {
          display: none;
     }
`;

const HamburgerMenu = styled.div`
     padding-left: 8px;

     position: absolute;

     display: flex;
     flex-direction: column;
     justify-content: space-around;
     width: 2rem;
     height: 2rem;

     border: none;
     cursor: pointer;
     padding: 0;
     z-index: 10;

     &:focus {
          outline: none;
     }
`;

const Bar = styled.div`
     width: 2rem;
     height: 0.25rem;
     border-radius: 10px;
     transition: all 0.3s linear;
     position: relative;
     transform-origin: 1px;

     background-color: black;

     :first-child {
          transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
     }

     :nth-child(2) {
          opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
          transform: ${({ isOpen }) => (isOpen ? "translateX(20px)" : "translateX(0)")};
     }

     :nth-child(3) {
          transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
     }
`;

// make

export default function HamburgerMenuNavbar() {
     const [isOpen, setIsOpen] = useState(false);

     const history = useHistory();

     useEffect(() => {
          // whever URL changes we close the Menu
          history.listen(() => {
               // listen to whatever change there is
               setIsOpen(false);
          });
     }, [history]);

     return (
          <HamburgerMenuContainer>
               <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
                    <Bar isOpen={isOpen}></Bar>
                    <Bar isOpen={isOpen}></Bar>
                    <Bar isOpen={isOpen}></Bar>
               </HamburgerMenu>
               <RightNav isOpen={isOpen} />
          </HamburgerMenuContainer>
     );
}
