import classes from "./CurrencyOption.module.css";

const CurrencyOption = (props) => {
  return (
    <div className={classes["list-container"]}>
      <label htmlFor="currencyOption">lable</label>
      <div className={classes["choose-currency"]}>
        <input type="text" name="currencyOption" />
        <select>
          <option>USD</option>
        </select>
      </div>
    </div>
  );
};

export default CurrencyOption;
