import React, { useState } from "react";

import styles from "./InvestmentForm.module.css";

const DEFAULT_USER_INPUT = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);

  const inputChangeHandler = (event) => {
    const changedValue = {};
    changedValue[event.target.id] = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, ...changedValue };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={inputChangeHandler} />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
