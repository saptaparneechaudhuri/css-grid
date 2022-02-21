import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img
        src={require("../../images/logo.png")}
        className="header--logo"
        alt="logo"
      />
      <h3 className="heading--3">Your own home:</h3>
      <h1 className="heading--1">The ultimate personal freedom</h1>
      <button className="btn header--btn">View our properties</button>
      <div className="header--seenon-text">Seen on</div>
      <div className="header--seenon-logos">
        <img src={require("../../images/logo-bbc.png")} alt="seen logo" />
        <img src={require("../../images/logo-forbes.png")} alt="seen logo" />
        <img
          src={require("../../images/logo-techcrunch.png")}
          alt="seen logo"
        />
        <img src={require("../../images/logo-bi.png")} alt="seen logo" />
      </div>
    </header>
  );
};

export default Header;
