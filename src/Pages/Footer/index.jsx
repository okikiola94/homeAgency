import React from "react";
import { MdLocationOn, MdPhone } from "react-icons/md";
import {
  AiFillPrinter,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGooglePlusG, FaLinkedin, FaPinterest, FaRss } from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerWrap">
      <hr />
      <div className="footerContent">
        <div>Logo</div>
        <div>
          <div className="socialMediaHandles">
            <MdLocationOn />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="socialMediaHandlesFlex">
            <div className="socialMediaHandles">
              <MdPhone />
              <p>(123) 456-7890</p>
            </div>
            <div className="socialMediaHandles">
              <AiFillPrinter />
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div className="socialMediaHandles">
            <p>Social Media</p>
            <AiFillFacebook />
            <AiOutlineTwitter />
            <FaLinkedin />
            <AiFillYoutube />
            <AiOutlineInstagram />
            <FaGooglePlusG />
            <FaPinterest />
            <FaRss />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
