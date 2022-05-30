import CurrencyOption from "./CurranceyOption";
import classes from "./CurrencyOptions.module.css";
const CurrencyOptions = () => {
  return (
    <div className={classes["lists-container"]}>
      <CurrencyOption />
      <button type="button" className={classes["swap-btn"]}>
        swap
      </button>
      <CurrencyOption />
    </div>
  );
};

export default CurrencyOptions;
