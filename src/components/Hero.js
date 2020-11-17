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

     display: flex;
     flex-direction: column;
     justify-content: center;

     /*FOR FADE IN EFFECT */
     animation: fadein 3s;
     -moz-animation: fadein 3s; /* Firefox */
     -webkit-animation: fadein 3s; /* Safari and Chrome */
     -o-animation: fadein 3s; /* Opera */

     margin-bottom: 20px;

     @keyframes fadein {
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-moz-keyframes fadein {
          /* Firefox */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-webkit-keyframes fadein {
          /* Safari and Chrome */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-o-keyframes fadein {
          /* Opera */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
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

     line-height: 23px;
     letter-spacing: 1.63636px;

     color: #ffffff;

     font-family: "Fahkwang";

     flex-wrap: wrap;
`;

const HeroPrice = styled.h1`
     font-family: "Mulish";

     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 18px;

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
