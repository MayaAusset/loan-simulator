import React from "react";

const RésultatSimulation = ({montantPrêt, duréePrêt}) => {
  return (
    <div>
      <h1>Résultat</h1>
      <p>
        Taux d'Interêt = 6%
        <br />
        Montant total à rembourser = Montant pret * taux d'interet
        <br />
        Cout du crédit = montant total à rembourser - montant du prêt
        <br />
        Paiement mensuel = montant total à rembourser / durée du prêt
      </p>

      <p>
        Avec un prêt de {montantPrêt} € sur une durée de {duréePrêt} mois, le cout de votre crédit
        serait de cout du crédit, un montant total à rembourser de Montant total
        à rembourser. Un paiement mensuel de paiement mensuel !
      </p>
    </div>
  );
};

export default RésultatSimulation;
