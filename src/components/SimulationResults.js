import React, { useState, useEffect } from "react";

const SimulationResults = ({ loanAmount, loanDuration }) => {
  const [tauxInteret, setTauxInteret] = useState(
    Math.round((6 / 100) * loanAmount)
  );
  const [montantTotal, setMontantTotal] = useState(loanAmount + tauxInteret);
  const [coutCredit, setCoutCredit] = useState(montantTotal - loanAmount);
  const [mensualités, setMensualités] = useState(montantTotal / loanDuration);

  useEffect(() => {
    setTauxInteret(Math.round((6 / 100) * loanAmount));
    setMontantTotal(loanAmount + tauxInteret);
    setCoutCredit(montantTotal - loanAmount);
    setMensualités(montantTotal / loanDuration);
  }, [loanAmount, loanDuration, montantTotal, tauxInteret]);

  return (
    <div className="simulation-results">
      <div className="results">
        <p>
          <span>{loanAmount} € </span>+ cout du crédit ({coutCredit}€) ={" "}
          <span>{montantTotal} €</span> sur <span>{loanDuration} mois</span>
        </p>
      </div>
      <div className="results">
        <p>
          Mensualités de <span>{Math.round(mensualités * 100) / 100} €</span>
          /mois
        </p>
      </div>
    </div>
  );
};

export default SimulationResults;
