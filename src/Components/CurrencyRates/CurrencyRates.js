import React from "react";
import classes from "./CurrencyRates.module.css";

const CurrencyRates = () => {
  return (
    <React.Fragment>
      <h2 className={classes.rateTitle}>Live Exchange Rate</h2>

      <div className={classes.container}>
        <div className={classes.infoRow}>
          <div>USD Equal To</div>
          <div>Currency</div>
          <div>Amount</div>
          <div>Change</div>
          <div>Chart</div>
        </div>
        <div>
          <div className={classes.data}>
            <div>USD</div>
            <div>1</div>
            <div>+2</div>
            <div>Change</div>
            <div>Chart</div>
          </div>
          <hr className={classes.line} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrencyRates;
