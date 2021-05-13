import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Triangle from "../Components/Triangle";
import Logo from "../Components/Logo";
import { NavLink, useLocation } from "react-router-dom";

const isActive = (onActive) => (match, location) => {
  if (match) {
    onActive();
  }
  return match;
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
                <NavLink
                  to="/"
                  exact={true}
                  activeClassName="selected"
                  isActive={isActive(() => setPosition(inputRef1))}
                >
                  About
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef2}>
                <NavLink
                  to="/Projects"
                  activeClassName="selected"
                  isActive={isActive(() => setPosition(inputRef2))}
                >
                  Projects
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef3}>
                <NavLink
                  to="/Teaching"
                  activeClassName="selected"
                  isActive={isActive(() => setPosition(inputRef3))}
                >
                  Teaching
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef4}>
                <NavLink
                  to="/Blog"
                  activeClassName="selected"
                  isActive={isActive(() => setPosition(inputRef4))}
                >
                  Blog
                </NavLink>
              </div>
            </li>
            <li> | </li>
            <li>
              <div ref={inputRef5}>
                <NavLink
                  to="/Contact"
                  activeClassName="selected"
                  isActive={isActive(() => setPosition(inputRef5))}
                >
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
