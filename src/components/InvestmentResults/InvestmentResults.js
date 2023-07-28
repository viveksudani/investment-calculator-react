import React from "react";

import styles from "./InvestmentResults.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentResults = (props) => {
  if (props.data.length === 0) {
    return (
      <div className={styles.fallback}>
        <p>Fill above form and press calculate to view the results.</p>
      </div>
    );
  }

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
        {props.data.map((item) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>{formatter.format(item.totalInterestGained)}</td>
              <td>{formatter.format(item.totalInvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentResults;
