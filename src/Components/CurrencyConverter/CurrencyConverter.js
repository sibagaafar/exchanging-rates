import CurrencyOptions from "./CurrancyOptions";
import classes from "./CurrencyConverter.module.css";

const CurrencyConverter = (props) => {
  return (
    <div className={classes.converterBox}>
      <div className={classes.toFromCurrencies}>
        <input type="number" step="1" />
        <CurrencyOptions />
        <button>swap</button>
        <CurrencyOptions />
      </div>

      <div className={classes.convertSection}>
        <button>Convert</button>
        <input />
      </div>
    </div>
  );
};

export default CurrencyConverter;
