import React from "react";
import Map from "../Map";
import "./Home.scss";

const HomeMolecule = () => {
  return (
    <div className="HomeComponents">
      <div className="HomeParagraph">
        <h2>The most affortable place to stay in the san franciso bay area</h2>
      </div>
      <Map />
    </div>
  );
};

export default HomeMolecule;
