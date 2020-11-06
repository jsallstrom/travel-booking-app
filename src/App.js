import React from "react";

import StoreProvider from "./context/StoreProvider";

import AppRouter from "./routers/AppRouter";

export default function App() {
     return (
          <StoreProvider>
               <AppRouter></AppRouter>
          </StoreProvider>
     );
}
