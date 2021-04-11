import React, { useState } from "react";
import "./App.css";
import Titre from "./components/Titre";
import Button from "./components/Button";
import SimulationPrêt from "./components/SimulationPrêt";

function App() {
  const [showSimulation, setShowSimulation] = useState(false);

  const handleSimulation = () => {
    setShowSimulation(true);
  };

  return (
    <div className="App">
      <Titre />
      {!showSimulation ? (
        <Button handleSimulation={handleSimulation} />
      ) : (
        <SimulationPrêt />
      )}
    </div>
  );
}

export default App;
