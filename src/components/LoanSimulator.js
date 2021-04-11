import React, { useState } from "react";
import CostSlider from "./CostSlider";
import DurationSlider from "./DurationSlider";
import SimulationResults from "./SimulationResults";

const LoanSimulator = () => {
  const [loanAmount, setloanAmount] = useState(1000);
  const [loanDuration, setLoanDuration] = useState(2);

  const handleLoanAmount = (montant) => {
    setloanAmount(montant);
  };

  const handleLoanDuration = (durée) => {
    setLoanDuration(durée);
  };

  return (
    <main>
      <div className="sliders-container">
        <CostSlider handleLoanAmount={handleLoanAmount} />
        <DurationSlider handleLoanDuration={handleLoanDuration} />
      </div>
      <div className="resultat-container">
        <SimulationResults loanAmount={loanAmount} loanDuration={loanDuration} />
      </div>
    </main>
  );
};

export default LoanSimulator;
