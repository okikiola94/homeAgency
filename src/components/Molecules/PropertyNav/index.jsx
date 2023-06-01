import "./propertyNav.scss";

import React from "react";

const PropertNav = () => {
  return (
    <div className="PropertNavContainer">
      <h2 className="PropertNavContainerHeading">
        {" "}
        <span className="PropertNavContainerSpan">list</span> of properties
      </h2>
      <button className="PropertNavContainerButton">View all property</button>
    </div>
  );
};

export default PropertNav;
