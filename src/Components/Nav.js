import { Link } from "@reach/router";
import React, { useState, useRef } from "react";

import "../../src/App.scss";

import Triangle from "../Components/Triangle";
import Logo from "../Components/Logo";

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

const Nav = () => {
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef6 = useRef();

  const [position, setPosition] = useState(inputRef);

  return (
    <>
      <Triangle xPosition={position} />

      <div className="navLogo">
        <Logo />

        <nav>
          <ul>
            <li>
              <div ref={inputRef} onClick={() => setPosition(inputRef)}>
                <NavLink to="/">Home</NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef1} onClick={() => setPosition(inputRef1)}>
                <NavLink to="/Work">Work</NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef2} onClick={() => setPosition(inputRef2)}>
                <NavLink to="/About">About</NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef3} onClick={() => setPosition(inputRef3)}>
                <NavLink to="/Teaching">Teaching</NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef4} onClick={() => setPosition(inputRef4)}>
                <NavLink to="/Blog">Blog</NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef5} onClick={() => setPosition(inputRef5)}>
                <NavLink to="/Contact">Contact</NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
