import React from "react";
import tap from "../assets/tap.png"

const Intro = () => {
  return (
    <div className="intro-container">
      <p >
        "Loan Simulator" est une application pour simuler les couts d'un prêt. <br/>
        Simulez les coûts de votre crédit ainsi que les mensualités induites par votre
        prêt en fonction du montant et de la durée de votre prêt. <br />
        Entre 1000 à 10000 € pour le montant, et de 3 à 12 mois pour la durée.
      </p>
      <img className="hand-animation" src={tap} alt="hand pointing finger downwards" width="120px"/>
    </div>
  );
};

export default Intro;
