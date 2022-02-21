import "./Homes.scss";
import React from "react";
import House1 from "../../images/house-1.jpeg";
import House2 from "../../images/house-2.jpeg";
import House3 from "../../images/house-3.jpeg";
import House4 from "../../images/house-4.jpeg";
import House5 from "../../images/house-5.jpeg";
import House6 from "../../images/house-6.jpeg";
import SvgIcons from "../../images/sprite.svg";

const Homes = () => {
  return (
    <section className="homes">
      <div className="home">
        <img src={House1} alt="house1" className="home--img" />
        <svg className="home--like">
          <use xlinkHref={`${SvgIcons}#icon-heart-full`}></use>
        </svg>
        <h5 className="home--name">Beautiful family house</h5>
        <div className="home--location">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-map-pin`}></use>
          </svg>
          <p>USA</p>
        </div>
        <div className="home--rooms">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-profile-male`}></use>
          </svg>
          <p> 5 rooms</p>
        </div>

        <div className="home--area">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-expand`}></use>
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>

        <div className="home--price">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-key`}></use>
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home--btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House2} alt="house1" className="home--img" />
        <svg className="home--like">
          <use xlinkHref={`${SvgIcons}#icon-heart-full`}></use>
        </svg>
        <h5 className="home--name">Modern Glass Villa</h5>
        <div className="home--location">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-map-pin`}></use>
          </svg>
          <p>Canada</p>
        </div>

        <div className="home--rooms">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-profile-male`}></use>
          </svg>
          <p> 6 rooms</p>
        </div>

        <div className="home--area">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-expand`}></use>
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>

        <div className="home--price">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-key`}></use>
          </svg>
          <p>$2,700,000</p>
        </div>
        <button className="btn home--btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House3} alt="house1" className="home--img" />
        <svg className="home--like">
          <use xlinkHref={`${SvgIcons}#icon-heart-full`}></use>
        </svg>
        <h5 className="home--name">Cozy Country House</h5>
        <div className="home--location">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-map-pin`}></use>
          </svg>
          <p>UK</p>
        </div>
        <div className="home--rooms">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-profile-male`}></use>
          </svg>
          <p> 4 rooms</p>
        </div>

        <div className="home--area">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-expand`}></use>
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>

        <div className="home--price">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-key`}></use>
          </svg>
          <p>$800,000</p>
        </div>
        <button className="btn home--btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House4} alt="house1" className="home--img" />
        <svg className="home--like">
          <use xlinkHref={`${SvgIcons}#icon-heart-full`}></use>
        </svg>
        <h5 className="home--name">Large Rustial Villa</h5>
        <div className="home--location">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-map-pin`}></use>
          </svg>
          <p>Portugal</p>
        </div>
        <div className="home--rooms">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-profile-male`}></use>
          </svg>
          <p> 7 rooms</p>
        </div>

        <div className="home--area">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-expand`}></use>
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </div>

        <div className="home--price">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-key`}></use>
          </svg>
          <p>$1,900,000</p>
        </div>
        <button className="btn home--btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House5} alt="house1" className="home--img" />
        <svg className="home--like">
          <use xlinkHref={`${SvgIcons}#icon-heart-full`}></use>
        </svg>
        <h5 className="home--name">Majestic Palace House</h5>
        <div className="home--location">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-map-pin`}></use>
          </svg>
          <p>Germany</p>
        </div>
        <div className="home--rooms">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-profile-male`}></use>
          </svg>
          <p> 18 rooms</p>
        </div>

        <div className="home--area">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-expand`}></use>
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>

        <div className="home--price">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-key`}></use>
          </svg>
          <p>$9,500,000</p>
        </div>
        <button className="btn home--btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House6} alt="house1" className="home--img" />
        <svg className="home--like">
          <use xlinkHref={`${SvgIcons}#icon-heart-full`}></use>
        </svg>
        <h5 className="home--name">Modern Family Apartment</h5>
        <div className="home--location">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-map-pin`}></use>
          </svg>
          <p>Italy</p>
        </div>
        <div className="home--rooms">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-profile-male`}></use>
          </svg>
          <p> 3 rooms</p>
        </div>

        <div className="home--area">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-expand`}></use>
          </svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </div>

        <div className="home--price">
          <svg>
            <use xlinkHref={`${SvgIcons}#icon-key`}></use>
          </svg>
          <p>$600,000</p>
        </div>
        <button className="btn home--btn">Contact realtor</button>
      </div>
    </section>
  );
};

export default Homes;
