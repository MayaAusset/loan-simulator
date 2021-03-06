import React, { useState, useEffect } from "react";
import SimulationResultCard from "./SimulationResultCard";

const SimulationResults = ({ loanAmount, loanDuration }) => {
  const [interestRate, setInterestRate] = useState(60);
  const [totalAmount, setTotalAmount] = useState(1060);
  const [creditCost, setCreditCost] = useState(60);
  const [monthlyPayment, setMonthlyPayment] = useState(530);

  const calculateInterestRate = (loanAmount) => {
    return Math.round((6 / 100) * loanAmount);
  };
  const calculateTotalAmount = (loanAmount, interestRate) => {
    return loanAmount + interestRate;
  };
  const calculateCreditCost = (totalAmount, loanAmount) => {
    return totalAmount - loanAmount;
  };
  const calculateMonthlyPayment = (totalAmount, loanDuration) => {
    return Math.round((totalAmount / loanDuration) * 100) / 100;
  };

  useEffect(() => {
    setInterestRate(calculateInterestRate(loanAmount));
    setTotalAmount(calculateTotalAmount(loanAmount, interestRate));
    setCreditCost(calculateCreditCost(totalAmount, loanAmount));
    setMonthlyPayment(calculateMonthlyPayment(totalAmount, loanDuration));
  }, [loanAmount, loanDuration, totalAmount, interestRate]);

  return (
    <div className="simulation-results">
      <SimulationResultCard
        loanAmount={loanAmount}
        creditCost={creditCost}
        totalAmount={totalAmount}
        loanDuration={loanDuration}
        monthlyPayment={monthlyPayment}
      />
    </div>
  );
};

export default SimulationResults;
