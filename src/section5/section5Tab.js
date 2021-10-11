import React from "react";
import PagesSharpIcon from "@mui/icons-material/PagesSharp";
import Tabs from "./Tabs";
import Content from "./Content";
import Section5Content1 from "./section5Content1";
import content1Img from "./Screenshot.png";
import content2Img from "./content2.png";
import content3Img from "./content3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
export default class TabView extends React.Component {
  constructor(props) {
    const btn1 = (
      <button className="Section5tabBtn">
        <div className="section5Circle">
          <PagesSharpIcon
            style={{
              color: "white",
              padding: "3px",
            }}
          />
        </div>
        <span className="tabBtnText">Menu</span>
      </button>
    );

    const btn2 = (
      <button className="Section5tabBtn">
        <div className="section5Circle">
          <DashboardIcon
            style={{
              color: "white",
              padding: "3px",
            }}
          />
        </div>
        <span className="tabBtnText">
          vCard Plus
        </span>
      </button>
    );

    const btn3 = (
      <button className="Section5tabBtn">
        <div className="section5Circle">
          <BusinessIcon
            style={{
              color: "white",
              padding: "3px",
            }}
          />
        </div>
        <span className="tabBtnText">
          Business
        </span>
      </button>
    );

    // //////////////////////////////////////////////////
    const content1 = (
      <Section5Content1
        imgURL={content1Img}
        h1={"Menu"}
        p={
          "if you have a bar or restaurant, this type of QR code is for you. No more reprinting menus every time you make modification."
        }
        btnIcon={ArrowForwardIcon}
        btnText={"Create QR code"}
      />
    );
    const content2 = (
      <Section5Content1
        imgURL={content2Img}
        h1={"vCard Plus"}
        p={
          "Take your business card to the next level with a QR code. Share more information about your profile and your company in an innovative and unique way. And the best of all, change the information in the QR code whenever you need to."
        }
        btnIcon={ArrowForwardIcon}
        btnText={"Create QR code"}
      />
    );
    const content3 = (
      <Section5Content1
        imgURL={content3Img}
        h1={"Business"}
        p={
          "Share your business information easily and quickly with everyone: hours, location, contact and all the information that may be of interest to potential customers."
        }
        btnIcon={ArrowForwardIcon}
        btnText={"Create QR code"}
      />
    );
    super(props);
    this.state = {
      activeTabIndex: 0,
      initialData: [
        {
          label: btn1,
          content: content1,
        },
        {
          label: btn2,
          content: content2,
        },
        {
          label: btn3,
          content: content3,
        },
      ],
    };
    this.handleTabClick = this.handleTabClick.bind(
      this
    );
  }

  handleTabClick(index) {
    this.setState({
      activeTabIndex: index,
    });
  }

  render() {
    const {
      initialData,
      activeTabIndex,
    } = this.state;
    const activeItem = this.state.initialData[
      activeTabIndex
    ];
    return (
      <>
        <div className="S5btnGroup">
          <Tabs
            handleTabClick={this.handleTabClick}
            data={this.state.initialData}
            activeTabIndex={activeTabIndex}
          />
        </div>
        <Content content={activeItem.content} />
      </>
    );
  }
}
