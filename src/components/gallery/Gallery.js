import "./Gallery.scss";
import React from "react";
import Gal1 from "../../images/gal-1.jpeg";

const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery--item gallery--item--1">
        <img className="gallery--img" src={Gal1} alt="galleryimage1" />
      </figure>

      <figure className="gallery--item gallery--item--2">
        <img
          className="gallery--img"
          src={require("../../images/gal-2.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--3">
        <img
          className="gallery--img"
          src={require("../../images/gal-3.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--4">
        <img
          className="gallery--img"
          src={require("../../images/gal-4.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--5">
        <img
          className="gallery--img"
          src={require("../../images/gal-5.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--6">
        <img
          className="gallery--img"
          src={require("../../images/gal-6.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--7">
        <img
          className="gallery--img"
          src={require("../../images/gal-7.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--8">
        <img
          className="gallery--img"
          src={require("../../images/gal-8.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--9">
        <img
          className="gallery--img"
          src={require("../../images/gal-9.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--10">
        <img
          className="gallery--img"
          src={require("../../images/gal-10.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--11">
        <img
          className="gallery--img"
          src={require("../../images/gal-11.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--12">
        <img
          className="gallery--img"
          src={require("../../images/gal-12.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--13">
        <img
          className="gallery--img"
          src={require("../../images/gal-13.jpeg")}
          alt="galleryimage1"
        />
      </figure>

      <figure className="gallery--item gallery--item--14">
        <img
          className="gallery--img"
          src={require("../../images/gal-14.jpeg")}
          alt="galleryimage1"
        />
      </figure>
    </section>
  );
};

export default Gallery;
