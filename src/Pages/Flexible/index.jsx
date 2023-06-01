import React from "react";

// STYLES
import "./flexible.scss";

const Flexible = () => {
  return (
    <div className="FlexibleContainer">
      <div className="FlexibleGrid">
        <div className="FlexibleImgFlex">
          <div className="FlexibleImgFlexColumn" id="flex1">
            <div className="FlexibleLeases">
              <p className="FlexibleLeasesText">flexible leases</p>
            </div>
            <div className="FlexibleCleaning">
              <p className="FlexibleLeasesText">Monthly House Cleaning</p>
            </div>
          </div>
          <div className="FlexibleImgFlexColumn" id="flex2">
            <div className="FlexibleHappiness">
              <p className="FlexibleLeasesText">7-Day Happiness Guaranteed</p>
            </div>

            <div className="FlexibleRoommate">
              <p className="FlexibleLeasesText">Choose Your Own Roommate</p>
            </div>
          </div>
        </div>
        <div className="FlexibleTextFlex">
          <h2 className="FlexibleHeaderText">
            Flexibility and options to suit your lifestyle.
          </h2>
          <p className="FlexibleParagraphText">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <button className="FlexibleSearchBtn">Search Rooms</button>
        </div>
      </div>
    </div>
  );
};

export default Flexible;
