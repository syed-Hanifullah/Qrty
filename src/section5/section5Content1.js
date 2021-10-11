import React from "react";
import "./section5.css";
const Section5Content1 = ({
  imgURL,
  h1,
  p,
  btnIcon,
  btnText,
}) => {
  return (
    <div className="Section5Content1">
      <img className="content1img" src={imgURL} />
      <div className="Section5Content1content">
        <h1 className="Section1H1">{h1}</h1>
        <p className="Section1P">{p}</p>
        <button className="Section1BTN">
          <div className="Section1BTNContent">
            {btnText}
            <span className="Section1BTNArrow">
              <btnIcon />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Section5Content1;
