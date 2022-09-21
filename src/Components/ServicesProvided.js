import React from "react";
import styled from "styled-components";
import html from "../images and videos/html.png";
import css from "../images and videos/css.png";
import js from "../images and videos/js.png";
import react from "../images and videos/react.png";
import ps from "../images and videos/ps.png";
import GLobalStyle from "./Style/GlobalStyle";

const Grid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
`;

const Item = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: rgba(171, 178, 185, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 135px;
  height: 135px;
`;

export default function ServicesProvided() {
  return (
    <div>
      {/* <GLobalStyle /> */}
      <Grid>
        <Item>
          <Image src={html} alt="" />
        </Item>
        <Item>
          <Image src={css} alt="" />
        </Item>
        <Item>
          <Image src={js} alt="" />
        </Item>
        <Item>
          <Image src={react} alt="" />
        </Item>
        <Item>
          <Image src={ps} alt="" />
        </Item>
      </Grid>
    </div>
  );
}
