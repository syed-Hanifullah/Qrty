import React from "react";
import "./section6.css";
import section6Data from "./section6Data.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Section6 = () => {
  return (
    <>
      <div className="Section6">
        <h1 className="Section4H1 s6h1">
          Basic concepts of a QR Code
        </h1>
        <div className="S6Content">
          {section6Data.map((data) => (
            <div className="contentBox">
              <h2 className="Section6H1">
                {data.title}
              </h2>
              <p className="section6Content">
                {data.content}
              </p>
            </div>
          ))}
        </div>

        <div className="S6contentRes">
          {section6Data.map((data) => (
            <div className="S6contentResData">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {data.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
        <div className="S6subData">
          <h1 className="S6subH1">
            Want to know more?
          </h1>
          <p className="S6subP">
            Check our FAQs to find an answer to
            any questions you may have about our
            QR codes.
          </p>
          <div className="S6btnDIV">
            <button className="S6btn">
              Answer All your questions
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
