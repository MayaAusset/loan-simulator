import React, { useState } from "react";
import "./App.css";
import Titre from "./components/Titre";
import SimulationPrêt from "./components/SimulationPrêt";

function App() {
  const [showSimulation, setShowSimulation] = useState(false);
  return (
    <div className="App">
      <Titre />
      {!showSimulation ? (
        <main>
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
