import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import StoreProvider from "./context/StoreProvider";

ReactDOM.render(
     <StoreProvider>
          <React.StrictMode>
               <App />
          </React.StrictMode>
     </StoreProvider>,
     document.getElementById("root")
);

reportWebVitals();
