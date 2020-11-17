import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { StateContext } from "../context/StoreProvider";

const SymbalContainer = styled(Link)`
     position: relative;
     height: 23px;
     width: 20px;
`;

const TopCircle = styled.div`
     position: absolute;
     left: 31.58%;
     right: 31.58%;
     top: 0%;
     bottom: 82.61%;
     border: 1px solid #000000;
     border-radius: 100px;
`;

const Rectangle = styled.div`
     position: absolute;
     left: 0%;
     right: 0%;
     top: 17.39%;
     bottom: 0%;

     border: 1px solid #000000;
     box-sizing: border-box;
     border-radius: 5px;
`;

const Oval = styled.i`
     position: absolute;
     left: 31.58%;
     right: 31.58%;
     top: 43.48%;
     bottom: 26.09%;

     border-radius: 100px;

     background: ${({ hasBookings }) => (hasBookings ? "#fc7c3a" : "white")};
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
               <TopCircle></TopCircle>
               <Rectangle>
                    <Oval hasBookings={hasBookings} />
               </Rectangle>
          </SymbalContainer>
     );
}
