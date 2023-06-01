import React from "react";
import HomeMolecule from "../../components/Molecules/Home";
import TopNav from "../Navbar";

// STYLES
import "./hero.scss";

const Hero = () => {
  return (
    <div className="HomeContainer">
      <TopNav />
      <div className="">
        <HomeMolecule />
      </div>
    </div>
  );
};

export default Hero;
