import { Link } from "@reach/router";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Triangle from "../Components/Triangle";
import Logo from "../Components/Logo";

const NavLink = (props) => {
  const [active, setActive] = useState(false);

  const updateActive = () => {
    if (active) {
      setTimeout(props.onActive, 200);
    }
  };

  useEffect(() => updateActive(), [active]);

  return (
    <Link
      className="navlink"
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        setActive(isCurrent);
        return {
          style: {
            color: isCurrent ? "#FF7F2A" : "black",
          },
        };
      }}
    />
  );
};

const Nav = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();

  const [position, setPosition] = useState(0);

  return (
    <>
      <Triangle xPosition={position} />

      <div className="navLogo">
        <Logo />

        <nav>
          <ul>
            <li>
              <div ref={inputRef1}>
                <NavLink to="/" onActive={() => setPosition(inputRef1)}>
                  About
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef2}>
                <NavLink to="/Projects" onActive={() => setPosition(inputRef2)}>
                  Projects
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef3}>
                <NavLink to="/Teaching" onActive={() => setPosition(inputRef3)}>
                  Teaching
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef4}>
                <NavLink to="/Blog" onActive={() => setPosition(inputRef4)}>
                  Blog
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef5}>
                <NavLink to="/Contact" onActive={() => setPosition(inputRef5)}>
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
