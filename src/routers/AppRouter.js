import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export default function AppRouter() {
     return (
          <BrowserRouter>
               <Switch>
                    <Route path="/" exact={true} component={HomePage}></Route>
                    <Route path="/about" component={AboutPage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
