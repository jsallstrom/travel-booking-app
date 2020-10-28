import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";

export default function AppRouter() {
     return (
          <BrowserRouter>
               <Switch>
                    <Route path="/" exact={true} component={HomePage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
