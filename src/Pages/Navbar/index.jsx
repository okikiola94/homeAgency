import React from "react";
import Logo from "./images/logo.png";

// STYLES
import "./navbar.scss";
const TopNav = () => {
  return (
    <nav className="TopNavContainer">
      <div className="TopNavComponentWrapper">
        <img src={Logo} alt="logo" className="LogoImg" />
        <ul className="TopNavContainerUnList">
          <li className="TopNavContainerOList">Home</li>
          <li className="TopNavContainerOList">Landlord</li>
          <li className="TopNavContainerOList">Tenants</li>
          <li className="TopNavContainerOList">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
