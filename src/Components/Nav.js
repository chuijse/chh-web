import { Link } from "@reach/router";
import React from "react";
import "../../src/App.scss";

const NavLink = (props) => (
  <Link
    className="navlink"
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "#FF7F2A" : "black",
        },
      };
    }}
  />
);

const Home = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li> | </li>
          <li>
            <NavLink to="/Work">Work</NavLink>
          </li>
          <li> | </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li> | </li>
          <li>
            <NavLink to="/Teaching">Teaching</NavLink>
          </li>
          <li> | </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li> | </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
        {props.children}
      </nav>
    </>
  );
};

export default Home;
