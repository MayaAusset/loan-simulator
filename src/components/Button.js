import React from "react";

const Button = ({ handleSimulation }) => {
  return (
    <div>
      <button onClick={() => handleSimulation()}>
        <h3>Faire une simulation de prêt !</h3>
      </button>
    </div>
  );
};

export default Button;
