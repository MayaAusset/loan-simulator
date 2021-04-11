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
    <>
    {/* <div className="simulation-results">
      <p>
        Taux d'Interêt = <span>6 %</span>
        <br />
        Montant total à rembourser =<span>{montantTotal} €</span>
        <br />
        Cout du crédit = <span>{coutCredit}</span>
        <br />
        Paiement mensuel = <span>{Math.round(mensualités)} €</span>
      </p>
    </div> */}
    <div className="simulation-results">
      <div className="results"> 
        <p><span>{montantPrêt} € </span>+ cout du crédit ({coutCredit}€) = <span>{montantTotal} €</span> sur <span>{duréePrêt} mois</span></p>
      </div>
      <div className="results">
        <p>Mensualités de <span>{Math.round(mensualités * 100) / 100} €</span>/mois</p>
      </div>
    </div>
    </>
  );
};

export default RésultatSimulation;
