import React, { useContext } from "react";

import { StateContext } from "../context/StoreProvider";

export default function UserBookingsPage() {
     const state = useContext(StateContext);

     if (state.customerBookings.length < 1) {
          return <div>sorry no bookings yet...</div>;
     }

     return (
          <div>
               <h3>A simple showing of tickets, stylings coming soon...</h3>
               {state.customerBookings.map((experience, index) => (
                    <div key={index}>
                         <h1>{experience.experienceId}</h1>
                         <p>Adult tickets: {experience.adultTickets}</p>
                         <p>Child tickets: {experience.childTickets}</p>
                         <h2>Total: £{experience.totalPrice}</h2>
                    </div>
               ))}
          </div>
     );
}
