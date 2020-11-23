import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

// try this

export const BookExperienceButton = styled(Link)`
     border: none;

     text-decoration: none;

     color: ${({ color }) => (color === "white" ? "black" : "white")}; // textcolor
     background: ${({ color }) => (color === "white" ? "white" : "black")}; // background color

     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;

     padding: 20px;

     font-family: "Fahkwang";

     margin: ${({ isCardButton }) => (isCardButton ? "30px" : "0px")};

     @media (max-width: 786px) {
          padding: 20px 0 20px;
          width: ${({ isCardButton }) => (isCardButton ? "225px" : "100%")};
     }
`;
