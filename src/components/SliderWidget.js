import React from 'react';
import { Slider } from "@material-ui/core";


const SliderWrapper = ({type, min, max, step, value, onChange}) => {
    return (
        <div className="slider-bar">
        <p>{min} {type}</p>
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
        <p>{max} {type}</p>
      </div>
    );
};

export default SliderWrapper;