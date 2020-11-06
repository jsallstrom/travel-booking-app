import React from "react";

import styled from "styled-components";

import Card from "./Card";

const CarouselContainer = styled.div`
     display: flex;
     flex-direction: column;

     background: #efeded;
`;

const CarouselTitle = styled.h1`
     font-style: normal;
     font-weight: 900;
     font-size: 18px;
     line-height: 23px;

     text-align: center;
     letter-spacing: 1.63636px;

     color: #222222;
`;

const CarouselSubTitle = styled.h2`
     font-style: normal;
     font-weight: 600;
     font-size: 14px;
     line-height: 18px;

     text-align: center;
     letter-spacing: 1.27273px;

     color: #222222;
`;

const CardsContainer = styled.div`
     overflow-x: scroll;

     white-space: nowrap;
     display: flex;
     flex-direction: row;
`;

export default function Carousel({ bookings }) {
     console.log(bookings);

     return (
          <CarouselContainer>
               <CarouselTitle>Adventure awaits out there</CarouselTitle>
               <CarouselSubTitle>
                    Get out and expreience Scandinavian way of living
               </CarouselSubTitle>

               <CardsContainer>
                    {bookings.map((booking) => (
                         <Card
                              id={booking.id}
                              image={booking.media.small.url}
                              title={booking.title}
                              price={booking.price.value}
                              guidedTour={booking.guidedTour}
                              key={booking.id}
                         ></Card>
                    ))}
               </CardsContainer>
          </CarouselContainer>
     );
}
