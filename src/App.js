import React from "react";
import AppNavbar from "./components/AppNavbar";
import BeerContextProvider from "./context/BeerContext";
import BeerList from "./components/BeerList";

function App() {
  return (
    <div className="App">
      <BeerContextProvider>
        <AppNavbar />
        <BeerList/>
      </BeerContextProvider>
    </div>
  );
}

export default App;
