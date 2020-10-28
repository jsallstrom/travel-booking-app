import React, { createContext, useReducer } from "react";

import Reducer from "./Reducer";

export const StateContext = createContext();
export const DispatchContext = createContext();

const initialState = {
     availableBookings: [],
     customerBookings: [],
};

const StoreProvider = ({ children }) => {
     const [state, dispatch] = useReducer(Reducer, initialState);

     return (
          <StateContext.Provider value={state}>
               <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
          </StateContext.Provider>
     );
};

export default StoreProvider;
