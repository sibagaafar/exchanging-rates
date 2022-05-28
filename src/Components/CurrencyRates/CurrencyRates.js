import classes from "./CurrencyRates.module.css";

const CurrencyRates = () => {
  return (
    <div className={classes.container}>
      <div className={classes.infoRow}>
        <div>Currency</div>
        <div>Amount</div>
        <div>Change</div>
        <div>Chart</div>
      </div>
      <div className={classes.data}>
        <div>USD</div>
        <div>1</div>
        <div>+2</div>
        <div>Chart</div>
      </div>
    </div>
  );
};

export default CurrencyRates;
