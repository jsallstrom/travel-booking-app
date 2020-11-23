import React, { useContext } from "react";

import { StateContext } from "../context/StoreProvider";

import { DispatchContext } from "../context/StoreProvider";

import styled from "styled-components";

import { BookExperienceButton } from "../elements/BookExperienceButton";

import { useHistory } from "react-router-dom";

const PageContainer = styled.div`
     margin: 20px 30px 20px;
     display: flex;
     flex-direction: column;
`;

const Booking = styled.div`
     margin: 20px 0px 20px;
     display: flex;
     flex-direction: column;

     border: solid black 2px;
`;

const BookingTitleContainer = styled.div`
     font-family: "Fahkwang";
     background: #efeded;
`;

const InnerContainer = styled.div`
     display: flex;
     flex-direction: column;
     padding: 10px;
`;

const BookingTitle = styled.h1`
     margin-left: 10px;
`;

const TicketText = styled.p`
     font-family: "Mulish";
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 18px;

     letter-spacing: 1.27273px;
`;

const TotalPriceText = styled.h2`
     font-family: "Fahkwang";
`;

const GrandTotalPrice = styled.h2`
     font-family: "Fahkwang";
`;

const BookExperienceButtonContainer = styled.div`
     @media (min-width: 786px) {
          align-self: flex-end;
     }
`;

const NoBookingsText = styled.h1`
     font-family: "Fahkwang";
`;

export default function UserBookingsPage() {
     const state = useContext(StateContext);
     const dispatch = useContext(DispatchContext);

     const history = useHistory();

     if (state.customerBookings.length < 1) {
          return <NoBookingsText>Sorry no bookings yet...</NoBookingsText>;
     }

     function handleBookExperinces() {
          dispatch({ type: "CLEAR_EXPERIENCES" });
          let path = `/`; // path to homepage
          history.push(path);

          alert("Experiences booked!");
     }
     let sumTotal = 0;

     return (
          <PageContainer>
               {state.customerBookings.map((experience, index) => {
                    sumTotal += experience.totalPrice;
                    return (
                         <Booking key={index}>
                              <BookingTitleContainer>
                                   <BookingTitle>{experience.title}</BookingTitle>
                              </BookingTitleContainer>

                              <InnerContainer>
                                   <TicketText>Adult tickets: {experience.adultTickets}</TicketText>
                                   <TicketText>Child tickets: {experience.childTickets}</TicketText>
                                   <TotalPriceText>Total: £{experience.totalPrice}</TotalPriceText>
                              </InnerContainer>
                         </Booking>
                    );
               })}
               <GrandTotalPrice>Grand Total: £{sumTotal}</GrandTotalPrice>
               <BookExperienceButtonContainer>
                    <BookExperienceButton onClick={() => handleBookExperinces()}>
                         Book Experiences
                    </BookExperienceButton>
               </BookExperienceButtonContainer>
          </PageContainer>
     );
}
