import "./Story.scss";
import React from "react";
import Story1 from "../../images/story-1.jpeg";
import Story2 from "../../images/story-2.jpeg";

const Story = () => {
  return (
    <>
      <div className="story--pictures">
        <img src={Story1} alt="couple" className="story--img--1" />
        <img src={Story2} alt="couple2" className="story--img--2" />
      </div>
      <div className="story--content">
        <h3 className="heading--3 mb-sm">Happy Customers</h3>
        <h2 className="heading--2 heading--2--dark mb-md">
          &ldquo;The best decision of our lives.&rdquo;
        </h2>
        <p className="story--text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your home</button>
      </div>
    </>
  );
};

export default Story;
