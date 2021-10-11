import React from "react";
import "./section3.css";
const Section3 = () => {
  return (
    <div className="Section3">
      <h1 className="Section3H1">
        Create your own QR code in a matter of
        minutes
      </h1>

      <div className="section3ImgGroup">
        <img src="https://qrty.mobi/static/media/step_1.d650ec93.svg" />
        <img src="https://qrty.mobi/static/media/step_2.94540cdc.svg" />
        <img src="https://qrty.mobi/static/media/step_3.e66c4ab2.svg" />
      </div>
      <div className="section3TextGroup">
        <div className="section3TextGroupText">
          Choose the content of your QR code
        </div>
        <div className="section3TextGroupText">
          Customise and design it as you like{" "}
        </div>
        <div className="section3TextGroupText">
          Download your QR code
        </div>
      </div>
      <div className="section3SubTextGroup">
        <div className="section3SubTextGroupText">
          Select from a wide variety of options:
          PDF, menu, video, business cards, web,
          apps, etc{" "}
        </div>
        <div className="section3SubTextGroupText">
          Fill in all the information and use our
          QR generator to get a unique design.
        </div>
        <div className="section3SubTextGroupText">
          Get your QR code in different formats
          (pdf, png, svg), print it or show it in
          a digital format and voila!
        </div>
      </div>

      <div className="section3ResImgGroup">
        <img src="https://qrty.mobi/static/media/step_1.d650ec93.svg" />
        <div className="section3ResTextGroupText">
          Choose the content of your QR code
        </div>
        <div className="section3ResSubTextGroupText">
          Select from a wide variety of options:
          PDF, menu, video, business cards, web,
          apps, etc{" "}
        </div>

        <img src="https://qrty.mobi/static/media/step_2.94540cdc.svg" />
        <div className="section3ResTextGroupText">
          Customise and design it as you like{" "}
        </div>
        <div className="section3ResSubTextGroupText">
          Fill in all the information and use our
          QR generator to get a unique design.
        </div>

        <img src="https://qrty.mobi/static/media/step_3.e66c4ab2.svg" />
        <div className="section3ResTextGroupText">
          Download your QR code
        </div>
        <div className="section3ResSubTextGroupText">
          Get your QR code in different formats
          (pdf, png, svg), print it or show it in
          a digital format and voila!
        </div>
      </div>
    </div>
  );
};

export default Section3;
