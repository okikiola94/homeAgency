import "./properties.scss";

import React from "react";
import PropertNav from "../../components/Molecules/PropertyNav";
import Pagination from "../../components/Molecules/Pagination";

const Properties = () => {
  return (
    <div className="PropertiesContainer">
      {/* <PropertNav /> */}
      <Pagination />
    </div>
  );
};

export default Properties;
