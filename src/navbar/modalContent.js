import React from "react";
import "./modalContent.css";
import ClearIcon from "@mui/icons-material/Clear";

const ModalContent = ({ handleClose }) => {
  return (
    <div className="modalContent">
      <span className="modalContentCross">
        <ClearIcon onClick={handleClose} />
      </span>

      <h2 className="modalContentH2">
        Create Account
      </h2>
      <div className="formDiv">
        <form>
          <div className="formInput">
            <label for="fname">First Name</label>
            <input
              autoFocus
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
          </div>
          <div className="formInput">
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>
          <div class="checkboxModal">
            <input type="checkbox" />
            <label class="container">
              I have read and accept the terms of
              use and contracting and the privacy
              policy.
            </label>
          </div>
          <br />
          <br />
          <button className="RegisterBtnModal">
            Register
          </button>
        </form>
      </div>

      <p className="loginP">
        Already have an account? Log-In
      </p>
    </div>
  );
};

export default ModalContent;
