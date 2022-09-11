import React from "react";
import Nav from "../Nav";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <div>
      <Nav />
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Projects
      </h2>
      <ProjectsGrid />
    </div>
  );
}
