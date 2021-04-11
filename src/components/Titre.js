import React from 'react';
import mansaDot from "../assets/mansaDot.png";

const Logo = () => {
    return (
        <div>
            <h1 className="title">Loan Simulator<span><img src={mansaDot} alt="red dot" width="20px"/></span></h1>
        </div>
    );
};

export default Logo;