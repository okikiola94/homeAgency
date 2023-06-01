import React from "react";
import "./FootNav.scss";

const FootNav = () => {
  return (
    <div className="FootNavWrap">
      <hr />
      <div className="footNavContent">
        <ul className="footNavUlorderedList">
          <li>About us</li>
          <li>Contact us</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>
        <small className="copyRightparagraph">
          Copyright © 2020 Minimumlivingcost. All rights reserved
        </small>
      </div>
    </div>
  );
};

export default FootNav;
