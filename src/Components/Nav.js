import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../images and videos/logo.png";
import menu from "../images and videos/icons8-menu-50.png";
import styled from "styled-components";
import GLobalStyle from "./Style/GlobalStyle";

const NavLinkk = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #f96f5d;
    // border-bottom: 1px solid #f96f5d;
    // border-bottom: 1px solid white;
  }

  &.${(props) => props.activeClassName} {
    // border-bottom: 1px solid white;
    border-bottom: 1px solid #f96f5d;
  }
`;

function Nav() {
  return (
    <div>
      <GLobalStyle />
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
          <NavLinkk activeClassName="active" to="/GetInTouch">
            {" "}
            Get In Touch{" "}
          </NavLinkk>
          <NavLinkk activeClassName="active" to="/Resume">
            {" "}
            Resume{" "}
          </NavLinkk>

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
