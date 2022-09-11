import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const Rows = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
`;

export default function ProjectsGrid() {
  return (
    <div>
      <Grid>
        <Rows>2048 Game</Rows>
        <Rows>Daily Routine Tracker</Rows>
        <Rows>To Do List</Rows>
        <Rows>Dom Array Method</Rows>
        <Rows>applyNeb - A Figma Prototype</Rows>
      </Grid>
    </div>
  );
}
