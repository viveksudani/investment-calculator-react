import React, { useState } from "react";

import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults/InvestmentResults";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateInvestmentHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let totalInterestGained = 0;
    let totalInvestedCapital = +userInput["current-savings"];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      totalInterestGained += yearlyInterest;
      totalInvestedCapital += yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterestGained: totalInterestGained,
        totalInvestedCapital: totalInvestedCapital,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateInvestmentHandler} />
      <InvestmentResults data={yearlyData} />
    </div>
  );
}

export default App;
