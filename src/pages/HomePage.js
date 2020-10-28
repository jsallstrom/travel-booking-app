import React, { useContext } from "react";

import { DispatchContext, StateContext } from "../context/StoreProvider";

import { Link } from "react-router-dom";

export default function HomePage() {
     const dispatch = useContext(DispatchContext);
     const state = useContext(StateContext);
     return (
          <div>
               <h1>HomePage</h1>

               {state.theme}
               <button
                    onClick={() => {
                         dispatch({ type: "TOGGLE_THEME" });
                    }}
               >
                    toggle theme
               </button>

               <Link to="/about">About</Link>
          </div>
     );
}
