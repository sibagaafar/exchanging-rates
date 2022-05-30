import classes from "./Amount.module.css";

const Amount = () => {
  return (
    <div className={classes["amount-container"]}>
      <label htmFor="amount">Amount</label>
      <input type="number" name="amount" placeholder="1.00" />
    </div>
  );
};

export default Amount;
