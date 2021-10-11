import React from "react";
import Tab from "./Tab";
import "./section5.css";

const Tabs = ({
  activeTabIndex,
  data,
  handleTabClick,
}) => (
  <div
    className="S5btnGroup"
    style={{
      display: "flex",
      textAlign: "center",
    }}
  >
    {data.map(({ label }, index) => {
      const isActive = activeTabIndex === index;
      return (
        <Tab
          label={label}
          isActive={isActive}
          handleTabClick={handleTabClick}
          tabIndex={index}
        />
      );
    })}
  </div>
);

export default Tabs;
