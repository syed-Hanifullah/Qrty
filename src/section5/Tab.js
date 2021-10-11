import React, { Component } from "react";
import "./section5.css";

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.onTabClick = this.onTabClick.bind(this);
  }

  onTabClick() {
    this.props.handleTabClick(
      this.props.tabIndex
    );
  }
  render() {
    const {
      label,
      isActive,
      handleTabClick,
    } = this.props;

    return (
      <em
        className={
          isActive ? "activeTab" : "nonActive"
        }
        style={{
          display: "flex",
          textAlign: "center",
          BorderColor: isActive
            ? "green"
            : "white",
        }}
        onClick={this.onTabClick}
      >
        {label}
      </em>
    );
  }
}
