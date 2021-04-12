import React from "react";

const SliderText = ({text, amount, value}) => {
  return (
    <h4>
      {text} <span>{amount} {value}</span> 
    </h4>
  );
};

export default SliderText;
