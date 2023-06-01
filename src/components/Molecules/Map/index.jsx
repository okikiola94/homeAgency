import "./Map.scss";
import MapImg from "./images/map.png";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Map = () => {
  return (
    <div className="MapContainer">
      <img src={MapImg} alt="map" />
      <div className="MapSearchInput">
        <span className="TypesContainer">
          <select id="Types" className="TypesInput">
            <option selected>All Types</option>
            <option value="AP">Apartment</option>
            <option value="CO">Condomium</option>
            <option value="AB">Airbnb</option>
            <option value="SA">Shared Apartment</option>
          </select>
        </span>
        <span className="NeighborhoodContainer">
          <select id="Types" className="NeighborhoodInput">
            <option selected>Neighborhood</option>
            <option value="AP">Surburban</option>
            <option value="CO">Urban</option>
          </select>
        </span>
        <button className="InputBtn">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Map;
