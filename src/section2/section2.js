import React from "react";
import "./section2.css";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section2 = () => {
  return (
    <div className="Section2">
      <h1 className="Section2H1">
        Qrty makes all the difference
      </h1>
      <p className="Section2P">
        If you want to create your own QR code, a
        good tool for doing so is the Qrty QR
        generator, due to its ease of use and all
        the options it offers to make your ideas
        come true or your business grow.
      </p>

      {/* <div className="section2Circle">
        <CheckIcon
          style={{
            color: "white",
            padding: "3px",
          }}
        />
      </div> */}

      <div class="parent">
        <div class="div1">
          {" "}
          <div className="section2Circle">
            <CheckIcon
              style={{
                padding: "3px",
              }}
            />
          </div>
          <span className="section2CircleText">
            Create unlimited dynamic QR codes.
          </span>
        </div>
        <div class="div2">
          <div className="section2Circle">
            <CheckIcon
              style={{
                padding: "3px",
              }}
            />
          </div>
          <span className="section2CircleText">
            Dynamic QR codes, which you can edit
            and manage whenever you want.
          </span>
        </div>
        <div class="div3">
          <div className="section2Circle">
            <CheckIcon
              style={{
                padding: "3px",
              }}
            />
          </div>
          <span className="section2CircleText">
            Complete analytics to track your QR
            codes.
          </span>
        </div>
        <div class="div4">
          <div className="section2Circle">
            <CheckIcon
              style={{
                padding: "3px",
              }}
            />
          </div>
          <span className="section2CircleText">
            Customise the codes with our design
            tool.
          </span>
        </div>
        <div class="div5">
          <div className="section2Circle">
            <CheckIcon
              style={{
                padding: "3px",
              }}
            />
          </div>
          <span className="section2CircleText">
            Export data into CSV/XLSX.
          </span>
        </div>
        <div class="div6">
          <div className="section2Circle">
            <CheckIcon
              style={{
                padding: "3px",
              }}
            />
          </div>
          <span className="section2CircleText">
            Download the QR code in different
            formats.
          </span>
        </div>
      </div>

      <div className="section2BtnContainer">
        <a href="">
          <button className="Section2BTN">
            <div className="Section2BTNContent">
              Create QR code
              <span className="Section2BTNArrow">
                {" "}
                <ArrowForwardIcon />
              </span>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Section2;
