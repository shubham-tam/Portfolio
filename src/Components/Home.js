import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import GLobalStyle from "./Style/GlobalStyle";
import { MessageAndTime } from "../MessageAndTime";
import ProjectsGrid from "./Projects Page/ProjectsGrid";
import right from "../images and videos/right.png";
import ServicesProvided from "./ServicesProvided";
import FooterIcons from "./FooterIcons";

const NavLinkk = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #f96f5d;
  }

  &.${(props) => props.activeClassName} {
    border-bottom: 1px solid white;
  }
`;

export default function Home() {
  return (
    <div>
      <GLobalStyle />
      <Nav />
      <MessageAndTime />
      <p
        style={{
          marginLeft: "20px",
          fontSize: "25px",
          letterSpacing: "2px",
          lineHeight: "2.1",
          minheight: "100vh",
        }}
      >
        {" "}
        <a style={{ color: "#f96f5d" }}> Hello</a>, 👋 I'm Shubham. I'm an
        aspiring Web Developer
        <br />
        and a Tech Enthusiast. <br />
        Please feel free to check my portfolio.
      </p>
      <br />
      <h3
        style={{
          marginLeft: "20px",
          fontSize: "25px",
          letterSpacing: "2px",
          lineHeight: "2.1",
          minheight: "100vh",
        }}
      >
        <NavLinkk activeClassName="active" to="/Resume">
          <img src={right} alt="" /> Resume{" "}
        </NavLinkk>{" "}
      </h3>
      <br />
      <h1
        style={{
          color: "#f96f5d",
          display: "flex",
          justifyContent: "center",
          letterSpacing: "3px",
        }}
      >
        Services Provided
      </h1>
      <ServicesProvided />
      <br />
      <br />
      <br />
      <h1
        style={{
          // color: "white",
          color: "#f96f5d",
          display: "flex",
          justifyContent: "center",
          letterSpacing: "3px",
          // alignitems: "center",
        }}
      >
        My Projects
      </h1>
      <ProjectsGrid />
      <br />
      <br />
      <br />
      <FooterIcons />
    </div>
  );
}
