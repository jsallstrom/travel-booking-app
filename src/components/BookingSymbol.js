import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { StateContext } from "../context/StoreProvider";

import BasketImageEmpty from "../images/Basket(empty).png";
import BasketImageFilled from "../images/Basket(filled).png";

// Import the png file exported from Figma

const SymbalContainer = styled(Link)`
     position: relative;
     height: 23px;
     width: 20px;
`;

export default function BookingSymbol() {
     const state = useContext(StateContext);
     const [hasBookings, setHasBookings] = useState(false);

     useEffect(() => {
          if (state.customerBookings.length > 0) {
               setHasBookings(true);
          } else {
               setHasBookings(false);
          }
     }, [state]);

     return (
          <SymbalContainer to={"/bookings"}>
               {hasBookings ? <img src={BasketImageFilled} /> : <img src={BasketImageEmpty} />}
          </SymbalContainer>
     );
}
