import React from "react";
import "./section4.css";
import CheckIcon from "@mui/icons-material/Check";

const Section4 = () => {
  return (
    <div className="Section4">
      <h1 className="Section4H1">
        Subscribe to Qrty and access all the
        advantages offered
      </h1>
      <div class="parentS4">
        <div class="div1S4">
          <div class="Container1S4">
            <div className="Container1i">
              <div className="section2Circle">
                <CheckIcon
                  style={{
                    color: "white",
                    padding: "3px",
                  }}
                />
              </div>
              QR editing and management.
            </div>
            <div className="Container1i">
              <div className="section2Circle">
                <CheckIcon
                  style={{
                    color: "white",
                    padding: "3px",
                  }}
                />
              </div>
              QR dynamic design.
            </div>
            <div className="Container1i">
              <div className="section2Circle">
                <CheckIcon
                  style={{
                    color: "white",
                    padding: "3px",
                  }}
                />
              </div>
              Unlimited scans.
            </div>
            <div className="Container1i">
              <div className="section2Circle">
                <CheckIcon
                  style={{
                    color: "white",
                    padding: "3px",
                  }}
                />
              </div>
              Variety of download formats.
            </div>
            <div className="Container1i">
              <div className="section2Circle">
                <CheckIcon
                  style={{
                    color: "white",
                    padding: "3px",
                  }}
                />
              </div>
              Complete analytical QR.
            </div>
            <div className="Container1i">
              <div className="section2Circle">
                <CheckIcon
                  style={{
                    color: "white",
                    padding: "3px",
                  }}
                />
              </div>
              Export data into CSV/XLSX.
            </div>
          </div>
        </div>
        <div class="div2S4">
          <div class="Container2S4">
            <img
              className="Container2S4Img"
              src="https://qrty.mobi/static/media/step_2.94540cdc.svg"
            />
            <p className="Container2S4P1">
              Access with the trial plan to all
              functionalities for 14 days
            </p>
            <h3 className="Container2S4H3">
              0,50 €
            </h3>
            <p className="Container2S4P2">
              Afterwards your subscription will be
              renewed to the annual plan in case
              you do not cancel it for 200,00 €
              /year.
            </p>
            <div className="S4Btn">
              <a href="#">
                <button className="RegisterBtnS4">
                  More information
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
