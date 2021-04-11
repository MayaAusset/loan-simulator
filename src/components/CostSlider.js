import React, { useState } from "react";
import { Slider } from "@material-ui/core";

const CostSlider = ({ handleLoanAmount }) => {
  const [cost, setCost] = useState(1000, 10000);

  const updateCost = (e, costInput) => {
    setCost(costInput);
    handleLoanAmount(costInput);
  };
  return (
    <div className="slider">
      <h4>
        Je souhaite emprunter <span>{cost} €</span>
      </h4>
      <div className="slider-bar">
        <p>1000 €</p>
        <Slider
          min={1000}
          max={10000}
          step={1000}
          value={cost}
          onChange={updateCost}
          //handleLoanAmount={handleLoanAmount(cost)}
        />
        <p>10 000 €</p>
      </div>
    </div>
  );
};

export default CostSlider;
