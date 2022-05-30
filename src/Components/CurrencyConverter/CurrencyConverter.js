import Amount from "./Amount";
import CurrencyOptions from "./CurrencyOptions";
import classes from "./CurrencyConverter.module.css";
import React from "react";

const CurrencyConverter = () => {
  return (
    <React.Fragment>
      <div className={classes["converter-title"]}>
        <h2>Currency Converter</h2>
        <p>Check live foreign currency exchange rates</p>
      </div>
      <div className={classes["converter-container"]}>
        <div className={classes["converter-inputs"]}>
          <Amount />
          <CurrencyOptions />
        </div>
        <div className={classes["converter-outputs"]}>
          <button type="button">Convert</button>
          <div>converted amount</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter;
