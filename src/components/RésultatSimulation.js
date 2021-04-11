import React, { useState, useEffect } from "react";

const RésultatSimulation = ({ montantPrêt, duréePrêt }) => {
  const [tauxInteret, setTauxInteret] = useState(
    Math.round((6 / 100) * montantPrêt)
  );
  const [montantTotal, setMontantTotal] = useState(montantPrêt + tauxInteret);
  const [coutCredit, setCoutCredit] = useState(montantTotal - montantPrêt);
  const [mensualités, setMensualités] = useState(montantTotal / duréePrêt);

  useEffect(() => {
    setTauxInteret(Math.round((6 / 100) * montantPrêt));
    setMontantTotal(montantPrêt + tauxInteret);
    setCoutCredit(montantTotal - montantPrêt);
    setMensualités(montantTotal / duréePrêt);
  }, [montantPrêt, duréePrêt, montantTotal, tauxInteret]);

  return (
    <div className="simulation-results">
      <p>
        Taux d'Interêt = <span>6 %</span>
        <br />
        Montant total à rembourser =<span>{montantTotal} €</span>
        <br />
        Cout du crédit = <span>{coutCredit}</span>
        <br />
        Paiement mensuel = <span>{Math.round(mensualités)} €</span>
      </p>
    </div>
  );
};

export default RésultatSimulation;
