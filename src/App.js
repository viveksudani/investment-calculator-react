import React from "react";

import Header from "./components/UI/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults/InvestmentResults";

function App() {
  return (
    <div>
      <Header />
      <InvestmentForm />
      <InvestmentResults />
    </div>
  );
}

export default App;
