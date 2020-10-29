import React, { useContext, useEffect } from "react";

import { DispatchContext, StateContext } from "../context/StoreProvider";

import { Link } from "react-router-dom";

// 1) make NavBar
// 2) make simpel booking Page, able to add booking from there, use Formik?? Nah not needed
// 3) Load in available bookings into Store from app
// 4)

export default function HomePage() {
     const dispatch = useContext(DispatchContext);
     const state = useContext(StateContext);

     return (
          <div>
               <h1>HomePage</h1>
               <ul>
                    {state.featuredBookings.map((booking) => (
                         <li>{booking.title} </li>
                    ))}
               </ul>

               <ul>
                    {state.carouselBookings.map((booking2) => (
                         <li>{booking2.title} </li>
                    ))}
               </ul>

               <Link to="/about">About</Link>
          </div>
     );
}
