import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import gif from "..//../images and videos/2048Gif.gif";
import NEB from "..//../images and videos/NEB.gif";
import dailyRoutine from "..//../images and videos/dailyTracker.png";
import domArray from "..//../images and videos/DOMarray.png";

import GLobalStyle from "../Style/GlobalStyle";

const NavLinkk = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

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
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-image: linear-gradient(to right, #f96f5d, #f96f5d 50%, #ffff 50%);
  background-size: 200% 100%;
  background-position: 100%;
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

const OuterBox = styled.div`
  width: 220px;
  height: 220px;
  // border-radius: 20px;
  // background-color: rgba(171, 178, 185, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const ShowMore = styled.div`
//   width: 150px;
//   height: 100px;
//   border-radius: 20px;
//   // background-color: rgba(171, 178, 185, 0.1);
//   // background-color: rgba(249, 111, 93);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 22px;
//   transition: transform 500ms $ease-in-out-back,
//     background-position 800ms $ease-in-out-back, box-shadow 500ms linear;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

//   &:hover {
//     color: #f96f5d;
//     // background: #f6416c;

//     transform: scale(1.1);
//     // background-position: -60px;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//   }
// `;

// const ShowMore = styled.div`
//   align-items: center;
//   // appearance: none;
//   background-color: #f96f5d;
//   border-radius: 4px;
//   border-width: 0;
//   box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
//     rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #fff 0 -5px 0 inset;
//     rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #fff 0 -5px 0 ;
//     box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
//     rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #fff 0 -5px 0 ;
//   color: #fcfcfd;
//   cursor: pointer;
//   display: inline-flex;
//   font-family: "JetBrains Mono", monospace;
//   height: 80px;
//   width: 200px;
//   justify-content: center;
//   line-height: 1;
//   padding-left: 16px;
//   padding-right: 16px;
//   position: relative;
//   text-align: left;
//   transition: box-shadow 0.15s, transform 0.15s;
//   font-size: 22px;

//   &:focus {
//     box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
//       rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
//   }

//   &:hover {
//     box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
//       rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
//     transform: translateY(-5px);
//     transform: scale(1.2);
//   }
// `;

const ShowMore = styled.div`
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  border: 1px solid white;
  cursor: pointer;
  position: relative;
  &:after {
    content: "";
    background-color: #f96f5d;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
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
            applyNEB <br />
            Figma Prototype
          </Links>{" "}
        </div>
        <div>
          <NavLinkk activeClassName="active" to="/Projects">
            <OuterBox>
              <ShowMore>View More</ShowMore>
            </OuterBox>
          </NavLinkk>{" "}
        </div>
      </Grid>
    </div>
  );
}
