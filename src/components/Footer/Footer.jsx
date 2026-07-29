import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" style={{ width: "300px", height: "auto" }}/>
          <h3>
            Cafe Nova- where every sip and bite feels like a warm hug.
          </h3>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
        </div>
        <div className="footer-content-right">
          <h2>Can contact us at!</h2>
          <ul>
            <li>9764XXXXXX</li>
            <li>cafeNova@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
