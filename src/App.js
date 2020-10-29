import React, { useEffect, useContext } from "react";
import AppRouter from "./routers/AppRouter";

import { DispatchContext } from "./context/StoreProvider";

import axios from "axios";

export default function App() {
     const dispatch = useContext(DispatchContext);
     const fetchData = async () => {
          /** Cross-Origin begäran blockerad: Same-Origin policyn tillåter inte läsningar av 
           * fjärresurs på https://webdev-exercise.netlify.app/data/products.json.
           *  (Orsak: CORS header 'Access-Control-Allow-Origin' saknas).
           * 
           *  
           const response = await axios.get(
               "https://webdev-exercise.netlify.app/data/products.json",
               
          );
           * 
           */

          const response = await axios.get("products.json");

          const data = response.data;

          dispatch({
               type: "FETCH_DATA",
               payload: data,
          });

          console.log(data);
     };

     useEffect(() => {
          fetchData();
     }, []);
     return <AppRouter></AppRouter>;
}
