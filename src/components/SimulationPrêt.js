import React, { useState } from "react";
import PrixSlider from "./PrixSlider";
import DuréeSlider from "./DuréeSlider";
import RésultatSimulation from "./RésultatSimulation";

const SimulationPrêt = () => {
  const [montantPrêt, setMontantPrêt] = useState(1000);
  const [duréePrêt, setDuréePrêt] = useState(2);

  const handleMontantPrêt = (montant) => {
      setMontantPrêt(montant)
  };

  const handleDuréePrêt = (durée) => {
      setDuréePrêt(durée)
  };

  return (
    <main>
      <div className="sliders-container">
        <PrixSlider handleMontantPrêt={handleMontantPrêt} />
        <DuréeSlider handleDuréePrêt={handleDuréePrêt} />
      </div>
      <div className="resultat-container">
        <RésultatSimulation montantPrêt={montantPrêt} duréePrêt={duréePrêt} />
      </div>
    </main>
  );
};

export default SimulationPrêt;
