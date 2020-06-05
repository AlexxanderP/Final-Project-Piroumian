import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Logo">
        <Link to="/">Landeen Heating and Air Conditioning</Link>
      </div>
      <div className="nav-links">
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/OurServices">
          Our Services
        </Link>
        <Link className="link2" to="/ContactUs">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
export default Nav;
