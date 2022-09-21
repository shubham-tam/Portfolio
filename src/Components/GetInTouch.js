import React from "react";
import Nav from "./Nav";
import FooterIcons from "./FooterIcons";
import GLobalStyle from "./Style/GlobalStyle";

export default function GetInTouch() {
  return (
    <div>
      <GLobalStyle />
      <div>
        <Nav />
        <div>get in touch</div>
        <div> input fields</div>
        <FooterIcons />
      </div>
    </div>
  );
}
