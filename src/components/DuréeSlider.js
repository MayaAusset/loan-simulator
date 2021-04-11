import React, { useState } from "react";
import { Slider } from "@material-ui/core";

const DuréeSlider = ({handleDuréePrêt}) => {
  const [durée, setdurée] = useState(2, 12);

  const updatedurée = (e, data) => {
    console.log(durée);
    setdurée(data);
  };
  return (
    <div>
      <div className="slider">
        <h4>Je souhaite emprunter sur une durée de <span>{durée} mois</span> </h4>
        <div className="slider-bar">
          <p>2 mois</p>
          <Slider
            min={2}
            max={12}
            step={1}
            value={durée}
            onChange={updatedurée}
            handleDuréePrêt={handleDuréePrêt(durée)}
          />
          <p>12 mois</p>
        </div>
      </div>
    </div>
  );
};

export default DuréeSlider;
