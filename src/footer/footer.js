import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div class="row">
        <div class="column1">
          <img
            className="footerImg"
            src="https://qrty.mobi/static/media/QRTY_logo.d64a028e.svg"
          />
        </div>
        <div class="column2">
          <h2 className="footerH2">Service</h2>
          <p className="footerP">
            Create QR code
          </p>
        </div>
        <div class="column3">
          <h2 className="footerH2">Company</h2>
          <p className="footerP">Prices</p>
          <p className="footerP">
            Terms of Use and Contract
          </p>
          <p className="footerP">
            Privacy Policy
          </p>
          <p className="footerP">
            Cookies Policy
          </p>
        </div>
        <div class="column4">
          <h2 className="footerH2">Help</h2>
          <p className="footerP">Contact us</p>
          <p className="footerP">FAQ</p>
          <p className="footerP">
            Cancel subscription
          </p>
        </div>
      </div>

      <div class="row2">
        <div class="column2i">
          <p className="footerPII">
            2021 © Qrty, Spain - ‘QR Code’ is a
            trademark of DENSO WAVE INCORPORATED
          </p>
        </div>
        <div class="column2ii">
          <p className="footerPII">
            <span>
              {" "}
              Terms of Use and Contract{" "}
            </span>
            |<span> Privacy Policy </span>|
            <span> Cookies Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
