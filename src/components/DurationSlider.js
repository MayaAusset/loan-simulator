import React, { useState } from "react";
import SliderWidget from "./SliderWidget";
import SliderText from "./SliderText";

const DurationSlider = ({ handleLoanDuration }) => {
  const [duration, setDuration] = useState(3);

  const updateDuration = (e, durationInput) => {
    setDuration(durationInput);
    handleLoanDuration(durationInput);
  };
  return (
    <div className="slider">
      <SliderText text={"sur une durée de"} amount={duration} value={"mois"} />
      <SliderWidget
        type={"mois"}
        min={3}
        max={12}
        step={1}
        value={duration}
        onChange={updateDuration}
      />
    </div>
  );
};

export default DurationSlider;
