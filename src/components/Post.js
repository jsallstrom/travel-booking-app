import React from "react";

import styled from "styled-components";

import { BookExperienceButton } from "../elements/BookExperienceButton";

const PostContainer = styled.div`
     min-width: 300px;

     margin-left: 10px;
     margin-right: 10px;

     margin-bottom: 40px;
`;

const PostImage = styled.div`
     background: ${({ image }) =>
          `
        url('${image}'), #1c1c1c
        `};
     background-size: cover;
     background-position: center, center;
     width: 100%;
     height: 550px;
     position: relative;

     // background-repeat: no-repeat;

     display: flex;
     flex-direction: column;

     justify-content: end; // Make PostTitle inside be at the bottom

     @media (max-width: 786px) {
          height: 335px;
     }

     /*FOR FADE IN EFFECT */
     animation: fadein 3s;

     @keyframes fadein {
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
`;

const PostTitle = styled.h1`
     margin: 30px;
     color: white;

     font-family: "Fahkwang";

     @media (max-width: 786px) {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 23px;
     }
`;

const TextContainer = styled.div`
     @media (max-width: 786px) {
          margin: 25px;
     }
`;

const PostBody = styled.p`
     //  white-space: pre; makes each sentence a new line
     overflow-wrap: break-word;
     font-family: "Mulish";

     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 18px;

     letter-spacing: 1.27273px;

     color: #222222;

     margin-top: 20px;
     margin-bottom: 20px;
`;

const PriceText = styled.h2`
     font-family: "Mulish";
     font-size: 14px;
     line-height: 18px;

     letter-spacing: 1.27273px;

     color: #000000;

     margin-top: 20px;
     margin-bottom: 20px;
`;

// make BookExperienceButton smarter, can say what colour you want + make sure it streatches when
// screen is small enough

export default function Post({ id, image, title, price, body }) {
     return (
          <PostContainer>
               <PostImage image={image}>
                    <PostTitle>{title}</PostTitle>
               </PostImage>

               <TextContainer>
                    <PostBody>{body}</PostBody>

                    <PriceText>From £{price} per person</PriceText>
               </TextContainer>

               <BookExperienceButton to={`/book/${id}`}>Book Experience</BookExperienceButton>
          </PostContainer>
     );
}
