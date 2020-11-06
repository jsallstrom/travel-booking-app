import React, { useEffect, useContext } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BookingPage from "../pages/BookingPage";

import { DispatchContext } from "../context/StoreProvider";

export default function AppRouter() {
     return (
          <BrowserRouter>
               <NavBar></NavBar>
               <Switch>
                    <Route path="/" exact={true} component={HomePage}></Route>
                    <Route path="/about" component={AboutPage}></Route>
                    <Route path="/book/:id" component={BookingPage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
