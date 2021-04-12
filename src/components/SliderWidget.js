import React from 'react';
import { Slider } from "@material-ui/core";


const SliderWrapper = ({minval, maxval, min, max, step, value, onChange}) => {
    return (
        <div className="slider-bar">
        <p>{minval}</p>
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
        <p>{maxval}</p>
      </div>
    );
};

export default SliderWrapper;