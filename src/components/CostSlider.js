import React, { useState } from "react";
import SliderWidget from "./SliderWidget";
import SliderText from "./SliderText";

const CostSlider = ({ handleLoanAmount }) => {
  const [cost, setCost] = useState(1000);

  const updateCost = (e, costInput) => {
    setCost(costInput);
    handleLoanAmount(costInput);
  };
  return (
    <div className="slider">
      <SliderText text={"Je souhaite emprunter"} amount={cost} value={"€"} />
      <SliderWidget
        type={"€"}
        min={1000}
        max={10000}
        step={1000}
        value={cost}
        onChange={updateCost}
      />
    </div>
  );
};

export default CostSlider;
