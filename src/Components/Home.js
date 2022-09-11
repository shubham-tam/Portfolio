import React from "react";
import Nav from "./Nav";
// import picture from "../images and videos/shubham.png";
// import { Picture } from "./Style/Home";
import { MessageAndTime } from "../MessageAndTime";
import ProjectsGrid from "./Projects/ProjectsGrid";

// import TextBody from "./TextBody";

export default function Home() {
  return (
    <div>
      <Nav />
      <MessageAndTime />
      <p
        style={{
          marginLeft: "20px",
          fontSize: "25px",
          letterSpacing: "2px",
          lineHeight: "2.1",
          height: "40vh",
        }}
      >
        {" "}
        Hello, 👋 I'm Shubham. I'm a aspiring Web Developer
        <br />
        and a Tech Enthusiast. <br />
        Please feel free to check my portfolio.
      </p>
      services provided
      <ProjectsGrid />
      {/* <Picture src={picture} alt="" /> */}
      {/* <TextBody /> */}
    </div>
  );
}
