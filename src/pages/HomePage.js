import React, { useContext, useEffect } from "react";

import { DispatchContext, StateContext } from "../context/StoreProvider";

import { Link } from "react-router-dom";

import axios from "axios";

// 1) make NavBar
// 2) make simpel booking Page, able to add booking from there, use Formik?? Nah not needed
// 3) Load in available bookings into Store from app
// 4)

export default function HomePage() {
     const dispatch = useContext(DispatchContext);
     const state = useContext(StateContext);

     const fetchData = async () => {
          /** Cross-Origin begäran blockerad: Same-Origin policyn tillåter inte läsningar av 
           * fjärresurs på https://webdev-exercise.netlify.app/data/products.json.
           *  (Orsak: CORS header 'Access-Control-Allow-Origin' saknas).
           * 
           *  
           const response = await axios.get(
               "https://webdev-exercise.netlify.app/data/products.json",
               { crossDomain: true }
          );
           * 
           */

          const response = await axios.get("products.json", {
               // fetch products.json from /public
          });

          const featuredData = response.data.featured;

          const carouselData = response.data.carousel.items;

          dispatch({
               type: "FETCH_DATA",
               payload: response.data,
          });

          console.log(response.data);
     };

     useEffect(() => {
          fetchData();
     }, []);

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
