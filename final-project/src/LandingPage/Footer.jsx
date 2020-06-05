import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/OurServices">
          Our Services
        </Link>
        <Link className="link" to="/ContactUs">
          Contact Us
        </Link>
      </div>
      <div className="Creator">
        <h2 className="Alexander">
          Created by:
          <a className="portfolio" href="https://alexanderpiroumian.com">
            Alexander Piroumian
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
