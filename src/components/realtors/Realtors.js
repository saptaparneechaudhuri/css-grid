import "./Realtors.scss";
import React from "react";

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading--3">Top 3 Realtors</h3>
      <div className="realtors--list">
        <img
          className="realtors--img"
          src={require("../../images/realtor-1.jpeg")}
          alt="realtor 1"
        />
        <div className="realtors--details">
          <h4 className="heading--4">Eric Feinman</h4>
          <p className="realtors--sold">245 houses sold</p>
        </div>

        <img
          className="realtors--img"
          src={require("../../images/realtor-2.jpeg")}
          alt="realtor 1"
        />
        <div className="realtors--details">
          <h4 className="heading--4">Kim Brown</h4>
          <p className="realtors--sold">212 houses sold</p>
        </div>

        <img
          className="realtors--img"
          src={require("../../images/realtor-3.jpeg")}
          alt="realtor 1"
        />
        <div className="realtors--details">
          <h4 className="heading--4">Toby Ramsay</h4>
          <p className="realtors--sold">198 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
