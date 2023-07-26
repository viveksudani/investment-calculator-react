import React, { useState } from "react";

import Header from "./components/UI/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults/InvestmentResults";

function App() {
  const [investmentData, setInvestmentData] = useState([]);

  const calculateInvestmentHandler = (yearlyData) => {
    setInvestmentData(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateInvestmentHandler} />
      <InvestmentResults data={investmentData} />
    </div>
  );
}

export default App;
