import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import LoanSimulator from "./components/LoanSimulator";

function App() {
  const [showSimulation, setShowSimulation] = useState(false);

  const handleSimulation = () => {
    setShowSimulation(true);
  };

  return (
    <div className="App">
      <Title />
      {!showSimulation ? (
        <Button handleSimulation={handleSimulation} />
      ) : (
        <LoanSimulator />
      )}
    </div>
  );
}

export default App;
