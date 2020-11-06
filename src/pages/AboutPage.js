import React, { useContext } from "react";

import { DispatchContext, StateContext } from "../context/StoreProvider";

import { Link } from "react-router-dom";

export default function AboutPage() {
     const dispatch = useContext(DispatchContext);
     const state = useContext(StateContext);
     return (
          <div>
               <h1>AboutPage</h1>

               <Link to="/">Home</Link>
          </div>
     );
}
