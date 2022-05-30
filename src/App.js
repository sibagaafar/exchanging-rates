import React from "react";
import classes from "./App.module.css";
import CurrencyConverter from "./Components/CurrencyConverter/CurrencyConverter";
import CurrencyRates from "./Components/CurrencyRates/CurrencyRates";

const App = () => {
  return (
    <React.Fragment>
      <div className={classes.backcolor}></div>
      <CurrencyConverter />
      <CurrencyRates />
    </React.Fragment>
  );
};

export default App;
