import React, { useState } from 'react';
import { Slider } from "@material-ui/core";

const PrixSlider = () => {
    const [prix, setPrix]= useState(1000, 10000);

    const updatePrix = (e, data) => {
        console.log(prix)
        setPrix(data)
    }
    return (
        <div className="slider">
            <h4>Je souhaite emprunter {prix} euros</h4>
            <div className="slider-bar">
            <p>1000€</p>
            <Slider
            min={1000}
            max={10000}
            step={1000}
            value={prix}
            onChange={updatePrix}
            />
            <p>10 000€</p>
            </div>
        </div>
    );
};

export default PrixSlider;