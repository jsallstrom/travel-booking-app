import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";

import BookingPage from "../pages/BookingPage";
import UserBookingsPage from "../pages/UserBookingsPage";

export default function AppRouter() {
     return (
          <BrowserRouter>
               <NavBar></NavBar>
               <Switch>
                    <Route path="/" exact={true} component={HomePage}></Route>
                    <Route path="/book/:id" component={BookingPage}></Route>
                    <Route path="/bookings" component={UserBookingsPage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
