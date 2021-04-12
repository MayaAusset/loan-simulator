import React from "react";

const SimulationResultCard = ({
  loanAmount,
  creditCost,
  totalAmount,
  loanDuration,
  monthlyPayment,
}) => {
  return (
    <>
      <div className="results">
        <p>
          <span>{loanAmount} € </span>+ coût du crédit ({creditCost}€) =
          <span> {totalAmount} €</span> sur <span>{loanDuration} mois</span>
        </p>
      </div>
      <div className="results">
        <p>
          Mensualités de <span>{monthlyPayment} €</span>
          /mois
        </p>
      </div>
    </>
  );
};

export default SimulationResultCard;
