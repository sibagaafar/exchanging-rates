import React from "react";
import CurrencyConverter from "./Components/CurrencyConverter/CurrencyConverter";
import CurrencyRates from "./Components/CurrencyRates/CurrencyRates";

const App = () => {
  return (
    <React.Fragment>
      <CurrencyConverter />
      <CurrencyRates />
    </React.Fragment>
  );
};

export default App;
