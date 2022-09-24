import React, { useState } from "react";
import "../App.css";
import logo from "../images and videos/logo.png";

import {
  NavLinkkLogo,
  Nav,
  Menu,
  Logo,
  Hamburger,
  NavLinkk,
  UnorderedList,
} from "./Style/NavStyle";
import GLobalStyle from "./Style/GlobalStyle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <GLobalStyle />
      <NavLinkkLogo to="/">
        <Logo src={logo} alt="" />
      </NavLinkkLogo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <UnorderedList>
          <NavLinkk activeClassName="active" to="/Projects">
            {" "}
            Projects{" "}
          </NavLinkk>
          {/* <NavLinkk activeClassName="active" to="/AboutMe">
              {" "}
              About Me{" "}
            </NavLinkk> */}
          {/* <NavLinkk activeClassName="active" to="/GetInTouch">
              {" "}
              Get In Touch{" "}
            </NavLinkk> */}
          <NavLinkk activeClassName="active" to="/Resume">
            {" "}
            Resume{" "}
          </NavLinkk>
        </UnorderedList>
      </Menu>
    </Nav>
  );
};

export default Navbar;
