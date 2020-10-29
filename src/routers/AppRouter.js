import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export default function AppRouter() {
     return (
          <BrowserRouter>
               <NavBar></NavBar>
               <Switch>
                    <Route path="/" exact={true} component={HomePage}></Route>
                    <Route path="/about" component={AboutPage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
