import React from "react";

import styled from "styled-components";

import { BookExperienceButtonBlack } from "../elements/BookExperienceButton";

// Make 2 posts, porps take image, price and title and body

const PostContainer = styled.div`
     min-width: 335px;

     /**
     word-wrap: break-word;
     overflow: hidden;
      */

     margin: 10px;
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
     //animation: animateHeroimage 1s;

     display: flex;
     flex-direction: column;

     justify-content: end; // Make PostTitle inside be at the bottom
`;
const PostTitle = styled.h1`
     margin: 30px;
     color: white;
`;

const LowerInnerContainer = styled.div``;

const PostBody = styled.p`
     //  white-space: pre; makes each sentence a new line
     overflow-wrap: break-word;
`;

const PriceText = styled.h2``;

export default function Post({ id, image, title, price, body }) {
     return (
          <PostContainer>
               <PostImage image={image}>
                    <PostTitle>{title}</PostTitle>
               </PostImage>

               <LowerInnerContainer>
                    <PostBody>{body}</PostBody>

                    <PriceText>From £{price} per person</PriceText>

                    <BookExperienceButtonBlack to={`/book/${id}`}>
                         Book Experience
                    </BookExperienceButtonBlack>
               </LowerInnerContainer>
          </PostContainer>
     );
}
