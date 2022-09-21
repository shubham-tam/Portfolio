import React from "react";
import styled from "styled-components";
import gif from "..//../images and videos/2048Gif.gif";
import NEB from "..//../images and videos/NEB.gif";
import dailyRoutine from "..//../images and videos/dailyTracker.png";
import domArray from "..//../images and videos/DOMarray.png";
import GLobalStyle from "../Style/GlobalStyle";

const Grid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
`;

const Item = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 20px;
  background-color: rgba(171, 178, 185, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Gif = styled.img`
  width: 180px;
  height: 180px;
`;

const Neb = styled.img`
  width: 180px;
  height: 120px;
`;

const Links = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  background-image: linear-gradient(to right, #f96f5d, #f96f5d 50%, #ffff 50%);
  background-size: 200% 100%;
  background-position: 100%;
  // display: inline-block;
  padding: 10px 20px;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }
`;

export default function ProjectsGrid() {
  return (
    <div>
      <GLobalStyle />
      <Grid>
        <div>
          <Item>
            <Gif src={gif} alt="" />
          </Item>
          <Links href="https://shubham2048.netlify.app/" target="._blank">
            {" "}
            2048 Game
          </Links>{" "}
        </div>
        <div>
          <Item>
            <img
              src={dailyRoutine}
              alt=""
              style={{ width: "200px", height: "110px" }}
            />
          </Item>
          <Links href="https://shubham2048.netlify.app/" target="._blank">
            {" "}
            Daily Routine Tracker
          </Links>{" "}
        </div>{" "}
        <div>
          <Item>
            <img
              src={domArray}
              alt=""
              style={{ width: "200px", height: "110px" }}
            />
          </Item>
          <Links href="https://dom-arrayy.netlify.app/" target="._blank">
            {" "}
            DOM Array Methods
          </Links>{" "}
        </div>
        <div>
          <Item>
            <Neb src={NEB} alt="" />
          </Item>
          <Links
            href="https://www.figma.com/proto/pTXCJedcygvquuGyFDNhCt/applyNEB?page-id=0%3A1&node-id=1%3A2&viewport=-4673%2C1045%2C0.58&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            target="._blank"
          >
            {" "}
            applyNEB - Figma Prototype
          </Links>{" "}
        </div>
      </Grid>
    </div>
  );
}
