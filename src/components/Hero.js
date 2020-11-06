import React from "react";

import styled from "styled-components";

import { BookExperienceButtonWhite } from "../elements/BookExperienceButton";

const HeroImage = styled.div`
     background: ${(props) =>
          `linear-gradient(
            to bottom, rgba(0, 0, 0, 0)
            39%, rgba(0,0,0,0)
            41%, rgba(0,0,0,0.8)
            100%
        ),
        url('${props.image}'), #1c1c1c
        `};
     background-size: 100%, cover;
     background-position: center, center;
     width: 100%;
     height: 550px;
     position: relative;
     //animation: animateHeroimage 1s;

     display: flex;
     flex-direction: column;
     justify-content: center;
`;

const HeroInnerContent = styled.div`
     margin-left: 70px;

     @media (max-width: 786px) {
          margin-left: 20px;
     }
`;

const HeroTitle = styled.h1`
     z-index: 100;
     font-style: normal;
     font-weight: 600;
     font-size: 18px;

     /* identical to box height, or 128% */
     letter-spacing: 1.63636px;

     color: #ffffff;

     flex-wrap: wrap;
`;

const HeroPrice = styled.h1`
     font-style: normal;
     font-weight: normal;
     font-size: 14px;

     /* identical to box height, or 129% */
     letter-spacing: 1.27273px;

     color: #ffffff;
     flex-wrap: wrap;

     margin-bottom: 15px;
     margin-top: 10px;
`;

export default function Hero({ id, image, title, price }) {
     return (
          <HeroImage image={image}>
               <HeroInnerContent>
                    <HeroTitle>{title}</HeroTitle>

                    <HeroPrice>from £{price} per person</HeroPrice>

                    <BookExperienceButtonWhite
                         to={`/book/${id}`}
                         style={{ width: "200px", margin: "0px" }}
                    >
                         Book Experience
                    </BookExperienceButtonWhite>
               </HeroInnerContent>
          </HeroImage>
     );
}
