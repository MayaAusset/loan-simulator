import React from "react";
import PrixSlider from "./PrixSlider";
import DuréeSlider from "./DuréeSlider";
import RésultatSimulation from "./RésultatSimulation";

const SimulationPrêt = () => {
  return (
    <main>
      <div className="sliders-container">
        <PrixSlider />
        <DuréeSlider />
      </div>
      <div className="resultat-container">
        <RésultatSimulation />
      </div>
    </main>
  );
};

export default SimulationPrêt;
