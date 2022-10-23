import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-left">@ 2022 EMPRESCAR</div>

        <div className="footer-right">
          <div className="footer-div-logo">
            <span className="footer-logo">
              <FaFacebook />
            </span>
            <span className="footer-logo">
              <FaLinkedinIn />
            </span>
            <span className="footer-logo">
              <FaTwitter />
            </span>
            <span className="footer-logo">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
