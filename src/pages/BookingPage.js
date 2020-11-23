import React, { useContext, useEffect, useState } from "react";

import { DispatchContext } from "../context/StoreProvider";

import { useHistory } from "react-router-dom";

import { Spinner } from "../components/Spinner";

import axios from "axios";

import styled from "styled-components";

import { BookExperienceButton } from "../elements/BookExperienceButton";

const PageContainer = styled.div`
     @media (max-width: 786px) {
          display: flex;
          flex-direction: column;
     }
`;

const ImageAndBookingWrapper = styled.div`
     display: flex;
     flex-direction: row;
     margin: 0px 30px 30px;
     @media (max-width: 786px) {
          flex-direction: column;
          width: 100%;
          margin: 0px;
     }
`;

const Image = styled.div`
     background: ${({ image }) =>
          `
        url('${image}')
        `};

     background-size: cover;
     background-position: center, center;

     width: 100%;
     height: 550px;

     /*FOR FADE IN EFFECT */
     animation: fadein 3s;

     @media (max-width: 786px) {
          height: 375px;
     }

     // export fadein into its own element stuff

     @keyframes fadein {
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
`;

const BookingContainer = styled.div`
     margin: 0px 20px 20px;
`;

const Title = styled.h1`
     flex-wrap: wrap;
     margin-top: 0px;

     @media (max-width: 786px) {
          margin-top: 35px;
     }
`;

const ButtonContainer = styled.div`
     display: flex;
     flex-direction: row;
     height: 40px;
`;

const SubTitle = styled.p`
     margin-bottom: 5px;
     margin-top: 40px;
`;

const Button = styled.button`
     background: black;
     color: white;
     font-size: 30px;
     border: none;

     height: 40px;
     width: 40px;

     cursor: pointer;
`;

const NumberBox = styled.div`
     border: 1px solid #000000;
     box-sizing: border-box;

     padding: 10px 30px;

     margin-right: 10px;
     margin-left: 10px;
`;

const PriceText = styled.p`
     margin-top: 50px;
     margin-bottom: 25px;
     font-family: "Mulish";
     font-style: normal;
     font-weight: bold;
     font-size: 14px;
     line-height: 18px;

     letter-spacing: 1.27273px;

     color: #222222;
`;

const BodyContainer = styled.div`
     font-family: "Mulish";
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 18px;

     letter-spacing: 1.27273px;

     color: #222222;

     margin: 30px;
`;

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
               const response = await axios.get("../products.json");

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

     // use this react-router hook to push and go to another page
     const history = useHistory();

     function handleBooking() {
          // dispatch a booking to the store

          if (price) {
               const newBooking = {
                    experienceId: booking.id,
                    title: booking.title,
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

     let imageURL = booking.media.large ? booking.media.large.url : booking.media.small.url;

     return (
          <PageContainer>
               <ImageAndBookingWrapper>
                    <Image image={imageURL}></Image>

                    <BookingContainer>
                         <Title>{booking.title}</Title>
                         <SubTitle>
                              From £{booking.price.value} per person (half for children)
                         </SubTitle>
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

                         <PriceText>Total £{price}</PriceText>

                         <BookExperienceButton onClick={() => handleBooking()}>
                              Book experience
                         </BookExperienceButton>
                    </BookingContainer>
               </ImageAndBookingWrapper>
               <BodyContainer>{booking.body}</BodyContainer>
          </PageContainer>
     );
}
