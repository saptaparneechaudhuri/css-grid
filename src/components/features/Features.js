import "./Features.scss";

import React from "react";
import SvgIcons from "../../images/sprite.svg";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <svg className="feature--icon">
          <use xlinkHref={`${SvgIcons}#icon-global`}></use>
        </svg>
        <h4 className="heading--4 heading--4--dark">
          World's best luxury homes
        </h4>
        <p className="feature--text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        <svg className="feature--icon">
          <use xlinkHref={`${SvgIcons}#icon-trophy`}></use>
        </svg>
        <h4 className="heading--4 heading--4--dark">
          Only the best properties
        </h4>
        <p className="feature--text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>
      <div className="feature">
        <svg className="feature--icon">
          <use xlinkHref={`${SvgIcons}#icon-map-pin`}></use>
        </svg>
        <h4 className="heading--4 heading--4--dark">
          All homes in top locations
        </h4>
        <p className="feature--text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>
      <div className="feature">
        <svg className="feature--icon">
          <use xlinkHref={`${SvgIcons}#icon-key`}></use>
        </svg>
        <h4 className="heading--4 heading--4--dark">New home in one week</h4>
        <p className="feature--text">
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="feature">
        <svg className="feature--icon">
          <use xlinkHref={`${SvgIcons}#icon-presentation`}></use>
        </svg>
        <h4 className="heading--4 heading--4--dark">Top 1% realtors</h4>
        <p className="feature--text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        <svg className="feature--icon">
          <use xlinkHref={`${SvgIcons}#icon-lock`}></use>
        </svg>
        <h4 className="heading--4 heading--4--dark">
          Secure payments on nexter
        </h4>
        <p className="feature--text">
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
};

export default Features;
