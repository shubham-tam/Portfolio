import React from "react";
import styled from "styled-components";
import html from "../images and videos/html.png";
import css from "../images and videos/css.png";
import js from "../images and videos/js.png";
import react from "../images and videos/react.png";
import ps from "../images and videos/ps.png";

const Grid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 5px;
  }
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
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    top: -20px;
  }
`;

const Image = styled.img`
  width: 135px;
  height: 135px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export default function ServicesProvided() {
  return (
    <div>
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
