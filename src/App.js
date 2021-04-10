import React, { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import SimulationPrêt from "./components/SimulationPrêt";

function App() {
  const [showSimulation, setShowSimulation] = useState(false);
  return (
    <div className="App">
      <h1>Loan Simulator</h1>
      {!showSimulation ? (
        <main>
          <Intro />
          <button onClick={() => setShowSimulation(true)}>
            <h3>Faire une simulation de prêt !</h3>
          </button>
        </main>
      ) : (
        <SimulationPrêt />
      )}
    </div>
  );
}

export default App;
