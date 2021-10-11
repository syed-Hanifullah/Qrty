import React from "react";
import "./section1.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Section1 = () => {
  return (
    <>
      <div className="Section1">
        {" "}
        <img
          className="Section1img"
          src="https://qrty.mobi/static/media/main_banner_x1.3a2406a4.png"
        />
        <h1 className="Section1H1">
          Create your own QR codes and boost your
          business or idea.
        </h1>
        <p className="Section1P">
          Easily generate, manage and
          statistically track your QR codes.
        </p>
        <button className="Section1BTN">
          <div className="Section1BTNContent">
            Create QR code
            <span className="Section1BTNArrow">
              {" "}
              <ArrowForwardIcon />
            </span>
          </div>
        </button>
        <img
          className="Section1imgRes"
          src="https://qrty.mobi/static/media/main_banner_x1.3a2406a4.png"
        />
      </div>

      <div className="sectionSub">
        <div className="sectionSubImgText">
          <img
            className="sectionSubImg"
            src="https://qrty.mobi/static/media/step_1.d650ec93.svg"
          />
          <span className="sectionSubText">
            {" "}
            Dynamic and editable QR codes
          </span>
        </div>
        <div className="sectionSubImgText">
          <img
            className="sectionSubImg"
            src="https://qrty.mobi/static/media/step_2.94540cdc.svg"
          />
          <span className="sectionSubText">
            {" "}
            Complete analytics{" "}
          </span>
        </div>
        <div className="sectionSubImgText">
          <img
            className="sectionSubImg"
            src="https://qrty.mobi/static/media/step_3.e66c4ab2.svg"
          />
          <span className="sectionSubText">
            {" "}
            Wide variety of designs{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Section1;
