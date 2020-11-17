import React from "react";

import styled from "styled-components";

// make CardButton a Link

import { BookExperienceButtonWhite } from "../elements/BookExperienceButton";

const CardContainer = styled.div`
     display: flex;
     flex-direction: column;
     min-width: 285px;
     max-width: 0;
     word-wrap: break-word;
     overflow: hidden;

     background: #000000;

     margin: 10px;
`;

const CardImage = styled.div`
     background: ${(props) =>
          `
        url('${props.image}'), #1c1c1c
        `};

     background-size: 100%, cover;
     background-position: center, center;
     width: 285px;
     height: 170px;

     max-width: 100%;
     max-height: 100%;

     position: relative;

     /*FOR FADE IN EFFECT */
     animation: fadein 3s;
     -moz-animation: fadein 3s; /* Firefox */
     -webkit-animation: fadein 3s; /* Safari and Chrome */
     -o-animation: fadein 3s; /* Opera */

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

const CardTitle = styled.h1`
     font-weight: 600;
     font-size: 14px;
     line-height: 18px;

     /* identical to box height, or 129% */
     letter-spacing: 1.27273px;

     color: #ffffff;
     margin-left: 30px;
     margin-right: 30px;
     margin-top: 35px;

     font-family: "Fahkwang";
`;

const CardPrice = styled.h2`
     font-style: normal;
     font-weight: normal;
     font-size: 12px;
     line-height: 15px;

     /* identical to box height, or 125% */
     letter-spacing: 1.09091px;

     color: #ffffff;
     padding-left: 30px;
     padding-right: 30px;

     font-family: "Mulish";
`;

export default function Card({ id, image, title, price, guidedTour }) {
     const priceText = guidedTour
          ? `Guided tours from £${price} per person`
          : `From £${price} per person`;

     return (
          <CardContainer>
               <CardImage image={image}></CardImage>
               <CardTitle>{title}</CardTitle>
               <CardPrice>{priceText}</CardPrice>

               <BookExperienceButtonWhite to={`/book/${id}`} style={{ margin: "30px" }}>
                    Book Experience
               </BookExperienceButtonWhite>
          </CardContainer>
     );
}
