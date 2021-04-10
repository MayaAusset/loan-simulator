import React, { useState } from "react";
import { Slider } from "@material-ui/core";

const DuréeSlider = () => {
  const [durée, setdurée] = useState(2, 12);

  const updatedurée = (e, data) => {
    console.log(durée);
    setdurée(data);
  };
  return (
    <div>
      <div className="slider">
        <h4>Je souhaite emprunter sur une durée de {durée} mois</h4>
        <div className="slider-bar">
          <p>2 mois</p>
          <Slider
            min={2}
            max={12}
            step={1}
            value={durée}
            onChange={updatedurée}
          />
          <p>12 mois</p>
        </div>
      </div>
    </div>
  );
};

export default DuréeSlider;
