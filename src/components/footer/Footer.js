import "./Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav--item">
          <a href="#" className="nav--link">
            Find your dream home
          </a>
        </li>

        <li className="nav--item">
          <a href="#" className="nav--link">
            Request proposal
          </a>
        </li>

        <li className="nav--item">
          <a href="#" className="nav--link">
            Download home planner
          </a>
        </li>

        <li className="nav--item">
          <a href="#" className="nav--link">
            Contact us
          </a>
        </li>

        <li className="nav--item">
          <a href="#" className="nav--link">
            Submit your property
          </a>
        </li>

        <li className="nav--item">
          <a href="#" className="nav--link">
            Come work with us!
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
