import React, { useState, useEffect } from "react";

const RésultatSimulation = ({ montantPrêt, duréePrêt }) => {
  const [tauxInteret, setTauxInteret] = useState(
    Math.round((6 / 100) * montantPrêt)
  );

  useEffect(()=>{
    setTauxInteret(Math.round((6 / 100) * montantPrêt))
  }, [montantPrêt])

  return (
    <div>
      <p>
        Taux d'Interêt = <span>6 %</span>
        <br />
        Montant total à rembourser = <span>{montantPrêt + tauxInteret} €</span>
        <br />
        Cout du crédit = <span>{(montantPrêt + tauxInteret) - montantPrêt} €</span>
        <br />
        Paiement mensuel = <span>{Math.round((montantPrêt + tauxInteret) / duréePrêt)} €</span>
      </p>
    </div>
  );
};

export default RésultatSimulation;
