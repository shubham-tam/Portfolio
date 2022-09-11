import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../images and videos/logo.png";
import menu from "../images and videos/icons8-menu-50.png";
import styled from "styled-components";

const NavLinkk = styled(NavLink)`
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid white;
  }

  &.${(props) => props.activeClassName} {
    border-bottom: 1px solid white;
  }
`;

function Nav() {
  return (
    <div>
      <div>
        <NavLinkk to="/">
          {" "}
          <img src={logo} alt="" className="logo" />
        </NavLinkk>

        <ul>
          <NavLinkk activeClassName="active" to="/Projects">
            {" "}
            Projects{" "}
          </NavLinkk>
          <NavLinkk activeClassName="active" to="/AboutMe">
            {" "}
            About Me{" "}
          </NavLinkk>

          <li> Get In Touch </li>
          <li>
            {" "}
            <img src={menu} alt="" className="menu" />{" "}
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Nav;
