import React, { useState } from "react";
import { Slider } from "@material-ui/core";

const DurationSlider = ({ handleLoanDuration }) => {
  const [duration, setDuration] = useState(2, 12);

  const updateDuration = (e, durationInput) => {
    setDuration(durationInput);
    handleLoanDuration(durationInput)
  };
  return (
    <div>
      <div className="slider">
        <h4>
          Je souhaite emprunter sur une durée de <span>{duration} mois</span>{" "}
        </h4>
        <div className="slider-bar">
          <p>2 mois</p>
          <Slider
            min={2}
            max={12}
            step={1}
            value={duration}
            onChange={updateDuration}
            //andledurationPrêt={}
          />
          <p>12 mois</p>
        </div>
      </div>
    </div>
  );
};

export default DurationSlider;
