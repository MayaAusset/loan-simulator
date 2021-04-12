import React from "react";
import CostSlider from "./CostSlider";
import DurationSlider from "./DurationSlider";

const SliderContainer = ({ handleLoanAmount, handleLoanDuration }) => {
  return (
    <div>
      <CostSlider handleLoanAmount={handleLoanAmount} />
      <DurationSlider handleLoanDuration={handleLoanDuration} />
    </div>
  );
};

export default SliderContainer;
