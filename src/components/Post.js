import React from "react";

import styled from "styled-components";

import { BookExperienceButtonBlack } from "../elements/BookExperienceButton";

const PostContainer = styled.div`
     min-width: 300px;

     margin: 10px;

     @media (max-width: 786px) {
          margin: 20px;
     }
`;

const PostImage = styled.div`
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

     justify-content: end; // Make PostTitle inside be at the bottom

     @media (max-width: 786px) {
          height: 335px;
     }

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

export default function Post({ id, image, title, price, body }) {
     return (
          <PostContainer>
               <PostImage image={image}>
                    <PostTitle>{title}</PostTitle>
               </PostImage>

               <PostBody>{body}</PostBody>

               <PriceText>From £{price} per person</PriceText>

               <BookExperienceButtonBlack to={`/book/${id}`}>
                    Book Experience
               </BookExperienceButtonBlack>
          </PostContainer>
     );
}
