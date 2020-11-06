import React, { useContext, useEffect, useState } from "react";

import { DispatchContext, StateContext } from "../context/StoreProvider";

import { useHistory } from "react-router-dom";

import { Spinner } from "../components/Spinner";

import axios from "axios";

import styled from "styled-components";

import { BookExperienceButtonBlack } from "../elements/BookExperienceButton";

// flex wrap to get it to lign up

const PageContainer = styled.div`
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     margin: 20px;
`;

const Image = styled.img`
     // To make an image size responsive, you simply need to make sure its width displays at most 100% of its maximum width and set its display height to automatically adjust depending on display width, image width, and image height.
     max-width: 100%;
     height: auto;
     //

     max-height: 550px; // and add max-height so higher pictures arnt too big
     flex-grow: 1; // to push out to the side
`;

const BookingContainer = styled.div`
     display: flex;
     flex-direction: column;
`;

const BodyContainer = styled.div``;

const ButtonContainer = styled.div`
     display: flex;
     flex-direction: row;
     height: 40px;
`;

const Button = styled.button`
     background: black;
     color: white;
     font-size: 30px;
     border: none;

     height: 40px;
     width: 40px;
`;

const NumberBox = styled.div`
     border: 1px solid #000000;
     box-sizing: border-box;

     padding: 10px 30px;

     margin-right: 10px;
     margin-left: 10px;
`;

const Title = styled.h1`
     flex-wrap: wrap;
`;

const SubTitle = styled.p``;

// make 2 inner Content boxes put them on top of e4ach other

// Image to the left, then calculationContainer to the right
// text at the bottom

export default function BookingPage(props) {
     const dispatch = useContext(DispatchContext);

     const bookingId = props.match.params.id;

     const [allAvailableBookings, setAllAvailableBookings] = useState([]);

     // could sort() the list of Bookings for faster retrieval
     const booking = allAvailableBookings.find((booking) => booking.id == bookingId);

     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState("");

     const [adultTickets, setAdultTickets] = useState(1);
     const [childTickets, setChildTickets] = useState(0);
     const [price, setPrice] = useState(0);

     const fetchData = async () => {
          try {
               const response = await axios.get("../products.json"); // ../because we are in /pages

               const data = response.data;

               setAllAvailableBookings([...data.featured, ...data.carousel.items]);
          } catch (error) {
               setError(error);
          } finally {
               setIsLoading(false);
          }
     };

     useEffect(() => {
          fetchData();
     }, []);

     function handleAdultTicketNum(num) {
          if (!(num < 0 && adultTickets === 0)) {
               setAdultTickets(adultTickets + num);
          }
     }

     function handleChildTicketNum(num) {
          if (!(num < 0 && childTickets === 0)) {
               setChildTickets(childTickets + num);
          }
     }

     useEffect(() => {
          // child tickets are half price
          if (booking) {
               setPrice(
                    adultTickets * booking.price.value + childTickets * (booking.price.value / 2)
               );
          }
     }, [adultTickets, childTickets, booking]);

     // Loading Spinner Screen automaticly for StyledImages

     // use this react-router hook to push and go to another page
     const history = useHistory();

     function handleBooking() {
          // dispatch a booking to the store
          // Gotta fix how to check how many and stuff

          // Get the booking, and make a new json from it

          if (price) {
               const newBooking = {
                    experienceId: booking.id,
                    adultTickets: adultTickets,
                    childTickets: childTickets,
                    totalPrice: price,
               };
               dispatch({
                    type: "BOOK_EXPERIENCE",
                    payload: newBooking,
               });

               let path = `/`; // path to homepage
               history.push(path);
          }
     }

     if (isLoading) {
          return <Spinner></Spinner>;
     }

     if (error) {
          return <p>Something went wrong...{error}</p>;
     }

     return (
          <PageContainer>
               <Image src={booking.media.small.url}></Image>

               <BookingContainer>
                    <Title>{booking.title}</Title>
                    <SubTitle>From £{booking.price.value} per person (half for children)</SubTitle>
                    <SubTitle>Adult</SubTitle>
                    <ButtonContainer>
                         <Button onClick={() => handleAdultTicketNum(-1)}>-</Button>
                         <NumberBox>{adultTickets}</NumberBox>
                         <Button onClick={() => handleAdultTicketNum(1)}>+</Button>
                    </ButtonContainer>

                    <SubTitle>Child</SubTitle>
                    <ButtonContainer>
                         <Button onClick={() => handleChildTicketNum(-1)}>-</Button>
                         <NumberBox>{childTickets}</NumberBox>
                         <Button onClick={() => handleChildTicketNum(1)}>+</Button>
                    </ButtonContainer>

                    <div>
                         <p>Total £{price}</p>
                    </div>

                    <div>
                         <BookExperienceButtonBlack onClick={() => handleBooking()}>
                              Book experience
                         </BookExperienceButtonBlack>
                    </div>
               </BookingContainer>

               <BodyContainer>
                    <p>{booking.body}</p>
               </BodyContainer>
          </PageContainer>
     );
}

/**
 *
 */
