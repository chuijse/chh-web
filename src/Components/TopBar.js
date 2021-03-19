import React from "react";
import Nav from "./Nav";
import "../App.scss";
import logo from "../images/logo.svg";
import logoText from "../images/logoText.svg";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="line"></div>
      <div className="bar">
        <div className="logo">
          <img src={logo} alt="Cristian Huijse heise logo" />
          <img src={logoText} alt="Cristian Huijse heise Texto" />
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default TopBar;
